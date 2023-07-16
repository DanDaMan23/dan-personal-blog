import text from "./reading-hobby.json"

import "./reading-hobby.scss"

export default function ReadingHobby() {
  return (
    <div className='reading-hobby'>
      <h3>{text.mainTitle}</h3>

      <p>{text.mainDescription}</p>

      <h4>{text.topBooks.title}</h4>
    </div>
  )
}
