import { NavLink } from 'react-router-dom'

import s from './Header.module.scss'
import { activeLink } from './Header.types'

const setActive = ({ isActive }: activeLink) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`

export const Header = () => {
  return (
    <header className={s.header}>
      <div>Logo</div>

      <NavLink to='/' className={setActive}>
        Home
      </NavLink>
      <NavLink to='drivers' className={setActive}>
        Drivers
      </NavLink>
      <NavLink to='favorites' className={setActive}>
        Favorites
      </NavLink>
    </header>
  )
}
