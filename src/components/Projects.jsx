import { useState, useEffect, useCallback } from 'react'
import { PROJECTS } from '../data/portfolio'
import useInView from '../hooks/useInView'

// ── Filter categories derived from data ─────────
const ALL_FILTERS = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'backend', label: 'Backend / Integration' },
]

// ── SVG Icons ────────────────────────────────────
const IconGithub = ({ size = 13 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
)
const IconExternal = ({ size = 13 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)
const IconChevronLeft = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
)
const IconChevronRight = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
)
const IconClose = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)
const IconStar = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
)
const IconArrow = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
)
const IconInfo = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
)

// ── Thumbnail Placeholder ─────────────────────────
function ThumbPlaceholder({ slide, label }) {
    return (
        <div
            className="project-thumb-placeholder"
            style={{ background: `linear-gradient(135deg, ${slide.color}, ${slide.color}CC)` }}
        >
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <p style={{
                    fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.92)',
                    letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 4,
                }}>{slide.label}</p>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>
                    {label}
                </p>
            </div>
        </div>
    )
}

// ── Slide Thumb with transitions ─────────────────
function SlideThumb({ project, pi, slides, setSlides, inModal = false }) {
    const [dir, setDir] = useState(null) // 'left' | 'right'

    const change = (d) => {
        setDir(d > 0 ? 'left' : 'right')
        setSlides(prev => prev.map((cur, i) => {
            if (i !== pi) return cur
            const total = project.slides.length
            return (cur + d + total) % total
        }))
    }

    const goTo = (to) => {
        setDir(slides[pi] < to ? 'left' : 'right')
        setSlides(prev => prev.map((cur, i) => i === pi ? to : cur))
    }

    const cur = slides[pi]
    const currentSlide = project.slides[cur] || project.slides[0]

    return (
        <div className={inModal ? 'modal-thumb' : 'project-thumb'}>
            {/* Slides */}
            {project.slides.map((slide, si) => {
                const isActive = cur === si
                const cls = isActive ? 'slide-item active'
                    : `slide-item ${dir === 'left' ? 'exit-left' : 'exit-right'}`
                return (
                    <div key={si} className={cls}>
                        {slide.image
                            ? <img src={slide.image} alt={slide.label} className="project-thumb-img" />
                            : <ThumbPlaceholder slide={slide} label={inModal ? project.name : 'Preview'} />
                        }
                    </div>
                )
            })}

            {!inModal ? (
                <div className="project-thumb-card-overlay">
                    <div className="project-thumb-card-row">
                        <span className="project-thumb-card-type">{project.type}</span>
                        <span className="project-thumb-card-year">{project.year}</span>
                    </div>
                    <h3 className="project-thumb-card-title">{project.name}</h3>
                </div>
            ) : (
                <div className={`slide-caption${inModal ? ' modal' : ''}`}>
                    <span>{currentSlide.label}</span>
                </div>
            )}

            {inModal && project.slides.length > 1 && (
                <div className="slide-strip">
                    <button
                        className="slide-nav-edge prev"
                        onClick={e => { e.stopPropagation(); change(-1) }}
                        aria-label="Previous"
                    ><IconChevronLeft /></button>

                    <div className="slide-pill-wrap">
                        {project.slides.map((slide, si) => (
                            <button
                                key={si}
                                className={`slide-mini-btn${cur === si ? ' active' : ''}`}
                                onClick={e => { e.stopPropagation(); goTo(si) }}
                                aria-label={`Tampilkan ${slide.label}`}
                                style={{ background: cur === si ? `linear-gradient(135deg, ${slide.color}, ${slide.color}CC)` : 'rgba(255,255,255,0.15)' }}
                            >
                                <span className="sr-only">{slide.label}</span>
                            </button>
                        ))}
                    </div>

                    <button
                        className="slide-nav-edge next"
                        onClick={e => { e.stopPropagation(); change(1) }}
                        aria-label="Next"
                    ><IconChevronRight /></button>
                </div>
            )}

            {!inModal && project.featured && (
                <span className="thumb-badge-featured">
                    <IconStar /> Featured
                </span>
            )}
        </div>
    )
}

// ── Project Modal ─────────────────────────────────
function ProjectModal({ project, pi, slides, setSlides, onClose }) {
    const [closing, setClosing] = useState(false)

    const handleClose = useCallback(() => {
        setClosing(true)
        setTimeout(onClose, 210)
    }, [onClose])

    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') handleClose() }
        document.addEventListener('keydown', handler)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handler)
            document.body.style.overflow = ''
        }
    }, [handleClose])

    return (
        <div
            className={`modal-overlay${closing ? ' closing' : ''}`}
            onClick={handleClose}
        >
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                {/* Thumbnail Slider */}
                <SlideThumb
                    project={project} pi={pi}
                    slides={slides} setSlides={setSlides}
                    inModal
                />

                {/* Close button */}
                <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
                    <IconClose />
                </button>

                {/* Header */}
                <div className="modal-header modal-header-rich">
                    <div>
                        <p className="modal-section-label">Project detail</p>
                        <h3 className="modal-title">{project.name}</h3>
                        <p className="modal-subtitle">{project.desc}</p>
                    </div>
                    <div className="modal-meta-row">
                        <span className="modal-meta-tag">{project.type}</span>
                        <span className="modal-meta-tag">{project.year}</span>
                        {project.featured && (
                            <span className="modal-meta-tag featured">
                                <IconStar /> Featured
                            </span>
                        )}
                    </div>
                </div>

                {/* Body */}
                <div className="modal-body modal-body-grid">
                    <div className="modal-detail-column">
                        <div className="modal-section">
                            <p className="modal-section-title">Tentang Proyek</p>
                            <p className="modal-long-desc">
                                {project.longDesc || project.desc}
                            </p>
                        </div>

                        {project.highlights && (
                            <div className="modal-section">
                                <p className="modal-section-title">Fitur Utama</p>
                                <ul className="modal-highlights modal-highlights-grid">
                                    {project.highlights.map((h, i) => (
                                        <li key={i} className="modal-highlight-item">
                                            <span className="modal-highlight-dot" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <aside className="modal-side-panel">
                        <div className="modal-section">
                            <p className="modal-section-title">Tech Stack</p>
                            <div className="modal-stack modal-stack-columns">
                                {project.stack.map(s => (
                                    <span key={s} className="stack-tag">{s}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <p className="modal-section-title">Aksi</p>
                            <div className="modal-footer modal-footer-column">
                                {project.github ? (
                                    <a
                                        href={project.github} target="_blank" rel="noreferrer"
                                        className="project-link-btn primary"
                                    >
                                        <IconGithub /> Lihat di GitHub
                                    </a>
                                ) : (
                                    <span className="modal-note">Private / internal repository</span>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo} target="_blank" rel="noreferrer"
                                        className="project-link-btn secondary"
                                    >
                                        <IconExternal /> Live Demo
                                    </a>
                                )}
                                <button
                                    onClick={handleClose}
                                    className="project-link-btn detail modal-close-action"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

// ── Main Projects Component ───────────────────────
export default function Projects() {
    const [slides, setSlides] = useState(PROJECTS.map(() => 0))
    const [filter, setFilter] = useState('all')
    const [modal, setModal] = useState(null) // index of project to show in modal

    const [ref, inView] = useInView()

    const filtered = filter === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter)

    return (
        <section id="projects" className="section" ref={ref}>
            {/* Header */}
            <div className={`reveal ${inView ? 'visible' : ''}`}>
                <p className="section-label">Proyek / Projects</p>
                <h2 className="section-title">Karya Pilihan</h2>
            </div>

            {/* Filter Tabs */}
            <div className={`reveal filter-tabs ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.08s' }}>
                {ALL_FILTERS.map(f => (
                    <button
                        key={f.key}
                        className={`filter-tab${filter === f.key ? ' active' : ''}`}
                        onClick={() => setFilter(f.key)}
                    >
                        {f.label}
                        {f.key !== 'all' && (
                            <span style={{
                                marginLeft: 6,
                                fontSize: 10,
                                opacity: 0.7,
                                fontWeight: 400,
                            }}>
                                ({PROJECTS.filter(p => p.category === f.key).length})
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="project-grid">
                {filtered.map((project, rawI) => {
                    const pi = PROJECTS.indexOf(project)
                    return (
                        <article
                            key={pi}
                            className={`project-card-v2 ${rawI % 2 === 1 ? 'reverse' : ''} reveal ${inView ? 'visible' : ''}`}
                            style={{ transitionDelay: `${0.1 + rawI * 0.1}s` }}
                            onClick={() => setModal(pi)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => e.key === 'Enter' && setModal(pi)}
                            aria-label={`Buka detail ${project.name}`}
                        >
                            {/* Thumbnail */}
                            <SlideThumb
                                project={project} pi={pi}
                                slides={slides} setSlides={setSlides}
                            />

                            <div className="project-card-info">
                                <div className="project-card-badges">
                                    <span className="project-card-badge">{project.type}</span>
                                    {project.featured && <span className="project-card-badge featured">Featured</span>}
                                </div>

                                <h3 className="project-card-title">{project.name}</h3>
                                <p className="project-card-meta">{project.year} · {project.slides.length} tampilan</p>
                                <p className="project-card-desc">{project.desc}</p>

                                <div className="project-card-stack">
                                    {project.stack.slice(0, 3).map(s => (
                                        <span key={s} className="stack-tag">{s}</span>
                                    ))}
                                    {project.stack.length > 3 && (
                                        <span className="stack-tag" style={{ opacity: 0.7 }}>
                                            +{project.stack.length - 3}
                                        </span>
                                    )}
                                </div>

                                <button
                                    className="project-card-detail-btn"
                                    onClick={e => { e.stopPropagation(); setModal(pi) }}
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </article>
                    )
                })}

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div style={{
                        gridColumn: '1/-1',
                        padding: '40px 20px',
                        textAlign: 'center',
                        color: 'var(--text-faint)',
                        fontSize: 13,
                    }}>
                        Tidak ada project dalam kategori ini.
                    </div>
                )}
            </div>

            {/* GitHub CTA */}
            <div
                className={`reveal ${inView ? 'visible' : ''}`}
                style={{
                    marginTop: 16, transitionDelay: `${0.1 + filtered.length * 0.1}s`,
                    background: 'var(--surface)',
                    border: '1px dashed var(--indigo-mid)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '16px 20px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    gap: 12, flexWrap: 'wrap',
                }}
            >
                <div>
                    <p style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500, marginBottom: 2 }}>
                        Ada lebih banyak proyek di GitHub
                    </p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        Repo aktif dengan commit history yang konsisten
                    </p>
                </div>
                <a
                    href="https://github.com/adhen10"
                    target="_blank" rel="noreferrer"
                    style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '9px 18px',
                        background: 'var(--indigo)', color: '#fff',
                        borderRadius: 8, fontSize: 13, fontWeight: 500,
                        transition: 'opacity 0.2s', flexShrink: 0,
                        textDecoration: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    <IconGithub size={14} /> Lihat Semua
                </a>
            </div>

            {/* Modal */}
            {modal !== null && (
                <ProjectModal
                    project={PROJECTS[modal]}
                    pi={modal}
                    slides={slides}
                    setSlides={setSlides}
                    onClose={() => setModal(null)}
                />
            )}
        </section>
    )
}