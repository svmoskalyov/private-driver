import s from './Logo.module.scss'

import logo from '../../assets/icons/speedometer.ico'

export const Logo = () => (
  <div className={s.logo}>
    <img src={logo} width={28} height={28} alt='logo' />
    PD
  </div>
)
