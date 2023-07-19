import logo from "../../../photos/dlawcons_logo.png"
import useNavigationItems from "../use-navigation-items"

import Accordion from "../../../components/accordion/accordion.component"

import "./navigation.desktop.scss"
import { useLocation } from "react-router"

export default function NavigationBarDesktop() {
  const LOGO_SIZE = 70

  const { navigationItems } = useNavigationItems()

  const { pathname } = useLocation()

  console.log(pathname)

  return (
    <div className='navigation-bar-desktop'>
      <img src={logo} alt='DLawCons' height={LOGO_SIZE} />

      <nav className='desktop-navigation'>
        <ul className='desktop-navigation__items'>
          {navigationItems.map(
            ({ label, onClick, subItems, routeLocation }) => (
              <li
                key={label}
                className={`desktop-navigation__item ${
                  pathname === routeLocation && "active-nav"
                }`}
              >
                {subItems ? (
                  <Accordion
                    button={<button type='button' onClick={onClick} />}
                    buttonLabel={label}
                  >
                    <ul className='desktop-navigation__sub-items'>
                      {subItems.map(({ label, onClick, routeLocation }) => (
                        <li
                          key={label}
                          className={`desktop-navigation__sub-item ${
                            pathname === routeLocation && "active-sub-nav"
                          }`}
                        >
                          <button type='button' onClick={onClick}>
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                ) : (
                  <button type='button' onClick={onClick}>
                    {label}
                  </button>
                )}
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  )
}
