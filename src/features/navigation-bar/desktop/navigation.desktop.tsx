import logo from "../../../photos/dlawcons_logo.png"
import useNavigationItems from "../use-navigation-items"

import Accordion from "../../../components/accordion/accordion.component"

import "./navigation.desktop.scss"

export default function NavigationBarDesktop() {
  const LOGO_SIZE = 70

  const { navigationItems } = useNavigationItems()

  return (
    <div className='navigation-bar-desktop'>
      <img src={logo} alt='DLawCons' width={LOGO_SIZE} height={LOGO_SIZE} />

      <nav className='desktop-navigation'>
        <ul className='desktop-navigation__items'>
          {navigationItems.map(({ label, onClick, subItems }) => (
            <li key={label} className='desktop-navigation__item'>
              {subItems ? (
                <Accordion
                  button={<button type='button' onClick={onClick} />}
                  buttonLabel={label}
                >
                  <ul className='desktop-navigation__sub-items'>
                    {subItems.map(({ label, onClick }) => (
                      <li
                        className='desktop-navigation__sub-item'
                      >
                        <button type="button" onClick={onClick}>{label}</button>
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
          ))}
        </ul>
      </nav>
    </div>
  )
}
