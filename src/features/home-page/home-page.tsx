import { useNavigate } from "react-router"
import mainPicture from "../../photos/MainBlogPicture.jpg"
import text from "./home-page.json"

import "./home-page.scss"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main className='home-page'>
      <div className='content-container'>
        <div className='image-container'>
          <img src={mainPicture} alt='DLawCons' />
        </div>
        <div>
          <h2>{text.mainTitle}</h2>
          <p>{text.softwareDeveloperDescription}</p>
          <p>{text.otherThingsILike}</p>
          <button
            type='button'
            className='primary-button'
            onClick={() => navigate("/aboutMe")}
          >
            Learn More About Me...
          </button>
        </div>
      </div>
    </main>
  )
}
