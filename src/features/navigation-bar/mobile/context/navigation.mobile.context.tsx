import { createContext, useState } from "react"
import NavigationBarMobile from "../navigation-bar.mobile"

interface INavigationMobileContext {
  showMobileNavigation: boolean
  openNavigationDrawer: () => void
  closeNavigationDrawer: () => void
}

export const NavigationMobileContext = createContext<INavigationMobileContext>({
  showMobileNavigation: false,
  openNavigationDrawer: () => {},
  closeNavigationDrawer: () => {}
})

export default function NavigationMobileContextProvider() {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  const openNavigationDrawer = () => setShowMobileNavigation(true)

  const closeNavigationDrawer = () => setShowMobileNavigation(false)

  const contextValue: INavigationMobileContext = {
    showMobileNavigation,
    openNavigationDrawer,
    closeNavigationDrawer
  }

  return (
    <NavigationMobileContext.Provider value={contextValue}>
      <NavigationBarMobile />
    </NavigationMobileContext.Provider>
  )
}
