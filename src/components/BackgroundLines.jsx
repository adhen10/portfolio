import { useEffect, useRef } from 'react'

export default function BackgroundLines({ dark }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Buat partikel
        const count = Math.floor((window.innerWidth * window.innerHeight) / 15000)
        const particles = Array.from({ length: Math.max(count, 40) }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            r: Math.random() * 2 + 0.8,
            pulse: Math.random() * Math.PI * 2,
        }))

        const COLOR_LIGHT = '99,102,241'
        const COLOR_DARK = '129,140,248'

        let t = 0

        const draw = () => {
            const w = canvas.width
            const h = canvas.height
            const color = dark ? COLOR_DARK : COLOR_LIGHT

            ctx.clearRect(0, 0, w, h)

            // Update & draw partikel
            particles.forEach(p => {
                p.x += p.vx
                p.y += p.vy
                p.pulse += 0.02

                // Bounce di tepi
                if (p.x < 0 || p.x > w) p.vx *= -1
                if (p.y < 0 || p.y > h) p.vy *= -1

                // Pulsating alpha
                const alpha = dark
                    ? 0.5 + Math.sin(p.pulse) * 0.3
                    : 0.3 + Math.sin(p.pulse) * 0.2

                // Draw dot
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${color},${alpha})`
                ctx.fill()

                // Glow effect
                const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
                grd.addColorStop(0, `rgba(${color},${alpha * 0.4})`)
                grd.addColorStop(1, 'transparent')
                ctx.fillStyle = grd
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
                ctx.fill()
            })

            // Draw koneksi antar partikel
            const maxDist = 120
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach(b => {
                    const dx = a.x - b.x
                    const dy = a.y - b.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < maxDist) {
                        const alpha = dark
                            ? 0.25 * (1 - dist / maxDist)
                            : 0.15 * (1 - dist / maxDist)

                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.strokeStyle = `rgba(${color},${alpha})`
                        ctx.lineWidth = 0.6
                        ctx.stroke()
                    }
                })
            })

            // Occasional shooting star
            if (Math.floor(t) % 180 === 0) {
                const sx = Math.random() * w
                const sy = Math.random() * h * 0.5
                const len = 60 + Math.random() * 80
                const grd = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.3)
                grd.addColorStop(0, `rgba(${color},0)`)
                grd.addColorStop(0.5, `rgba(${color},${dark ? 0.6 : 0.3})`)
                grd.addColorStop(1, `rgba(${color},0)`)
                ctx.beginPath()
                ctx.moveTo(sx, sy)
                ctx.lineTo(sx + len, sy + len * 0.3)
                ctx.strokeStyle = grd
                ctx.lineWidth = 1
                ctx.stroke()
            }

            t++
            animId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [dark])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    )
}