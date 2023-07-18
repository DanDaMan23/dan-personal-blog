import text from "./boxing.json"

import "./boxing.scss"

export default function Boxing() {
  const boxingImages = require.context("./photos", true)
  const boxingImageList = boxingImages
    .keys()
    .map((image) => boxingImages(image))

  const boxingVideos = require.context("./videos", true)
  const boxingVideoList = boxingVideos
    .keys()
    .map((video) => boxingVideos(video))

  return (
    <div className='boxing'>
      <h3>{text.mainTitle}</h3>

      <p>{text.details[0]}</p>

      <div className='side-scroll-items-container'>
        {boxingImageList.map((image, index) => (
          <div key={index}>
            <img src={image} alt={image} />
          </div>
        ))}
      </div>

      <p>{text.details[1]}</p>

      <p>{text.details[2]}</p>

      <div className='side-scroll-items-container'>
        {boxingVideoList.map((video, index) => (
          <div key={index}>
            <video controls>
              <source src={video} type='video/mp4' />
            </video>
          </div>
        ))}
      </div>

      <p>{text.details[3]}</p>
    </div>
  )
}
