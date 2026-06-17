import { INFO } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
      padding: '20px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
      }}>
        <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>
          © {year} <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
            {INFO.name}
          </span> · Tangerang, Banten
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#4ADE80',
            boxShadow: '0 0 6px #4ADE80',
          }} />
          <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>Open to work</p>
        </div>
      </div>
    </footer>
  )
}