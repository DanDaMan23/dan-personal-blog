import { Routes, Route } from "react-router-dom"
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

export default function App() {
  const { deviceView } = useMediaQuery()

  return (
    <div className='App'>
      {/* TODO: Consider putting this with the Desktop Navigation Bar */}
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
          <Route path='books' element={<ReadingHobby />} />
          <Route path='fitness' element={<>Fitness Page</>} />
          <Route path='boxing' element={<>Boxing Page</>} />
          <Route path='travel' element={<>Travel Page</>} />
        </Route>
        <Route path='contactMe' element={<ContactMePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
