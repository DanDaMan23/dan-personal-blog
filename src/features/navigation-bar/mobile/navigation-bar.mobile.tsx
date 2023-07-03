import Backdrop from "../../../components/backdrop/backdrop.component"
import HamburgerButton from "../../../components/hamburger-button/hamburger-button.component"
import "./navigation-bar.mobile.scss"

export default function NavigationBar() {
  return (
    <>
      <div className='navigation-bar'>
        <HamburgerButton
          onClick={() => {
            console.log("Hello World")
          }}
        />
        <h2>DanDaMan</h2>
      </div>
      <Backdrop show={false} onClick={() => {}} />
    </>
  )
}
