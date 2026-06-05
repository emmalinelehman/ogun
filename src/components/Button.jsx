import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Button / CTA.
 *  - variant="primary"   white border, transparent bg → inverts on hover
 *  - variant="secondary" text link with arrow + underline
 *
 * Renders an internal <Link> (`to`), an anchor (`href`), or a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()

  const content =
    variant === 'secondary' ? (
      <>
        <span>{children}</span>
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      </>
    ) : (
      children
    )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}
