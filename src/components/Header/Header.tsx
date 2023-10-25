import s from './Header.module.scss'

import { Loader } from '../Loader'
import { Logo } from '../Logo'
import { NavAuth } from '../NavAuth'
import { NavMenu } from '../NavMenu'

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <NavMenu />
      <NavAuth />
      <Loader />
    </header>
  )
}
