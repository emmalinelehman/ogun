import './Card.css'

/** Minimal card: near-black bg, thin gray border, slight radius. */
export default function Card({ children, className = '', as: Tag = 'div' }) {
  return <Tag className={`card ${className}`.trim()}>{children}</Tag>
}
