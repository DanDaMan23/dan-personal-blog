import { useState } from "react"
import Backdrop from "../../../components/backdrop/backdrop.component"
import HamburgerButton from "../../../components/hamburger-button/hamburger-button.component"
import "./navigation-bar.mobile.scss"
import NavigationDrawer from "./drawer/navigation-drawer.mobile"

export default function NavigationBar() {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  const openNavigationDrawer = () => {
    setShowMobileNavigation(true)
  }

  const closeNavigationDrawer = () => setShowMobileNavigation(false)

  return (
    <>
      <div className='navigation-bar'>
        <HamburgerButton onClick={openNavigationDrawer} />
        <h2>DanDaMan</h2>
      </div>
      <Backdrop show={showMobileNavigation} onClick={closeNavigationDrawer} />
      <NavigationDrawer
        show={showMobileNavigation}
        onClose={closeNavigationDrawer}
      >
        Home About Me Web Development Books Fitness Boxing Travel Contact Me
      </NavigationDrawer>
    </>
  )
}
