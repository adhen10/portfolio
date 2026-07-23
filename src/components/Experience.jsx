import { useState } from 'react'
import { EXPERIENCE } from '../data/portfolio'
import useInView from '../hooks/useInView'

const badgeConfig = {
    contract: { bg: 'rgba(99,102,241,0.15)', color: '#818CF8', label: 'Contract' },
    freelance: { bg: 'rgba(63,185,80,0.15)', color: '#56D364', label: 'Freelance' },
    intern: { bg: 'rgba(247,129,102,0.15)', color: '#FFA198', label: 'Internship' },
    parttime: { bg: 'rgba(251,191,36,0.15)', color: '#FCD34D', label: 'Part-time' },
}

const accentColors = {
    contract: '#6366F1',
    freelance: '#3FB950',
    intern: '#F78166',
    parttime: '#FBBF24',
}

export default function Experience() {
    const [ref, inView] = useInView()
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section id="experience" className="section" ref={ref}>
            <div className={`reveal ${inView ? 'visible' : ''}`}>
                <p className="section-label">Pengalaman / Experience</p>
                <h2 className="section-title">Pengalaman Kerja</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {EXPERIENCE.map((exp, i) => {
                    const isOpen = openIndex === i
                    const accent = accentColors[exp.type]
                    const badge = badgeConfig[exp.type]

                    return (
                        <div
                            key={i}
                            className={`reveal ${inView ? 'visible' : ''}`}
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            style={{
                                background: 'var(--surface)',
                                border: `1px solid ${isOpen ? accent + '60' : 'var(--border)'}`,
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                transitionDelay: `${0.1 + i * 0.1}s`,
                                boxShadow: isOpen ? `0 4px 20px ${accent}20` : 'none',
                            }}
                        >
                            {/* Accent top bar */}
                            <div
                                style={{
                                    height: isOpen ? 3 : 2,
                                    background: isOpen
                                        ? `linear-gradient(90deg, ${accent}, ${accent}80)`
                                        : 'var(--border)',
                                    transition: 'height 0.3s, background 0.3s',
                                }}
                            />

                            {/* Header */}
                            <div
                                style={{
                                    padding: '20px 24px',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr auto',
                                    gap: 16,
                                    alignItems: 'center',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    {/* Accent dot */}
                                    <div
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            background: exp.active ? accent : 'var(--border)',
                                            boxShadow: exp.active ? `0 0 8px ${accent}` : 'none',
                                            flexShrink: 0,
                                            transition: 'all 0.3s',
                                        }}
                                    />

                                    <div style={{ flex: 1 }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 10,
                                                flexWrap: 'wrap',
                                                marginBottom: 4,
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontFamily: "'Space Grotesk', sans-serif",
                                                    fontSize: 15,
                                                    fontWeight: 600,
                                                    color: 'var(--text-primary)',
                                                }}
                                            >
                                                {exp.role}
                                            </p>
                                            <span
                                                style={{
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    letterSpacing: '0.8px',
                                                    textTransform: 'uppercase',
                                                    padding: '2px 9px',
                                                    borderRadius: 20,
                                                    background: badge.bg,
                                                    color: badge.color,
                                                }}
                                            >
                                                {badge.label}
                                            </span>
                                            {exp.active && (
                                                <span
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 500,
                                                        padding: '2px 8px',
                                                        borderRadius: 20,
                                                        background: 'rgba(52,211,153,0.12)',
                                                        color: '#34D399',
                                                        letterSpacing: '0.5px',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 5,
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            width: 5,
                                                            height: 5,
                                                            borderRadius: '50%',
                                                            background: '#34D399',
                                                            display: 'inline-block',
                                                        }}
                                                    />
                                                    Aktif
                                                </span>
                                            )}
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 12,
                                                flexWrap: 'wrap',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: "'Space Grotesk', sans-serif",
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: accent,
                                                }}
                                            >
                                                {exp.company}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: 'var(--text-faint)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 5,
                                                }}
                                            >
                                                {/* Calendar Icon */}
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                    <line x1="16" y1="2" x2="16" y2="6" />
                                                    <line x1="8" y1="2" x2="8" y2="6" />
                                                    <line x1="3" y1="10" x2="21" y2="10" />
                                                </svg>
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Chevron */}
                                <div
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 10,
                                        background: isOpen ? accent : 'var(--border-soft)',
                                        border: `1px solid ${isOpen ? accent : 'var(--border)'}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s',
                                        flexShrink: 0,
                                        boxShadow: isOpen ? `0 4px 12px ${accent}40` : 'none',
                                    }}
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke={isOpen ? '#fff' : 'var(--text-faint)'}
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.3s',
                                        }}
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>

                            {/* Stack tags — selalu visible */}
                            <div
                                style={{
                                    padding: '0 24px 16px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 6,
                                }}
                            >
                                {exp.stack.map((s) => (
                                    <span
                                        key={s}
                                        style={{
                                            fontSize: 11,
                                            padding: '3px 9px',
                                            borderRadius: 4,
                                            background: 'var(--border-soft)',
                                            color: 'var(--text-muted)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>

                            {/* Expanded content */}
                            {isOpen && (
                                <div
                                    style={{
                                        margin: '0 24px 20px',
                                        padding: '16px',
                                        background: 'var(--bg)',
                                        borderRadius: 8,
                                        borderLeft: `3px solid ${accent}`,
                                        animation: 'fadeIn 0.25s ease',
                                    }}
                                >
                                    {/* Context perusahaan */}
                                    {exp.context && (
                                        <p
                                            style={{
                                                fontSize: 12,
                                                color: 'var(--text-muted)',
                                                fontStyle: 'italic',
                                                marginBottom: 12,
                                                paddingBottom: 12,
                                                borderBottom: '1px solid var(--border)',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 8,
                                            }}
                                        >
                                            {/* Briefcase Icon */}
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                style={{ flexShrink: 0, marginTop: 2 }}
                                            >
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                            </svg>
                                            <span>{exp.context}</span>
                                        </p>
                                    )}

                                    {/* Highlights */}
                                    <p
                                        style={{
                                            fontSize: 10,
                                            fontWeight: 600,
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase',
                                            color: 'var(--text-faint)',
                                            marginBottom: 10,
                                        }}
                                    >
                                        Yang saya kerjakan
                                    </p>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 8,
                                        }}
                                    >
                                        {exp.highlights.map((h, j) => (
                                            <div
                                                key={j}
                                                style={{
                                                    display: 'flex',
                                                    gap: 10,
                                                    fontSize: 13,
                                                    color: 'var(--text-secondary)',
                                                    lineHeight: 1.65,
                                                }}
                                            >
                                                {/* Check Circle Icon */}
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke={accent}
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    style={{ flexShrink: 0, marginTop: 3 }}
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    )
}