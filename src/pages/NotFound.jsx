import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import useSeo from '../hooks/useSeo.js'

export default function NotFound() {
  useSeo({ title: 'Page not found' })

  return (
    <Section wide className="notfound">
      <div style={{ paddingTop: 'var(--header-h)', maxWidth: '60ch' }}>
        <p className="kicker kicker--accent">Error 404</p>
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: '18px 0 24px',
          }}
        >
          Off the map.
        </h1>
        <p style={{ marginBottom: 32 }}>
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Button to="/" variant="primary">
          Return home
        </Button>
      </div>
    </Section>
  )
}
