import "./top-book-section.component.scss"

interface TopBookSectionProps {
  title: string
  author: string
  details: string
  imageLocation: string
}

export default function TopBookSection({
  title,
  author,
  details,
  imageLocation
}: TopBookSectionProps) {
  return (
    <div className='top-book-section'>
      <img
        src={imageLocation}
        alt={`${title} by ${author}`}
        height={100}
      />
      <h4>
        {title} by {author}
      </h4>
      <p>{details}</p>
    </div>
  )
}
