import { Routes, Route } from "react-router-dom"
import NavigationMobileContextProvider from "./features/navigation-bar/mobile/context/navigation.mobile.context"

import "./App.scss"

export default function App() {
  return (
    <div className='App'>
      {/* TODO: Consider putting this with the Desktop Navigation Bar */}
      <NavigationMobileContextProvider />
      <Routes>
        <Route path='/' element={<>Home Page</>} />
        <Route path='/aboutMe' element={<>About Me Page</>} />
        <Route path='/contactMe' element={<>Contact Me</>} />
      </Routes>
    </div>
  )
}
