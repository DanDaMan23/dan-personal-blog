import { Routes, Route, useLocation } from "react-router-dom"
import NavigationMobileContextProvider from "./features/navigation-bar/mobile/context/navigation.mobile.context"

import "./App.scss"
import HomePage from "./features/home-page/home-page"
import Footer from "./features/footer/footer"
import AboutMe from "./features/about-me/about-me"
import ContactMePage from "./features/contact-me/page/contact-me.page"
import useMediaQuery, { DeviceView } from "./hooks-utils/use-media-query"
import NavigationBarDesktop from "./features/navigation-bar/desktop/navigation.desktop"
import DeveloperJourney from "./features/about-me/developer_journey/developer-journey"
import ReadingHobby from "./features/about-me/reading-hobby/reading-hobby"
import Boxing from "./features/about-me/boxing/boxing"
import { useEffect } from "react"
import Travel from "./features/about-me/travel/travel"

export default function App() {
  const { deviceView } = useMediaQuery()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='App'>
      <div className='main-header'>
        {deviceView === DeviceView.Mobile ? (
          <NavigationMobileContextProvider />
        ) : (
          <NavigationBarDesktop />
        )}
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='aboutMe' element={<AboutMe />}>
          <Route path='webDevelopment' element={<DeveloperJourney />} />
          <Route path='boxing' element={<Boxing />} />
          <Route path='books' element={<ReadingHobby />} />
          {/* To be added after new york <Route path='fitness' element={<>Fitness Page</>} /> */}
          <Route path='travel' element={<Travel />} />
        </Route>
        <Route path='contactMe' element={<ContactMePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
