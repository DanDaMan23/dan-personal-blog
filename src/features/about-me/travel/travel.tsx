import text from "./travel.json"

import "./travel.scss"

export default function Travel() {

  return (
    <div className='travel'>
      <h3>{text.mainTitle}</h3>

      <p>{text.mainDescription}</p>

      <div className='tab-switcher'>
        <button type='button' className='active-tab'>
          Montreal 2022
        </button>
        <button type='button'>New York September 2023</button>
      </div>
    </div>
  )
}
