import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CapabilityGrid from '../components/CapabilityGrid.jsx'
import ProductMedia from '../components/ProductMedia.jsx'
import Button from '../components/Button.jsx'
import useSeo from '../hooks/useSeo.js'
import './Home.css'

const CAPABILITIES = [
  {
    title: 'Computational Design',
    description: 'Unifies engineering tasks and workflows.',
    variant: 'grid',
  },
  {
    title: 'AI Optimization',
    description: 'Enables interactive what-if scenarios and optimization.',
    variant: 'sim',
  },
  {
    title: 'Scalable Manufacturing',
    description: 'Rapid, mass-customizable production with precision.',
    variant: 'plume',
  },
]

const RESULTS = [
  'Lower cost to experiment',
  'Remove process friction and focus on insights that improve performance',
  'Fast learning, iteration, and improvement',
]

const PRODUCTS = [
  {
    label: 'Combustion Optimization',
    caption: 'Optimizing combustion for improved performance — visual placeholder.',
    variant: 'plume',
  },
  {
    label: 'Gas Plume Management',
    caption: 'Gas plume management concept — visual placeholder.',
    variant: 'sim',
  },
]

export default function Home() {
  useSeo({
    title: 'High Velocity Engineering',
    description:
      'Ogun USA builds the High Velocity Engineering system — computational design, AI optimization, and additive manufacturing for aerospace and defense products. Built in Michigan.',
  })

  return (
    <>
      <Hero
        videoSrc="/waves.mp4"
        mobileSrc="/waves-720.mp4"
        poster="/waves-poster.jpg"
      />

      {/* Capabilities */}
      <Section id="capabilities" alt wide>
        <SectionHeading kicker="Capabilities" title="High Velocity Engineering">
          <p>
            The proprietary High Velocity Engineering system significantly
            accelerates turning creativity into aerospace and defense products.
          </p>
          <p>
            The platform integrates CAD design with embedded CFD and FEA modeling
            and optimization using generative AI. Simulated results are closely
            tracked to real-world validation for continual improvement.
          </p>
        </SectionHeading>

        <div className="home__results reveal">
          <span className="kicker">Results</span>
          <ul className="home__results-list">
            {RESULTS.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <CapabilityGrid items={CAPABILITIES} />
      </Section>

      {/* Aerospace & Defense Products */}
      <Section id="products" wide>
        <SectionHeading kicker="Aerospace & Defense Products" title="Built for the mission">
          <p>
            We are delivering on US defense goals for mass-produced, low-cost,
            modular solutions.
          </p>
          <p>
            We are currently iterating a product concept that reinvents optimizing
            combustion and gas plume management for improved performance.
          </p>
        </SectionHeading>

        <ProductMedia items={PRODUCTS} />
      </Section>

      {/* Mission CTA strip */}
      <Section alt wide className="home__cta-section">
        <div className="home__cta reveal">
          <div>
            <p className="kicker">Join the Mission</p>
            <h2 className="home__cta-title">
              Design, optimize, and build at the speed of thought.
            </h2>
          </div>
          <Button to="/join" variant="primary">
            View job openings
          </Button>
        </div>
      </Section>
    </>
  )
}
