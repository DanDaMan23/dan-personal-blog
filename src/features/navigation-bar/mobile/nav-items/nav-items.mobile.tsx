import { useContext } from "react"
import useNavigationItems from "../../use-navigation-items"
import { NavigationMobileContext } from "../context/navigation.mobile.context"

import "./nav-items.mobile.scss"

export default function NavItems() {
  const { navigationItems } = useNavigationItems()

  return (
    <ul className='mobile-nav__items'>
      {navigationItems.map(({ label, onClick, subItems }) => (
        <li key={label} className='mobile-nav__item'>
          <button type='button' onClick={onClick}>
            {label}
          </button>
          {subItems ? (
            <ul key={label} className='sub-nav__items'>
              {subItems.map(({ label, onClick }) => (
                <li key={label} className='sub-nav__item'>
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
