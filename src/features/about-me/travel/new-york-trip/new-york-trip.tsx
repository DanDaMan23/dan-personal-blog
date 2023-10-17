import text from "../travel.json"

import "./new-york-trip.scss"

export default function NewYorkTrip() {
  const newYorkTripImages = require.context("./photos", true)
  const newYorkTripImageList = newYorkTripImages
    .keys()
    .map((image) => newYorkTripImages(image))

  return (
    <div className='new-york-trip'>
      <h4>{text.trips.newYork.title}</h4>
      <p>{text.trips.newYork.description}</p>
      <h4>{text.trips.newYork.thingsToDo.title}</h4>
      <div className='photos-section'>
        {newYorkTripImageList.map((image, index) => (
          <img key={index} src={image} alt={image} />
        ))}
      </div>
    </div>
  )
}
