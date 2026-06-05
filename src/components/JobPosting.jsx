import Button from './Button.jsx'
import './JobPosting.css'

/**
 * Full job posting. Content is passed via the `job` object so additional
 * roles can be added later without changing the component.
 */
export default function JobPosting({ job }) {
  return (
    <article className="job reveal">
      <header className="job__header">
        <span className="kicker kicker--accent">{job.kicker}</span>
        <h3 className="job__title">{job.title}</h3>
        {job.tags && (
          <ul className="job__tags">
            {job.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </header>

      <div className="job__body">
        {job.overview.map((para, i) => (
          <p key={i} className="job__overview">
            {para}
          </p>
        ))}

        {job.sections.map((section) => (
          <section key={section.heading} className="job__section">
            <h4 className="job__section-title">{section.heading}</h4>
            {section.note && <p className="job__note">{section.note}</p>}
            {section.items && (
              <ul className="job__list">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="job__cta">
          <p>{job.closing}</p>
          <Button href={`mailto:${job.applyEmail}`} variant="primary">
            Apply — email {job.applyEmail}
          </Button>
        </section>
      </div>
    </article>
  )
}
