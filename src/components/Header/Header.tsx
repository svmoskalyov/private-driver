import { FiLogIn } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import s from './Header.module.scss'
import { activeLink } from './Header.types'

import { Button } from '../Button'
import { Logo } from '../Logo'

const setActive = ({ isActive }: activeLink) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`

export const Header = () => (
  <header className={s.header}>
    <Logo />

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

    <div className={s.btnBox}>
      <Button
        className={s.btnLogin}
        onClick={() => console.log('Log in')}
        aria-label='button Log in'
      >
        <FiLogIn className={s.icon} />
        Log in
      </Button>
      <Button
        className={s.btnRegistre}
        onClick={() => console.log('Registration')}
        aria-label='button Registration'
      >
        Registration
      </Button>
    </div>
  </header>
)
