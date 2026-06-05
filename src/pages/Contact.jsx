import Section from '../components/Section.jsx'
import ContactForm from '../components/ContactForm.jsx'
import useSeo from '../hooks/useSeo.js'
import './Contact.css'

export default function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Connect with Ogun USA around collaboration, employment, or media. Built in Michigan. Veteran-owned.',
  })

  return (
    <Section className="contact" wide>
      <div className="contact__layout">
        <div className="contact__intro">
          <p className="kicker kicker--accent reveal">Contact</p>
          <h1 className="contact__title reveal">
            Connect with us around collaboration, employment, or media.
          </h1>

          <ul className="contact__meta reveal">
            <li>
              <span className="kicker">Email</span>
              <a href="mailto:contact@ogunusa.com">contact@ogunusa.com</a>
            </li>
            <li>
              <span className="kicker">Location</span>
              <span>Built in Michigan, USA</span>
            </li>
            <li>
              <span className="kicker">Ownership</span>
              <span>Veteran-Owned</span>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap reveal">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
