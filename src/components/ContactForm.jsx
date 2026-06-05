import { useState } from 'react'
import Button from './Button.jsx'
import './ContactForm.css'

const CONTACT_EMAIL = 'contact@ogunusa.com'

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
]

const EMPTY = { name: '', company: '', email: '', subject: '', message: '' }

/**
 * Contact form. No backend is configured yet, so on submit we build a
 * mailto: link to contact@ogunusa.com (opening the user's mail client)
 * and show a clear confirmation. The form never silently fails.
 *
 * TODO(backend): replace handleSubmit with a POST to a form endpoint
 * (e.g. serverless function / Formspree) when backend handling is ready.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = [
      `Name: ${values.name}`,
      `Company: ${values.company || '—'}`,
      `Email: ${values.email}`,
      '',
      values.message,
    ].join('\n')

    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(values.subject || 'Website inquiry')}` +
      `&body=${encodeURIComponent(body)}`

    // Open the user's mail client as the fallback transport.
    window.location.href = mailto
    setSent(true)
  }

  if (sent) {
    return (
      <div className="contact-form__success" role="status">
        <p className="kicker kicker--accent">Message ready</p>
        <h3>Thanks — your message is on its way.</h3>
        <p>
          Your email client should have opened with your message addressed to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If it didn’t,
          email us directly and we’ll get back to you.
        </p>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            setValues(EMPTY)
            setSent(false)
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        {FIELDS.map((field) => (
          <div key={field.name} className="contact-form__field">
            <label htmlFor={`cf-${field.name}`}>
              {field.label}
              {field.required && (
                <span className="contact-form__req" aria-hidden="true">
                  {' '}
                  *
                </span>
              )}
            </label>
            <input
              id={`cf-${field.name}`}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              value={values[field.name]}
              onChange={update}
            />
          </div>
        ))}

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="cf-message">
            Message
            <span className="contact-form__req" aria-hidden="true"> *</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={6}
            required
            value={values.message}
            onChange={update}
          />
        </div>
      </div>

      <div className="contact-form__actions">
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <p className="contact-form__hint">
          Required fields marked <span aria-hidden="true">*</span>
          <span className="visually-hidden">with an asterisk</span>. Or email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </form>
  )
}
