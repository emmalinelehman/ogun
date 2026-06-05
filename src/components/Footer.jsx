import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container--wide footer__grid">
        {/* Join the Mission */}
        <div className="footer__col footer__col--lead">
          <p className="kicker">Built in Michigan</p>
          <h2 className="footer__title">Join the Mission</h2>
          <p className="footer__tagline">
            Design, optimize, and build at the speed of thought.
          </p>
          <Button to="/join" variant="primary">
            View job openings
          </Button>
        </div>

        {/* Veteran-Owned */}
        <div className="footer__col">
          <p className="kicker">Veteran-Owned</p>
          <div className="footer__veteran">
            <span className="footer__flag" role="img" aria-label="United States flag">
              <span className="footer__flag-canton" />
            </span>
            <span>Proudly veteran-owned and operated in the United States.</span>
          </div>
        </div>

        {/* Connect */}
        <div className="footer__col">
          <p className="kicker">Connect</p>
          <a className="footer__email" href="mailto:Connect@ogunusa.com">
            Connect@ogunusa.com
          </a>
          <ul className="footer__social">
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ogun USA on LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 22 11 22 14.7V21h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21H9z" />
                </svg>
                <span className="visually-hidden">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ogun USA on X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.97 6.817H1.674l7.73-8.835L1.25 2.25h6.83l4.713 6.231zm-1.16 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="visually-hidden">X</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container container--wide footer__bottom">
        <p>© Copyright {YEAR} Ogun LLC</p>
        <Link to="/contact" className="footer__bottom-link">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
