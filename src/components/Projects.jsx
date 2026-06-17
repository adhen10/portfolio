import { useState } from 'react'
import { PROJECTS } from '../data/portfolio'
import useInView from '../hooks/useInView'

export default function Projects() {
    const [slides, setSlides] = useState(PROJECTS.map(() => 0))
    const [hovered, setHovered] = useState(null)

    const changeSlide = (pi, dir) => {
        setSlides(prev => prev.map((cur, i) => {
            if (i !== pi) return cur
            const total = PROJECTS[pi].slides.length
            return (cur + dir + total) % total
        }))
    }

    const goSlide = (pi, to) => {
        setSlides(prev => prev.map((cur, i) => i === pi ? to : cur))
    }

    const [ref, inView] = useInView()

    return (
        <section id="projects" className="section" ref={ref}>
            <div className={`reveal ${inView ? 'visible' : ''}`}>
                <p className="section-label">Proyek / Projects</p>
                <h2 className="section-title">Karya Pilihan</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {PROJECTS.map((project, pi) => (
                    <div
                        key={pi}
                        className={`reveal ${inView ? 'visible' : ''}`}
                        style={{
                            background: 'var(--surface)',
                            transitionDelay: `${0.1 + pi * 0.12}s`,
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                            boxShadow: hovered === pi ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                            transform: hovered === pi ? 'translateY(-2px)' : 'translateY(0)',
                        }}
                        onMouseEnter={() => setHovered(pi)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="project-inner">

                            {/* ── Image Slider ── */}
                            <div className="project-slider" style={{ position: 'relative', overflow: 'hidden' }}>

                                {project.slides.map((slide, si) => (
                                    <div
                                        key={si}
                                        style={{
                                            display: slides[pi] === si ? 'flex' : 'none',
                                            width: '100%', height: '100%', minHeight: 180,
                                            flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center',
                                            background: slide.image
                                                ? 'transparent'
                                                : `linear-gradient(135deg, ${slide.color}, ${slide.color}CC)`,
                                            position: 'relative', overflow: 'hidden',
                                        }}
                                    >
                                        {slide.image ? (
                                            <img
                                                src={slide.image}
                                                alt={slide.label}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <>
                                                {/* Decorative pattern */}
                                                <div style={{
                                                    position: 'absolute', inset: 0,
                                                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%),
                                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)`,
                                                }} />
                                                <div style={{
                                                    position: 'absolute', inset: 0,
                                                    backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 20px,
                            rgba(255,255,255,0.03) 20px,
                            rgba(255,255,255,0.03) 21px
                          )`,
                                                }} />
                                                <div style={{ position: 'relative', textAlign: 'center', padding: 16 }}>
                                                    <p style={{
                                                        fontSize: 11, fontWeight: 600,
                                                        color: 'rgba(255,255,255,0.9)',
                                                        letterSpacing: '1.5px', textTransform: 'uppercase',
                                                        marginBottom: 6,
                                                    }}>{slide.label}</p>
                                                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>
                                                        Screenshot coming soon
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}

                                {/* Prev / Next */}
                                {project.slides.length > 1 && (
                                    <>
                                        <button onClick={e => { e.stopPropagation(); changeSlide(pi, -1) }} style={{
                                            position: 'absolute', left: 8, top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: 28, height: 28, borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.35)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            cursor: 'pointer', color: '#fff',
                                            transition: 'background 0.2s',
                                        }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                                                <polyline points="15 18 9 12 15 6" />
                                            </svg>
                                        </button>
                                        <button onClick={e => { e.stopPropagation(); changeSlide(pi, 1) }} style={{
                                            position: 'absolute', right: 8, top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: 28, height: 28, borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.35)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            cursor: 'pointer', color: '#fff',
                                            transition: 'background 0.2s',
                                        }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Dots */}
                                <div style={{
                                    position: 'absolute', bottom: 8,
                                    left: 0, right: 0,
                                    display: 'flex', justifyContent: 'center', gap: 5,
                                }}>
                                    {project.slides.map((_, si) => (
                                        <button
                                            key={si}
                                            onClick={e => { e.stopPropagation(); goSlide(pi, si) }}
                                            style={{
                                                width: slides[pi] === si ? 16 : 6,
                                                height: 6, borderRadius: 3,
                                                border: 'none', cursor: 'pointer', padding: 0,
                                                background: slides[pi] === si
                                                    ? 'rgba(255,255,255,0.95)'
                                                    : 'rgba(255,255,255,0.35)',
                                                transition: 'all 0.2s',
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Type badge */}
                                <div style={{
                                    position: 'absolute', top: 10, left: 10,
                                    fontSize: 10, fontWeight: 600,
                                    letterSpacing: '0.8px', textTransform: 'uppercase',
                                    padding: '3px 8px', borderRadius: 4,
                                    background: 'rgba(0,0,0,0.45)',
                                    color: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(4px)',
                                }}>{project.type}</div>

                            </div>

                            {/* ── Info ── */}
                            <div className="project-info">

                                <div style={{
                                    display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'flex-start', marginBottom: 8, gap: 8,
                                }}>
                                    <p style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontSize: 15, fontWeight: 600,
                                        color: 'var(--text-primary)', lineHeight: 1.3,
                                    }}>{project.name}</p>
                                </div>

                                <p style={{
                                    fontSize: 13, color: 'var(--text-secondary)',
                                    lineHeight: 1.7, marginBottom: 14, flex: 1,
                                }}>{project.desc}</p>

                                <div style={{
                                    display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14,
                                }}>
                                    {project.stack.map(s => (
                                        <span key={s} style={{
                                            fontSize: 11, padding: '3px 9px',
                                            borderRadius: 4,
                                            background: 'var(--indigo-dim)',
                                            color: 'var(--indigo-dark)',
                                            border: '1px solid var(--indigo-mid)',
                                        }}>{s}</span>
                                    ))}
                                </div>

                                <div style={{
                                    display: 'flex', gap: 10,
                                    paddingTop: 12,
                                    borderTop: '1px solid var(--border)',
                                }}>
                                    {project.github && (

                                        <a
                                            href={project.github}
                                            target="_blank" rel="noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: 6,
                                                fontSize: 12, fontWeight: 500,
                                                color: 'var(--indigo)',
                                                padding: '5px 12px',
                                                borderRadius: 6,
                                                background: 'var(--indigo-dim)',
                                                border: '1px solid var(--indigo-mid)',
                                                transition: 'all 0.2s',
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo)'; e.currentTarget.style.color = '#fff'; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'var(--indigo-dim)'; e.currentTarget.style.color = 'var(--indigo)'; }}
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo && (

                                        <a
                                            href={project.demo}
                                            target="_blank" rel="noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: 6,
                                                fontSize: 12, fontWeight: 500,
                                                color: 'var(--text-muted)',
                                                padding: '5px 12px',
                                                borderRadius: 6,
                                                border: '1px solid var(--border)',
                                                transition: 'all 0.2s',
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo-mid)'; e.currentTarget.style.color = 'var(--indigo)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Link ke GitHub */}
            <div style={{
                marginTop: 16,
                background: 'var(--surface)',
                border: '1px dashed var(--indigo-mid)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px 20px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
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
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Lihat Semua
                </a>
            </div>

        </section>
    )
}