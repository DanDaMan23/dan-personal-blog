import useNavigationItems from "../../use-navigation-items"

import "./nav-items.mobile.scss"

export default function NavItems() {
  const { navigationItems } = useNavigationItems()

  return (
    <ul className='mobile-nav__items'>
      {navigationItems.map(({ label, onClick, subItems }) => (
        <li className='mobile-nav__item'>
          <button type='button' onClick={onClick}>
            {label}
          </button>
          {subItems ? (
            <ul className='sub-nav__items'>
              {subItems.map(({ label, onClick }) => (
                <li className='sub-nav__item'>
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
