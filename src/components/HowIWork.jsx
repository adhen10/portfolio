import { INFO } from "../data/portfolio"
import useInView from "../hooks/useInView"

const steps = [
    {
        number: '01',
        title: 'Pahami Kebutuhan',
        desc: 'Saya mulai dengan memahami kebutuhan bisnis secara menyeluruh — bukan hanya fitur, tapi alur kerja pengguna dan tujuan akhir yang ingin dicapai.',
        tags: ['Diskusi', 'Analisis', 'Dokumentasi'],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Desain Database & Arsitektur',
        desc: 'Merancang struktur database yang efisien dan arsitektur aplikasi yang scalable sebelum menulis satu baris kode pun.',
        tags: ['ERD', 'MySQL', 'Schema Design'],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Development Iteratif',
        desc: 'Membangun fitur secara bertahap dengan pendekatan iteratif — mulai dari core functionality, lalu polish UI, sambil terus berkomunikasi dengan stakeholder.',
        tags: ['Laravel', 'Git', 'Code Review'],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Testing & Debugging',
        desc: 'Setiap fitur diuji secara menyeluruh — edge case, validasi input, dan performa query database — sebelum diserahkan ke pengguna.',
        tags: ['Postman', 'Debug', 'Validasi'],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5m4 0h10m-10 0v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4m0 0h4" />
            </svg>
        ),
    },
    {
        number: '05',
        title: 'Deploy & Maintenance',
        desc: 'Menangani deployment ke server production via cPanel, monitoring performa, dan siap memberikan perbaikan cepat berdasarkan laporan pengguna.',
        tags: ['cPanel', 'Monitoring', 'Hotfix'],
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
]

export default function HowIWork() {
    const [ref, inView] = useInView()

    return (
        <section id="howIWork" className="section" ref={ref}>

            {/* Header */}
            <div className={`reveal ${inView ? 'visible' : ''}`}>
                <p className="section-label">Cara Kerja / How I Work</p>
                <h2 className="section-title">Dari Ide ke Production</h2>
                <p style={{
                    fontSize: 14, color: 'var(--text-secondary)',
                    lineHeight: 1.8, marginBottom: 36, maxWidth: 560,
                }}>
                    Proses kerja saya terstruktur dan transparan — dari memahami kebutuhan bisnis
                    hingga aplikasi berjalan di production dan digunakan pengguna nyata.
                </p>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative' }}>

                {/* Connector line */}
                <div style={{
                    position: 'absolute',
                    left: 28, top: 20, bottom: 20, width: 2,
                    background: 'linear-gradient(to bottom, var(--indigo), var(--indigo-mid), transparent)',
                    zIndex: 0,
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`card reveal ${inView ? 'visible' : ''}`}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '56px 1fr',
                                gap: 20,
                                alignItems: 'start',
                                padding: '20px 24px',
                                position: 'relative',
                                zIndex: 1,
                                transitionDelay: `${0.1 + i * 0.1}s`,
                            }}
                        >
                            {/* Number circle */}
                            <div style={{
                                width: 56, height: 56,
                                borderRadius: '50%',
                                background: i === 0 ? 'var(--indigo)' : 'var(--indigo-dim)',
                                border: `2px solid ${i === 0 ? 'var(--indigo)' : 'var(--indigo-mid)'}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <span style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: 18, fontWeight: 700,
                                    color: i === 0 ? '#fff' : 'var(--indigo)',
                                }}>{step.number}</span>
                            </div>

                            {/* Content */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                                    <div style={{
                                        width: 36, height: 36,
                                        borderRadius: 10,
                                        background: 'var(--indigo-dim)',
                                        border: '1px solid var(--indigo-mid)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        {step.icon}
                                    </div>
                                    <h3 style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontSize: 16, fontWeight: 600,
                                        color: 'var(--text-primary)',
                                    }}>{step.title}</h3>
                                </div>
                                <p style={{
                                    fontSize: 13, color: 'var(--text-secondary)',
                                    lineHeight: 1.75, marginBottom: 12,
                                }}>{step.desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {step.tags.map(tag => (
                                        <span key={tag} className="tag tag-gray">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}