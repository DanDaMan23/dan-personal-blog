import { useContext } from "react"
import Backdrop from "../../../components/backdrop/backdrop.component"
import HamburgerButton from "../../../components/hamburger-button/hamburger-button.component"
import NavigationDrawer from "./drawer/navigation-drawer.mobile"
import NavItems from "./nav-items/nav-items.mobile"
import { NavigationMobileContext } from "./context/navigation.mobile.context"
import logo from '../../../photos/dlawcons_logo_light_color.png'

import "./navigation-bar.mobile.scss"

export default function NavigationBarMobile() {
  const { showMobileNavigation, openNavigationDrawer, closeNavigationDrawer } =
    useContext(NavigationMobileContext)

  const LOGO_SIZE = 70

  return (
    <>
      <div className='navigation-bar-mobile'>
        <HamburgerButton onClick={openNavigationDrawer} />
        <img src={logo} alt='DLawCons' height={LOGO_SIZE} />
      </div>
      <Backdrop show={showMobileNavigation} onClick={closeNavigationDrawer} />
      <NavigationDrawer
        show={showMobileNavigation}
        onClose={closeNavigationDrawer}
      >
        <NavItems />
      </NavigationDrawer>
    </>
  )
}
