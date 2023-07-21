import text from "../travel.json"

import "./montreal-trip.scss"

export default function MontrealTrip() {
  const montrealTripImages = require.context("./photos", true)
  const montrealTripImageList = montrealTripImages
    .keys()
    .map((image) => montrealTripImages(image))

  return (
    <div className='montreal-trip'>
      <h4>{text.trips.montreal.title}</h4>
      <p>{text.trips.montreal.description}</p>
      <div className='photos-section'>
        {montrealTripImageList.map((image, index) => (
          <img key={index} src={image} alt={image} />
        ))}
      </div>
    </div>
  )
}
