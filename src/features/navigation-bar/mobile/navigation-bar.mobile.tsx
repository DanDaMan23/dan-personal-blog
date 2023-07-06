import { useContext } from "react"
import Backdrop from "../../../components/backdrop/backdrop.component"
import HamburgerButton from "../../../components/hamburger-button/hamburger-button.component"
import "./navigation-bar.mobile.scss"
import NavigationDrawer from "./drawer/navigation-drawer.mobile"
import NavItems from "./nav-items/nav-items.mobile"
import { NavigationMobileContext } from "./context/navigation.mobile.context"

export default function NavigationBarMobile() {
  const { showMobileNavigation, openNavigationDrawer, closeNavigationDrawer } =
    useContext(NavigationMobileContext)

  return (
    <>
      <div className='navigation-bar-mobile'>
        <HamburgerButton onClick={openNavigationDrawer} />
        <h2>DLaw</h2>
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
