import { createContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
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
  const location = useLocation()

  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  const openNavigationDrawer = () => setShowMobileNavigation(true)

  const closeNavigationDrawer = () => setShowMobileNavigation(false)

  useEffect(() => {
    closeNavigationDrawer()
  }, [location])

  const contextValue: INavigationMobileContext = {
    showMobileNavigation,
    openNavigationDrawer,
    closeNavigationDrawer
  }

  return (
    <NavigationMobileContext.Provider value={contextValue}>
      <NavigationBarMobile />
      {/* NavigationBarDesktop */}
    </NavigationMobileContext.Provider>
  )
}
