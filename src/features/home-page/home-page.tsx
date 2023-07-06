import { useNavigate } from "react-router"
import "./home-page.scss"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main className='home-page'>
      <div>
        <h3>Welcome to My World, It's Dan Here</h3>
        <p>
          I am a Front-End Software Developer passionate about
          JavaScript/TypeScript, constantly learning in the ever-evolving tech
          world. Practice and repetition unlock the gates to continuous growth.
          I am deeply committed to enhancing user experiences, always striving
          to deliver the absolute best.
        </p>
        <button
          type='button'
          className='primary-button'
          onClick={() => navigate("/aboutMe")}
        >
          Learn More About Me...
        </button>
      </div>
    </main>
  )
}
