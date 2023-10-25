import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import s from './NavAuth.module.scss'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { logoutUser } from '../../redux/auth/authOperations'
import { selectIsAuth } from '../../redux/auth/authSelectors'

import { Button } from '../Button'

export const NavAuth = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)

  return (
    <ul className={s.navAuth}>
      {!isAuth ? (
        <>
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
        </>
      ) : (
        <li>
          <Button
            className={s.authLogin}
            type='button'
            onClick={() => dispatch(logoutUser())}
          >
            <FiLogOut className={s.icon} />
            Log Out
          </Button>
        </li>
      )}
    </ul>
  )
}
