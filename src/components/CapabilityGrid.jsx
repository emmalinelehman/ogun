import Card from './Card.jsx'
import MediaPlaceholder from './MediaPlaceholder.jsx'
import './CapabilityGrid.css'

/**
 * Three-column capability grid (stacks on mobile).
 * items: [{ title, description, variant }]
 */
export default function CapabilityGrid({ items }) {
  return (
    <div className="capgrid">
      {items.map((item, i) => (
        <Card key={item.title} className="capgrid__item reveal">
          <MediaPlaceholder
            variant={item.variant}
            ratio="16 / 10"
            label={item.title}
            className="capgrid__media"
          />
          <span className="capgrid__index" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="capgrid__title">{item.title}</h3>
          <p className="capgrid__desc">{item.description}</p>
        </Card>
      ))}
    </div>
  )
}
