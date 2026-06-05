import './SectionHeading.css'

/** Kicker + heading block used at the top of sections. */
export default function SectionHeading({ kicker, title, children, level = 2 }) {
  const Tag = `h${level}`
  return (
    <div className="section-heading reveal">
      {kicker && <p className="kicker section-heading__kicker">{kicker}</p>}
      <Tag className="section-heading__title">{title}</Tag>
      {children && <div className="section-heading__lead">{children}</div>}
    </div>
  )
}
