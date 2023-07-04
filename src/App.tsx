import { Routes, Route } from "react-router-dom"
import NavigationBar from "./features/navigation-bar/mobile/navigation-bar.mobile"

import "./App.scss"

export default function App() {
  return (
    <div className='App'>
      <NavigationBar />
      {/* Implement routing here */}
      <Routes>
        <Route path='/' element={<>Home Page</>} />
        <Route path='/aboutMe' element={<>About Me Page</>} />
        <Route path='/contactMe' element={<>Contact Me</>} />
      </Routes>
    </div>
  )
}
