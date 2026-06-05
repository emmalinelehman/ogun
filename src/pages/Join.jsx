import Section from '../components/Section.jsx'
import JobPosting from '../components/JobPosting.jsx'
import useSeo from '../hooks/useSeo.js'
import './Join.css'

const BENEFITS = [
  'Stock options sharing equity value creation',
  'Competitive base salary with opportunity for bonus',
  'Insurance and gym membership',
  'Generous time off',
  'Parental leave',
]

const JOB = {
  kicker: 'Open Position',
  title: 'Senior Software Engineer, Computational Design',
  tags: ['Full-time', 'Michigan / Remote-friendly', 'Computational Design'],
  overview: [
    'We are building the High Velocity Engineering system: a new approach to engineering and manufacturing that accelerates creative insights to modeling to manufacturing for rapid iteration, learning, and improvement. The system integrates CAD/CAM, AI-optimized generative design embedding CFD and FEA physics simulation, and additive manufacturing into a single coherent platform.',
    'You will contribute across the full lifecycle: architecture decisions, implementation, and production operations. You own your work from design through post-deployment monitoring. We seek curious, continual learners who can practically apply new technology into concrete results.',
  ],
  sections: [
    {
      heading: 'What You Will Do',
      items: [
        'Design and implement core subsystems connecting CAD/CAM pipelines, generative design solvers, and physics simulation engines.',
        'Contribute to AI-assisted tooling and workflows that accelerate development across the engineering team.',
        'Build cloud-native services on Azure that meet strict reliability and performance requirements.',
        'Deeply understand how product engineers work, the problems they solve, and how product designs are translated into scalable manufacturing.',
      ],
    },
    {
      heading: 'Core Requirements',
      items: [
        '3 to 12 years of professional software engineering experience',
        'Hands-on cloud experience, preferably Azure; comfort with distributed systems and managed services',
        'Fluency in Python or R for scientific computing or data workflows',
        'Proficiency in C# or Java for production service development',
        'Familiarity with AI-assisted development tools and workflows, including Claude Code, Codex, Cursor, and GitHub Copilot',
        'STEM degree from a competitive university; master’s degree or PhD preferred. A strong track record shipping analytic software products may fulfill this requirement.',
      ],
    },
    {
      heading: 'Ideal Qualifications',
      note: 'Not all of these are required. Strong candidates will bring depth in at least a few.',
      items: [
        'Expert-level cloud certification, such as AWS Solutions Architect Professional, Microsoft Certified Azure Solutions Architect Expert, or GCP Professional Cloud Architect',
        'Applied experience with LLM integration patterns, including retrieval-augmented generation, agentic orchestration, and prompt engineering for production use',
        'Comfort with event-driven and reactive architectures using tools like Kafka, Azure Service Bus, or Dapr',
        'Working knowledge of domain-driven design, hexagonal architecture, and CQRS/event sourcing patterns',
        'Experience with GitOps, infrastructure-as-code, Terraform or Bicep, and platform engineering principles',
        'Familiarity with WebAssembly, edge compute, or high-performance numerical computing',
        'Demonstrated skill in computational optimization, including reducing latency, increasing throughput, and efficiently using compute at scale',
        'Background in CAD geometry kernels, FEA/CFD solvers, or additive manufacturing workflows',
      ],
    },
    {
      heading: 'Benefits',
      items: BENEFITS,
    },
  ],
  closing:
    'We care more about how you think, your values, and what you have built than where you went to school or what titles you have held. If this work sounds like what you want to spend the next few years building, we want to hear from you.',
  applyEmail: 'contact@ogunusa.com',
}

export default function Join() {
  useSeo({
    title: 'Join the Mission',
    description:
      'Open roles at Ogun USA. We are hiring a Senior Software Engineer, Computational Design to build the High Velocity Engineering system.',
  })

  return (
    <>
      <Section className="join__hero" wide>
        <div className="join__hero-inner">
          <h1 className="join__title reveal">Join the Mission</h1>
          <p className="join__intro reveal">
            We are looking for highly technical people who want to build defense
            technology — computational engineering, software, AI tooling, and
            manufacturing systems that move at the speed of the mission.
          </p>
        </div>
      </Section>

      <Section alt wide className="join__positions">
        <h2 className="join__section-title reveal">Open Positions</h2>
        <JobPosting job={JOB} />
      </Section>
    </>
  )
}
