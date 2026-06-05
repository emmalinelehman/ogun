import MediaPlaceholder from './MediaPlaceholder.jsx'
import './ProductMedia.css'

/**
 * Product media block — two side-by-side replaceable media slots,
 * each with a short caption. Stacks on mobile.
 * items: [{ label, caption, variant, src, poster }]
 */
export default function ProductMedia({ items }) {
  return (
    <div className="prodmedia">
      {items.map((item) => (
        <figure key={item.label} className="prodmedia__item reveal">
          <MediaPlaceholder
            src={item.src}
            poster={item.poster}
            label={item.label}
            variant={item.variant}
            ratio="16 / 10"
          />
          {item.caption && (
            <figcaption className="prodmedia__caption">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}
