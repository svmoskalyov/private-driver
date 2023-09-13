import { NavLink } from 'react-router-dom'

import s from './Header.module.scss'
import { activeLink } from './Header.types'

const setActive = ({ isActive }: activeLink) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`

export const Header = () => {
  return (
    <header className={s.header}>
      <div>Logo</div>

      <nav>
        <ul>
          <li>
            <NavLink to='/' className={setActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='drivers' className={setActive}>
              Drivers
            </NavLink>
          </li>
          <li>
            <NavLink to='favorites' className={setActive}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>buttons</div>
    </header>
  )
}
