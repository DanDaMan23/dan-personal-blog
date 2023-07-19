import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ICarouselItem } from "./carousel-item.interface"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

import "./carousel.component.scss"

interface CarouselProps {
  items: Array<ICarouselItem>
}

export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState<number>(0)

  const moveForwards = () =>
    setIndex((prevState) =>
      prevState === items.length - 1 ? 0 : prevState + 1
    )

  const moveBackwards = () =>
    setIndex((prevState) =>
      prevState === 0 ? items.length - 1 : prevState - 1
    )

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) =>
        prevState === items.length - 1 ? 0 : prevState + 1
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className='carousel-container'>
      <div className='carousel' style={{ backgroundImage: items[index].image }}>
        <button
          type='button'
          className='carousel-button'
          onClick={moveBackwards}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className='carousel-description'>
          <h4 className='carousel-title'>{items[index].title}</h4>
          <p className='carousel-details'>{items[index].details}</p>
          <button
            type='button'
            className='primary-button'
            onClick={items[index].onClick}
          >
            Learn More
          </button>
        </div>

        <button
          type='button'
          className='carousel-button'
          onClick={moveForwards}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}
