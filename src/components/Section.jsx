import useReveal from '../hooks/useReveal.js'

/**
 * Standard padded section container.
 *  - alt: dark section background with top/bottom borders
 *  - wide: use the wider max content width
 */
export default function Section({
  children,
  id,
  alt = false,
  wide = false,
  className = '',
  as: Tag = 'section',
}) {
  const ref = useReveal()
  const sectionClass = `section ${alt ? 'section--alt' : ''} ${className}`.trim()
  const containerClass = `container ${wide ? 'container--wide' : ''}`.trim()

  return (
    <Tag id={id} className={sectionClass} ref={ref}>
      <div className={containerClass}>{children}</div>
    </Tag>
  )
}
