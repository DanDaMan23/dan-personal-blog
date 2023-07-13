import { createContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import NavigationBarMobile from "../navigation-bar.mobile"
import useMediaQuery, {
  DeviceViewType
} from "../../../../hooks-utils/use-media-query"

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

  const { deviceView } = useMediaQuery()

  const contextValue: INavigationMobileContext = {
    showMobileNavigation,
    openNavigationDrawer,
    closeNavigationDrawer
  }

  return (
    <NavigationMobileContext.Provider value={contextValue}>
      {deviceView === DeviceViewType.Mobile ? <NavigationBarMobile /> : <></>}
      {/* NavigationBarDesktop */}
    </NavigationMobileContext.Provider>
  )
}
