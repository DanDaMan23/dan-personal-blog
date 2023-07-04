import { ReactNode } from "react"

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
    <div
      style={{ display: show ? "block" : "none" }}
      className='navigation-drawer'
    >
      {/* Use SVG or FontAwesome Icons  */}
      <button type='button' onClick={onClose}>
        Close
      </button>
      <div>{children}</div>
    </div>
  )
}
