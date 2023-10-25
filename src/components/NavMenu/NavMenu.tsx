import { NavLink } from 'react-router-dom'

import s from './NavMenu.module.scss'

import { useAppSelector } from '../../hooks/reduxHooks'
import { selectIsAuth } from '../../redux/auth/authSelectors'
import { activeLink } from '../Header/Header.types'

const setActive = ({ isActive }: activeLink) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`

export const NavMenu = () => {
  const isAuth = useAppSelector(selectIsAuth)

  return (
    <nav className={s.navMenu}>
      <ul className={s.navList}>
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
        {isAuth && (
          <li>
            <NavLink to='favorites' className={setActive}>
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}
