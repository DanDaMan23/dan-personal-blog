import text from "./boxing.json"

import "./boxing.scss"

export default function Boxing() {
  const boxingImages = require.context("./photos", true)
  const boxingImageList = boxingImages
    .keys()
    .map((image) => boxingImages(image))

  return (
    <div className='boxing'>
      <h3>{text.mainTitle}</h3>

      <p>{text.details[0]}</p>

      {/* TODO: Adjust aspect ratio and put the side scroll on it's own component */}
      <div className='side-scroll-items-container'>
        {boxingImageList.map((image, index) => (
          <div key={index}>
            <img src={image} alt={image} />
          </div>
        ))}
      </div>

      <p>{}</p>
    </div>
  )
}
