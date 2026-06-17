import { useState, useEffect } from 'react'
import { INFO, SKILLS } from '../data/portfolio'

function CountUp({ target, suffix, label, show, delay, divider }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!show) return
        const duration = 1800
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += increment
                if (current >= target) {
                    setCount(target)
                    clearInterval(interval)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)
            return () => clearInterval(interval)
        }, delay * 1000 + 600)
        return () => clearTimeout(timer)
    }, [show, target, delay])

    return (
        <div style={{
            textAlign: 'center',
            padding: '0 12px',
            borderRight: divider ? '1px solid rgba(255,255,255,0.15)' : 'none',
            flex: 1,
        }}>
            <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 32, fontWeight: 700,
                color: '#fff', letterSpacing: '-2px', lineHeight: 1,
                marginBottom: 4,
            }}>{count}{suffix}</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.5px' }}>{label}</p>
        </div>
    )
}

export default function Hero() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const allStack = [
        ...(SKILLS.find(s => s.category === 'Backend Development')?.items || []),
        ...(SKILLS.find(s => s.category === 'Frontend Development')?.items || []),
    ]

    const anim = (delay, from = 'bottom') => {
        const transforms = {
            bottom: show ? 'translateY(0)' : 'translateY(32px)',
            top: show ? 'translateY(0)' : 'translateY(-32px)',
            left: show ? 'translateX(0)' : 'translateX(-32px)',
            right: show ? 'translateX(0)' : 'translateX(32px)',
        }
        return {
            opacity: show ? 1 : 0,
            transform: transforms[from],
            transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }
    }

    return (
        <section style={{ padding: '40px 0 48px', position: 'relative' }}>

            {/* Decorative blobs */}
            <div style={{
                position: 'absolute', width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
                borderRadius: '50%', top: -80, right: '-5%',
                pointerEvents: 'none', zIndex: 0,
                animation: 'floatBlob 6s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', width: 250, height: 250,
                background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
                borderRadius: '50%', bottom: 0, left: '-5%',
                pointerEvents: 'none', zIndex: 0,
                animation: 'floatBlob 8s ease-in-out infinite reverse',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>

                {/* ── ROW 1: Profil besar + Status ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 12, marginBottom: 12 }} className="hero-row1">

                    {/* Cell Profil — dominan */}
                    <div style={{
                        ...anim(0.05, 'left'),
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px 20px 20px 28px',
                        display: 'grid',
                        gridTemplateColumns: '140px 1fr',
                        gap: 24,
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        {/* Accent line */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0,
                            width: 4, height: '100%',
                            background: 'linear-gradient(to bottom, var(--indigo), var(--indigo-mid))',
                            borderRadius: '12px 0 0 12px',
                        }} />

                        {/* Kiri: Foto + badge */}
                        <div style={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                        }}>
                            <div style={{
                                width: 140, height: 160,
                                borderRadius: 16,
                                border: '3px solid var(--indigo)',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(79,70,229,0.25)',
                                flexShrink: 0,
                            }}>
                                <img
                                    src="./adhen_profil.jpeg"
                                    alt="Adhen Firman Firdaus"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                />
                            </div>
                        </div>

                        {/* Kanan: Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <p style={{
                                fontSize: 11, fontWeight: 600,
                                letterSpacing: '2px', textTransform: 'uppercase',
                                color: 'var(--indigo)', marginBottom: 10,
                            }}>Laravel & PHP Developer</p>

                            <h1 style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: 'clamp(26px, 3vw, 38px)',
                                fontWeight: 700, letterSpacing: '-1.5px',
                                lineHeight: 1.05, color: 'var(--text-primary)',
                                marginBottom: 14,
                            }}>
                                Adhen Firman<br />
                                Firdaus<span style={{ color: 'var(--indigo)' }}>.</span>
                            </h1>

                            <p style={{
                                fontSize: 13, color: 'var(--text-secondary)',
                                lineHeight: 1.75, marginBottom: 18,
                            }}>{INFO.summary}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                                {[
                                    {
                                        val: INFO.location,
                                        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    },
                                    {
                                        val: INFO.email,
                                        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    },
                                    {
                                        val: INFO.phone,
                                        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    },
                                ].map(m => (
                                    <span key={m.val} style={{
                                        fontSize: 12, color: 'var(--text-muted)',
                                        display: 'flex', alignItems: 'center', gap: 5,
                                    }}>
                                        <span style={{ color: 'var(--indigo)', display: 'flex' }}>{m.icon}</span>
                                        {m.val}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cell Status + CTA */}
                    <div style={{
                        ...anim(0.15, 'right'),
                        display: 'flex', flexDirection: 'column', gap: 12,
                    }}>

                        {/* Status card */}
                        <div style={{
                            background: 'var(--indigo)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '20px',
                            position: 'relative', overflow: 'hidden',
                            flex: 1,
                        }}>
                            <div style={{
                                position: 'absolute', width: 140, height: 140,
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                top: -50, right: -40,
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                {/* Status dot + text */}
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    marginBottom: 14,
                                }}>
                                    <div style={{
                                        width: 8, height: 8, borderRadius: '50%',
                                        background: '#4ADE80',
                                        boxShadow: '0 0 8px #4ADE80',
                                        flexShrink: 0,
                                    }} />
                                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                                        Open to Work
                                    </p>
                                </div>

                                {/* Tipe kerja */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                                    {['Full-time', 'Kontrak', 'Freelance'].map(t => (
                                        <span key={t} style={{
                                            fontSize: 11, padding: '3px 10px',
                                            borderRadius: 20,
                                            background: 'rgba(255,255,255,0.12)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            color: 'rgba(255,255,255,0.8)',
                                        }}>{t}</span>
                                    ))}
                                </div>

                                {/* IPK */}
                                <div style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: 8, padding: '8px 12px',
                                    display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'center', marginBottom: 12,
                                }}>
                                    <div>
                                        <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 2 }}>Pendidikan</p>
                                        <p style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>Universitas Mercu Buana</p>
                                    </div>
                                    <p style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontSize: 22, fontWeight: 700,
                                        color: '#fff', letterSpacing: '-0.5px',
                                    }}>3.65</p>
                                </div>

                                {/* Social */}
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <a href={INFO.github} target="_blank" rel="noreferrer" style={{
                                        flex: 1, padding: '7px',
                                        textAlign: 'center', fontSize: 11,
                                        color: 'rgba(255,255,255,0.75)',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderRadius: 7,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                                        transition: 'background 0.2s',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    <a href={INFO.linkedin} target="_blank" rel="noreferrer" style={{
                                        flex: 1, padding: '7px',
                                        textAlign: 'center', fontSize: 11,
                                        color: 'rgba(255,255,255,0.75)',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderRadius: 7,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                                        transition: 'background 0.2s',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA — hanya 2 tombol utama */}
                        <div style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '14px',
                            display: 'flex', flexDirection: 'column', gap: 8,
                        }}>
                            <a href={`https://wa.me/62${INFO.phone.replace(/^0/, '')}`}
                                target="_blank" rel="noreferrer"
                                style={{
                                    padding: '10px 14px',
                                    background: '#25D366', color: '#fff',
                                    borderRadius: 8, fontSize: 13, fontWeight: 600,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                    transition: 'opacity 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                </svg>
                                Hire Me
                            </a>

                            <div style={{ display: 'flex', gap: 8 }}>
                                <a href="#contact" style={{
                                    flex: 1, padding: '9px',
                                    background: 'var(--indigo)', color: '#fff',
                                    borderRadius: 8, fontSize: 12, fontWeight: 500,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                    transition: 'opacity 0.2s',
                                }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                    Kontak
                                </a>
                                <a href="/adhen_cv.pdf" download style={{
                                    flex: 1, padding: '9px',
                                    background: 'transparent', color: 'var(--text-muted)',
                                    borderRadius: 8, fontSize: 12, fontWeight: 500,
                                    border: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                    transition: 'all 0.2s',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo-mid)'; e.currentTarget.style.color = 'var(--indigo)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    CV
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── ROW 2: Stats + Stack + Git ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 180px', gap: 12 }} className="hero-row2">

                    {/* ── Cell Git Branch Timeline ── */}
                    <div style={{
                        ...anim(0.25, 'bottom'),
                        background: 'var(--terminal-bg)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '18px 20px',
                        fontFamily: 'monospace',
                    }}>
                        <p style={{
                            fontSize: 10, color: 'var(--terminal-muted)',
                            letterSpacing: '1px', textTransform: 'uppercase',
                            marginBottom: 14,
                        }}>career history</p>

                        {/* Row 1 — PT Gautama (HEAD) */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, minHeight: 52 }}>
                            <div style={{ width: 44, position: 'relative', flexShrink: 0, alignSelf: 'stretch' }}>
                                {/* Vertical line main */}
                                <div style={{
                                    position: 'absolute', left: 9, top: 20,
                                    width: 2, bottom: 0, background: '#4F46E5',
                                }} />
                                {/* Dot */}
                                <div style={{
                                    position: 'absolute', left: 5, top: 16,
                                    width: 10, height: 10, borderRadius: '50%',
                                    background: '#4F46E5', border: '2px solid #6366F1',
                                    zIndex: 2,
                                }} />
                            </div>
                            <div style={{ paddingBottom: 16 }}>
                                <p style={{ fontSize: 11, color: 'var(--terminal-muted)', marginBottom: 2 }}>
                                    PT Gautama Indah Perkasa
                                    <span style={{
                                        fontSize: 9, fontWeight: 600, padding: '1px 7px',
                                        borderRadius: 10, marginLeft: 6,
                                        background: 'rgba(79,70,229,0.2)', color: '#818CF8',
                                    }}>contract</span>
                                </p>
                                <p style={{ fontSize: 10, color: '#6E7681' }}>Web Dev · Nov 2025 → now · CI3 + PHP</p>
                            </div>
                        </div>

                        {/* Row 2 — Freelance (branch hijau) */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, minHeight: 52 }}>
                            <div style={{ width: 44, position: 'relative', flexShrink: 0, alignSelf: 'stretch' }}>
                                {/* Main line */}
                                <div style={{
                                    position: 'absolute', left: 9, top: 0,
                                    width: 2, bottom: 0, background: '#4F46E5',
                                }} />
                                {/* Branch curve keluar ke kanan */}
                                <svg style={{ position: 'absolute', left: 9, top: 0, width: 30, height: 20 }} viewBox="0 0 30 20" fill="none">
                                    <path d="M1 0 Q1 14 24 14" stroke="#3FB950" strokeWidth="2" fill="none" />
                                </svg>
                                {/* Branch dot hijau */}
                                <div style={{
                                    position: 'absolute', left: 25, top: 10,
                                    width: 10, height: 10, borderRadius: '50%',
                                    background: '#3FB950', border: '2px solid #56D364',
                                    zIndex: 2,
                                }} />
                            </div>
                            <div style={{ paddingBottom: 16, paddingLeft: 14 }}>
                                <p style={{ fontSize: 11, color: 'var(--terminal-muted)', marginBottom: 2 }}>
                                    Freelance Projects
                                    <span style={{
                                        fontSize: 9, fontWeight: 600, padding: '1px 7px',
                                        borderRadius: 10, marginLeft: 6,
                                        background: 'rgba(63,185,80,0.2)', color: '#56D364',
                                    }}>freelance</span>
                                </p>
                                <p style={{ fontSize: 10, color: '#6E7681' }}>Laravel Dev · Apr 2024 → now</p>
                            </div>
                        </div>

                        {/* Row 3 — PT Difan (branch merah) */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, minHeight: 52 }}>
                            <div style={{ width: 44, position: 'relative', flexShrink: 0, alignSelf: 'stretch' }}>
                                {/* Main line */}
                                <div style={{
                                    position: 'absolute', left: 9, top: 0,
                                    width: 2, bottom: 0, background: '#4F46E5',
                                }} />
                                {/* Branch curve */}
                                <svg style={{ position: 'absolute', left: 9, top: 0, width: 30, height: 20 }} viewBox="0 0 30 20" fill="none">
                                    <path d="M1 0 Q1 14 24 14" stroke="#F78166" strokeWidth="2" fill="none" />
                                </svg>
                                {/* Branch dot merah */}
                                <div style={{
                                    position: 'absolute', left: 25, top: 10,
                                    width: 10, height: 10, borderRadius: '50%',
                                    background: '#F78166', border: '2px solid #FFA198',
                                    zIndex: 2,
                                }} />
                            </div>
                            <div style={{ paddingBottom: 16, paddingLeft: 14 }}>
                                <p style={{ fontSize: 11, color: 'var(--terminal-muted)', marginBottom: 2 }}>
                                    PT Difan Prima Paint
                                    <span style={{
                                        fontSize: 9, fontWeight: 600, padding: '1px 7px',
                                        borderRadius: 10, marginLeft: 6,
                                        background: 'rgba(247,129,102,0.2)', color: '#FFA198',
                                    }}>internship</span>
                                </p>
                                <p style={{ fontSize: 10, color: 'var(--terminal-muted)' }}>IT Support · Feb–Jul 2023</p>
                            </div>
                        </div>

                        {/* Row 4 — Initial commit */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, minHeight: 40 }}>
                            <div style={{ width: 44, position: 'relative', flexShrink: 0, alignSelf: 'stretch' }}>
                                {/* Main line hanya sampai dot */}
                                <div style={{
                                    position: 'absolute', left: 9, top: 0,
                                    width: 2, height: 16, background: '#4F46E5',
                                }} />
                                {/* Root dot abu */}
                                <div style={{
                                    position: 'absolute', left: 5, top: 12,
                                    width: 10, height: 10, borderRadius: '50%',
                                    background: 'var(--terminal-muted)', border: '2px solid #8B949E',
                                    zIndex: 2,
                                }} />
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--terminal-muted)" strokeWidth="2" strokeLinecap="round">
                                        <circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="9" /><line x1="12" y1="15" x2="12" y2="22" />
                                    </svg>
                                    <p style={{ fontSize: 11, color: 'var(--terminal-muted)' }}>
                                        initial commit: Universitas Mercu Buana 2021
                                    </p>
                                </div>
                                {/* <p style={{ fontSize: 10, color: '#4D5566' }}>S1 Informatika · IPK 3.65</p> */}
                            </div>
                        </div>

                    </div>

                    {/* Cell Tech Stack */}
                    <div style={{
                        ...anim(0.3, 'bottom'),
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px',
                    }}>
                        <p style={{
                            fontSize: 10, fontWeight: 600, letterSpacing: '1.5px',
                            textTransform: 'uppercase', color: 'var(--text-muted)',
                            marginBottom: 12,
                        }}>Tech Stack</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {allStack.map(t => (
                                <span key={t} style={{
                                    fontSize: 11, fontWeight: 500,
                                    padding: '4px 10px', borderRadius: 6,
                                    background: 'var(--indigo-dim)',
                                    color: 'var(--indigo-dark)',
                                    border: '1px solid var(--indigo-mid)',
                                    transition: 'all 0.15s', cursor: 'default',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo)'; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--indigo-dim)'; e.currentTarget.style.color = 'var(--indigo-dark)'; }}
                                >{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Cell Git status */}
                    <div style={{
                        ...anim(0.35, 'right'),
                        background: 'var(--terminal-bg)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px',
                        fontFamily: 'monospace',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    }}>
                        <div>
                            <p style={{ fontSize: 10, color: 'var(--terminal-muted)', marginBottom: 12, letterSpacing: '1px' }}>
                                git status
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#3FB950" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <p style={{ fontSize: 11, color: '#3FB950' }}>ready to commit</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#79C0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
                                </svg>
                                <p style={{ fontSize: 11, color: '#79C0FF' }}>branch: open-to-work</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#A8D8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
                                </svg>
                                <p style={{ fontSize: 11, color: '#A8D8A8' }}>php artisan serve</p>
                            </div>
                            <p style={{ fontSize: 10, color: 'var(--terminal-muted)' }}>Server running...</p>
                        </div>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 6, marginTop: 12,
                            paddingTop: 12, borderTop: '1px solid var(--terminal-border)',
                        }}>
                            <a href={INFO.github} target="_blank" rel="noreferrer" style={{
                                fontSize: 11, color: '#79C0FF', fontFamily: 'monospace',
                            }}>github ↗</a>
                            <span style={{ color: 'var(--terminal-border)' }}>|</span>
                            <a href={INFO.linkedin} target="_blank" rel="noreferrer" style={{
                                fontSize: 11, color: '#79C0FF', fontFamily: 'monospace',
                            }}>linkedin ↗</a>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-16px) scale(1.03); }
        }
        @media (max-width: 768px) {
          .hero-row1 { grid-template-columns: 1fr !important; }
          .hero-row2 { grid-template-columns: 1fr 1fr !important; }
          .hero-row2 > div:last-child { grid-column: 1 / 3; }
        }
        @media (max-width: 480px) {
          .hero-row2 { grid-template-columns: 1fr !important; }
          .hero-row2 > div:last-child { grid-column: 1 / 2; }
        }
      `}</style>

        </section>
    )
}