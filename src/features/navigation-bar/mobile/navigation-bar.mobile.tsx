import { useState } from "react"
import Backdrop from "../../../components/backdrop/backdrop.component"
import HamburgerButton from "../../../components/hamburger-button/hamburger-button.component"
import "./navigation-bar.mobile.scss"

export default function NavigationBar() {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  return (
    <>
      <div className='navigation-bar'>
        <HamburgerButton
          onClick={() => {
            setShowMobileNavigation(true)
          }}
        />
        <h2>DanDaMan</h2>
      </div>
      <Backdrop
        show={showMobileNavigation}
        onClick={() => setShowMobileNavigation(false)}
      />
    </>
  )
}
