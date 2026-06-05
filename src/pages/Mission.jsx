import Section from '../components/Section.jsx'
import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import Button from '../components/Button.jsx'
import useSeo from '../hooks/useSeo.js'
import './Mission.css'

const THEMES = [
  { label: 'Speed', text: 'Compress the path from insight to manufactured part.' },
  { label: 'Engineering depth', text: 'Physics-grounded design, not surface-level tooling.' },
  { label: 'Software-driven design', text: 'CAD/CAM and simulation unified in one platform.' },
  { label: 'Advanced manufacturing', text: 'Additive production built for mass customization.' },
  { label: 'Iteration', text: 'Rapid loops of learning, validation, and improvement.' },
  { label: 'Defense modernization', text: 'Low-cost, modular solutions at the speed the mission demands.' },
]

export default function Mission() {
  useSeo({
    title: 'Mission',
    description:
      'Ogun is building the High Velocity Engineering system — integrating CAD/CAM, AI-optimized generative design, CFD and FEA simulation, and additive manufacturing into a single coherent platform.',
  })

  return (
    <>
      {/* Editorial intro */}
      <Section className="mission__intro" wide>
        <div className="mission__intro-inner">
          <p className="kicker kicker--accent reveal">Mission</p>
          <h1 className="mission__headline reveal">
            A new system for engineering and manufacturing.
          </h1>
          <div className="mission__lead reveal">
            <p>
              We are building the High Velocity Engineering system: a new approach
              to engineering and manufacturing that accelerates creative insights
              to modeling to manufacturing for rapid iteration, learning, and
              improvement.
            </p>
            <p>
              The system integrates CAD/CAM, AI-optimized generative design
              embedding CFD and FEA physics simulation, and additive manufacturing
              into a single coherent platform.
            </p>
          </div>
        </div>
      </Section>

      {/* Full-bleed media band */}
      <Section alt wide className="mission__band">
        <MediaPlaceholder
          variant="sim"
          ratio="21 / 9"
          label="High Velocity Engineering — simulation to part"
          className="reveal"
        />
      </Section>

      {/* Themes grid */}
      <Section wide>
        <div className="mission__themes-head reveal">
          <span className="kicker">What drives the work</span>
          <h2 className="mission__themes-title">
            Engineering depth, delivered at velocity.
          </h2>
        </div>
        <ul className="mission__themes">
          {THEMES.map((t, i) => (
            <li key={t.label} className="mission__theme reveal">
              <span className="mission__theme-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mission__theme-label">{t.label}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Join callout */}
      <Section alt wide className="mission__join">
        <div className="mission__join-inner reveal">
          <div>
            <p className="kicker">Join the Mission</p>
            <h2 className="mission__join-title">
              Build the system with us.
            </h2>
            <p className="mission__join-text">
              We are hiring engineers who want to shape how aerospace and defense
              products get made.
            </p>
          </div>
          <Button to="/join" variant="primary">
            View open roles
          </Button>
        </div>
      </Section>
    </>
  )
}
