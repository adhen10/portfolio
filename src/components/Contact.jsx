import { INFO } from '../data/portfolio'
import useInView from '../hooks/useInView'

const contacts = [
    {
        label: 'Email',
        val: INFO.email,
        href: `mailto:${INFO.email}`,
        color: '#6366F1',
        bg: '#EEF2FF',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        label: 'WhatsApp',
        val: INFO.phone,
        href: `https://wa.me/62${INFO.phone.replace(/^0/, '')}`,
        color: '#25D366',
        bg: '#DCFCE7',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        val: 'linkedin.com/in/adhen-firman',
        href: INFO.linkedin,
        color: '#0A66C2',
        bg: '#DBEAFE',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        val: 'github.com/adhen10',
        href: INFO.github,
        color: 'var(--text-primary)',
        bg: 'var(--border-soft)',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
]

export default function Contact() {
    const [ref, inView] = useInView()

    return (
        <section id="contact" className="section" ref={ref}>

            <div className={`reveal ${inView ? 'visible' : ''}`}>
                <p className="section-label">Kontak / Contact</p>
                <h2 className="section-title">Mari Berkolaborasi</h2>
            </div>

            {/* ── DESKTOP LAYOUT ── */}
            <div className={`contact-desktop reveal ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: '0.1s' }}>

                {/* Kiri — header indigo */}
                <div style={{
                    background: 'var(--indigo)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '32px 28px',
                    position: 'relative', overflow: 'hidden',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}>
                    <div style={{
                        position: 'absolute', width: 220, height: 220, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)', top: -80, right: -60,
                    }} />
                    <div style={{
                        position: 'absolute', width: 140, height: 140, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.04)', bottom: -40, left: 40,
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                            <div style={{
                                width: 9, height: 9, borderRadius: '50%',
                                background: '#4ADE80', boxShadow: '0 0 8px #4ADE80',
                            }} />
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                                Aktif bekerja · Terbuka untuk diskusi
                            </span>
                        </div>
                        <h3 style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 26, fontWeight: 700, color: '#fff',
                            letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 12,
                        }}>
                            Siap untuk project<br />berikutnya
                            <span style={{ color: 'rgba(255,255,255,0.35)' }}>.</span>
                        </h3>
                        <p style={{
                            fontSize: 14, color: 'rgba(255,255,255,0.65)',
                            lineHeight: 1.75, marginBottom: 28,
                        }}>
                            Terbuka untuk full-time, kontrak, maupun project freelance.
                            Respon dalam 1×24 jam.
                        </p>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 10, padding: '14px 16px',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{INFO.location}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2" /><line x1="12" y1="12" x2="12" y2="16" />
                                </svg>
                                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Tersedia · Remote friendly</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kanan — contact list */}
                <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    display: 'flex', flexDirection: 'column',
                }}>
                    {contacts.map((c, i) => (

                        <a
                            key={c.label}
                            href={c.href}
                            target="_blank" rel="noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', gap: 16,
                                padding: '18px 22px',
                                borderBottom: i < contacts.length - 1 ? '1px solid var(--border)' : 'none',
                                textDecoration: 'none',
                                transition: 'background 0.15s',
                                flex: 1,
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                            <div style={{
                                width: 42, height: 42, borderRadius: 10,
                                background: c.bg,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: c.color, flexShrink: 0,
                            }}>{c.icon}</div>
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    fontSize: 10, fontWeight: 600, letterSpacing: '1px',
                                    textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 3,
                                }}>{c.label}</p>
                                <p style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>
                                    {c.val}
                                </p>
                            </div>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="var(--text-faint)" strokeWidth="2" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

            {/* ── MOBILE LAYOUT ── */}
            <div className={`contact-mobile reveal ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: '0.1s', flexDirection: 'column', gap: 12 }}>

                <div style={{
                    background: 'var(--indigo)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px 20px',
                    position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{
                        position: 'absolute', width: 150, height: 150, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)', top: -50, right: -40,
                    }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 6px #4ADE80' }} />
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Open to work · Aktif</span>
                    </div>
                    <h3 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 20, fontWeight: 700, color: '#fff',
                        letterSpacing: '-0.3px', marginBottom: 6,
                    }}>Siap untuk project berikutnya<span style={{ color: 'rgba(255,255,255,0.35)' }}>.</span></h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
                        Terbuka untuk full-time, kontrak, maupun freelance. Respon 1×24 jam.
                    </p>
                </div>

                <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                }}>
                    {contacts.map((c, i) => (
                        <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', gap: 12,
                                padding: '14px 16px',
                                borderBottom: i < contacts.length - 1 ? '1px solid var(--border)' : 'none',
                                textDecoration: 'none',
                                transition: 'background 0.15s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                            <div style={{
                                width: 36, height: 36, borderRadius: 8,
                                background: c.bg, color: c.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>{c.icon}</div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 2 }}>{c.label}</p>
                                <p style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.val}</p>
                            </div>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="2" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    )
}