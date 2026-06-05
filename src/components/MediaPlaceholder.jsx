import './MediaPlaceholder.css'

/**
 * Replaceable media slot. Renders a video if `src` is provided, otherwise a
 * technical placeholder (engineered grid / plume field). Designed so a real
 * <video> or <img> can drop in later without layout change.
 *
 * variant: 'plume' | 'grid' | 'sim'  — different abstract treatments
 */
export default function MediaPlaceholder({
  src,
  poster,
  label,
  variant = 'grid',
  ratio = '16 / 9',
  className = '',
}) {
  if (src) {
    return (
      <video
        className={`media ${className}`}
        style={{ aspectRatio: ratio }}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    )
  }

  return (
    <div
      className={`media media--ph media--${variant} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label || 'Engineered product visual placeholder'}
    >
      <div className="media__overlay" aria-hidden="true" />
      <span className="media__tag" aria-hidden="true">
        {label || 'MEDIA'}
      </span>
    </div>
  )
}
