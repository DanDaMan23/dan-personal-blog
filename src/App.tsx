import { Routes, Route, Outlet } from "react-router-dom"
import NavigationMobileContextProvider from "./features/navigation-bar/mobile/context/navigation.mobile.context"

import "./App.scss"

export default function App() {
  return (
    <div className='App'>
      {/* TODO: Consider putting this with the Desktop Navigation Bar */}
      <NavigationMobileContextProvider />
      <Routes>
        <Route path='/' element={<>Home Page</>} />
        <Route
          path='aboutMe'
          element={
            <>
              <h1>About Me Page</h1>
              {/* TODO: Think about a carousel below the outlet */}
              <Outlet />
            </>
          }
        >
          <Route path='webDevelopment' element={<>Web Development</>} />
          <Route path='books' element={<>Books Page</>} />
          <Route path='fitness' element={<>Fitness Page</>} />
          <Route path='boxing' element={<>Boxing Page</>} />
          <Route path='travel' element={<>Travel Page</>} />
        </Route>
        <Route path='contactMe' element={<>Contact Me</>} />
      </Routes>
    </div>
  )
}
