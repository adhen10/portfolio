import { SKILLS } from '../data/portfolio'
import useInView from '../hooks/useInView'

export default function Skills() {
    const [ref, inView] = useInView()

    const core = SKILLS.find(s => s.category === 'Backend Development')?.items || []
    const frontend = SKILLS.find(s => s.category === 'Frontend Development')?.items || []
    const tools = SKILLS.find(s => s.category === 'Tools & DevOps')?.items || []
    const support = SKILLS.find(s => s.category === 'IT Support')?.items || []

    const categoryIcons = {
        'Backend Development': (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
            </svg>
        ),
        'Frontend Development': (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        'Tools & DevOps': (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        'IT Support': (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /><path d="M9 9h.01M15 9h.01M9 13h6" />
            </svg>
        ),
    }

    return (
        <section id="skills" className="section" ref={ref}>

            <div className={`reveal ${inView ? 'visible' : ''}`}>
                <p className="section-label">Keahlian / Skills</p>
                <h2 className="section-title">Tech Stack & Keahlian</h2>
            </div>

            {/* Bento Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto auto',
                gap: 12,
            }} className="skills-bento">

                {/* Core Stack — span 2 kolom, indigo */}
                <div
                    className={`reveal ${inView ? 'visible' : ''}`}
                    style={{
                        gridColumn: '1 / 3',
                        background: 'var(--indigo)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '22px',
                        transitionDelay: '0.1s',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Decorative */}
                    <div style={{
                        position: 'absolute', width: 180, height: 180,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)',
                        top: -60, right: -60,
                    }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                        </svg>
                        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Core Stack</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, position: 'relative' }}>
                        {core.map(item => (
                            <span key={item} style={{
                                fontSize: 12, fontWeight: 500,
                                padding: '6px 14px', borderRadius: 6,
                                background: 'rgba(255,255,255,0.15)',
                                color: '#fff',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'background 0.2s',
                                cursor: 'default',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                            >{item}</span>
                        ))}
                    </div>
                </div>

                {/* IT Support */}
                <div
                    className={`reveal ${inView ? 'visible' : ''}`}
                    style={{
                        gridColumn: '3 / 4',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px',
                        transitionDelay: '0.15s',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M9 9h.01M15 9h.01M9 13h6" />
                        </svg>
                        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>IT Support</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {support.map(item => (
                            <span key={item} style={{
                                fontSize: 11, padding: '4px 10px',
                                borderRadius: 5,
                                background: 'var(--border-soft)',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border)',
                                cursor: 'default',
                            }}>{item}</span>
                        ))}
                    </div>
                </div>

                {/* Frontend */}
                <div
                    className={`reveal ${inView ? 'visible' : ''}`}
                    style={{
                        gridColumn: '1 / 2',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px',
                        transitionDelay: '0.2s',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                        </svg>
                        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Frontend</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {frontend.map(item => (
                            <span key={item} style={{
                                fontSize: 11, padding: '4px 10px',
                                borderRadius: 5,
                                background: 'var(--indigo-dim)',
                                color: 'var(--indigo-dark)',
                                border: '1px solid var(--indigo-mid)',
                                cursor: 'default',
                            }}>{item}</span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div
                    className={`reveal ${inView ? 'visible' : ''}`}
                    style={{
                        gridColumn: '2 / 4',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px',
                        transitionDelay: '0.25s',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Tools & DevOps</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {tools.map(item => (
                            <span key={item} style={{
                                fontSize: 11, padding: '4px 10px',
                                borderRadius: 5,
                                background: 'var(--border-soft)',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border)',
                                cursor: 'default',
                                transition: 'all 0.15s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo-dim)'; e.currentTarget.style.color = 'var(--indigo-dark)'; e.currentTarget.style.borderColor = 'var(--indigo-mid)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'var(--border-soft)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                            >{item}</span>
                        ))}
                    </div>
                </div>

            </div>

            {/* CSS responsive */}
            <style>{`
        @media (max-width: 640px) {
          .skills-bento {
            grid-template-columns: 1fr !important;
          }
          .skills-bento > div {
            grid-column: 1 / 2 !important;
          }
        }
      `}</style>

        </section>
    )
}