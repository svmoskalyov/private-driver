import { FiLogIn } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import s from './Header.module.scss'
import { activeLink } from './Header.types'

import { Loader } from '../Loader'
import { Logo } from '../Logo'

const setActive = ({ isActive }: activeLink) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`

export const Header = () => (
  <header className={s.header}>
    <Logo />

    <nav className={s.headerNav}>
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
        <li>
          <NavLink to='favorites' className={setActive}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>

    <ul className={s.authBox}>
      <li>
        <NavLink to='login' className={s.authLogin}>
          <FiLogIn className={s.icon} />
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink to='registration' className={s.authRegistration}>
          Registration
        </NavLink>
      </li>
    </ul>

    <Loader />
  </header>
)
