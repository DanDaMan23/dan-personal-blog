import logo from "../../../photos/dlawcons_logo_light_color.png"
import useNavigationItems from "../use-navigation-items"

import Accordion from "../../../components/accordion/accordion.component"

import "./navigation.desktop.scss"
import { useLocation, useNavigate } from "react-router"

export default function NavigationBarDesktop() {
  const LOGO_SIZE = 70

  const { navigationItems } = useNavigationItems()

  const { pathname } = useLocation()

  const navigate = useNavigate()

  return (
    <div className='navigation-bar-desktop'>
      <button
        type='button'
        className='logo-button'
        onClick={() => navigate("/")}
      >
        <img src={logo} alt='DLawCons' height={LOGO_SIZE} />
      </button>

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
