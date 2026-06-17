import { useState, useEffect } from 'react'

const links = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'How I Work', href: '#howIWork' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const handleLinkClick = () => setMenuOpen(false)

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: scrolled
                ? 'var(--surface)'
                : 'var(--surface)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)',
            transition: 'background 0.3s',
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 56,
            }}>

                {/* Logo */}
                <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 17, fontWeight: 700,
                    letterSpacing: '-0.5px',
                    color: 'var(--text-primary)',
                }}>
                    AFF<span style={{ color: 'var(--indigo)' }}>.</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>

                    {/* Desktop Nav Links */}
                    <div className="nav-desktop" style={{ display: 'flex', gap: 24 }}>
                        {links.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    fontSize: 12, fontWeight: 500,
                                    color: 'var(--text-muted)',
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--indigo)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDark(!dark)}
                        title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        style={{
                            width: 36, height: 36,
                            borderRadius: 8,
                            background: 'var(--indigo-dim)',
                            border: '1px solid var(--border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 16, cursor: 'pointer',
                            transition: 'all 0.2s',
                            flexShrink: 0,
                            color: 'var(--indigo)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--indigo-mid)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--indigo-dim)'}
                    >
                        {dark ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Hamburger */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            display: 'none',
                            flexDirection: 'column',
                            gap: 5, padding: 6,
                            background: 'none', border: 'none', cursor: 'pointer',
                        }}
                    >
                        <span style={{
                            display: 'block', width: 22, height: 2,
                            background: 'var(--text-primary)', transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }} />
                        <span style={{
                            display: 'block', width: 22, height: 2,
                            background: 'var(--text-primary)', transition: 'all 0.3s',
                            opacity: menuOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: 'block', width: 22, height: 2,
                            background: 'var(--text-primary)', transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }} />
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    background: 'var(--surface)',
                    borderTop: '1px solid var(--border)',
                    padding: '12px 0',
                }}>
                    {links.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={handleLinkClick}
                            style={{
                                display: 'block',
                                padding: '10px 28px',
                                fontSize: 13, fontWeight: 500,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--indigo)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}