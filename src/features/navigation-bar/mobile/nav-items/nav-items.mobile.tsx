import { useLocation } from "react-router"
import useNavigationItems from "../../use-navigation-items"

import "./nav-items.mobile.scss"

export default function NavItems() {
  const { navigationItems } = useNavigationItems()

  const { pathname } = useLocation()

  return (
    <ul className='mobile-nav__items'>
      {navigationItems.map(({ label, onClick, subItems, routeLocation }) => (
        <li key={label} className='mobile-nav__item'>
          <div
            className={`mobile-nav__item ${
              pathname === routeLocation && "active-nav"
            }`}
          >
            <button type='button' onClick={onClick}>
              {label}
            </button>
          </div>
          {subItems ? (
            <ul key={label} className='sub-nav__items'>
              {subItems.map(({ label, onClick, routeLocation }) => (
                <li
                  key={label}
                  className={`sub-nav__item ${
                    routeLocation === pathname && "active-nav"
                  }`}
                >
                  <button type='button' onClick={onClick}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  )
}
