import logo from "../../../photos/dlawcons_logo.png"
import useNavigationItems from "../use-navigation-items"

import "./navigation.desktop.scss"

export default function NavigationBarDesktop() {
  const LOGO_SIZE = 70

  const { navigationItems } = useNavigationItems()

  return (
    <div className='navigation-bar-desktop'>
      {/* logo */}
      <img src={logo} alt='DLawCons' width={LOGO_SIZE} height={LOGO_SIZE} />

      {/* Navigation Buttons */}
      <nav className='desktop-navigation'>
        <ul className='desktop-navigation__items'>
          {navigationItems.map(({ label, onClick }) => (
            <li className='desktop-navigation__item'>
              <button type='button' onClick={onClick}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
