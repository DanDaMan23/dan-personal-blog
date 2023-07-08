import { Routes, Route, Outlet } from "react-router-dom"
import NavigationMobileContextProvider from "./features/navigation-bar/mobile/context/navigation.mobile.context"

import "./App.scss"
import HomePage from "./features/home-page/home-page"
import Footer from "./features/footer/footer"

export default function App() {
  return (
    <div className='App'>
      {/* TODO: Consider putting this with the Desktop Navigation Bar */}
      <div className='main-header'>
        <NavigationMobileContextProvider />
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='aboutMe'
          element={
            <main>
              <h1>About Me Page</h1>
              {/* TODO: Think about a carousel below the outlet */}
              <Outlet />
            </main>
          }
        >
          <Route path='webDevelopment' element={<>Web Development</>} />
          <Route path='books' element={<>Books Page</>} />
          <Route path='fitness' element={<>Fitness Page</>} />
          <Route path='boxing' element={<>Boxing Page</>} />
          <Route path='travel' element={<>Travel Page</>} />
        </Route>
        <Route path='contactMe' element={<main>Contact Me</main>} />
      </Routes>
      <Footer />
    </div>
  )
}
