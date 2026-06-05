import Button from './Button.jsx'
import './Hero.css'

/**
 * Full-bleed hero with video/image background and dark overlay.
 * Pass `videoSrc` (and optionally `mobileSrc` + `poster`) to use real media;
 * otherwise an abstract plume placeholder is shown. Easy to swap later.
 *
 * The poster shows instantly while the video streams in. A lighter
 * `mobileSrc` is served to narrow viewports to save bandwidth.
 */
export default function Hero({ videoSrc, mobileSrc, poster }) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        {videoSrc ? (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
          >
            {mobileSrc && (
              <source
                src={mobileSrc}
                type="video/mp4"
                media="(max-width: 768px)"
              />
            )}
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="hero__placeholder" />
        )}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container container--wide">
        <p className="kicker hero__kicker reveal">Aerospace &amp; Defense</p>
        <h1 id="hero-heading" className="hero__headline reveal">
          OGUN USA
        </h1>
        <p className="hero__tagline reveal">High Velocity Engineering</p>
        <p className="hero__supporting reveal">
          Design, optimize, and build at the speed of thought.
        </p>
        <div className="hero__meta reveal">
          <span className="hero__category">Aerospace &amp; Defense Products</span>
          <Button to="/mission" variant="primary" className="hero__cta">
            Explore the mission
          </Button>
        </div>
      </div>

      <a className="hero__scroll" href="#capabilities" aria-label="Scroll to capabilities">
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
