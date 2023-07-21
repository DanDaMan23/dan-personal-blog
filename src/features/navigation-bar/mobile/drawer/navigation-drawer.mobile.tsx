import { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import logo from '../../../../photos/dlawcons_logo_dark_color.png'

import "./navigation-drawer.mobile.scss"

interface NavigationDrawerProps {
  show: boolean
  onClose: () => void
  children: ReactNode
}

export default function NavigationDrawer({
  show,
  onClose,
  children
}: NavigationDrawerProps) {
  return (
    <div className={`navigation-drawer ${show && "show-drawer"}`}>
      <button type='button' className='close-button' onClick={onClose}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div>{children}</div>
      <div className="logo-area">
        <img src={logo} alt='DLawCons' height={100} />
      </div>
    </div>
  )
}
