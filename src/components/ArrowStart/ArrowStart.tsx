import s from './ArrowStart.module.scss'
import { Props } from './ArrowStart.types'

export const ArrowStart = ({ name }: Props) => (
  <ul className={s.arrowStart}>
    <li className={s.arrowSliding}>
      <div className={s.arrow}></div>
    </li>
    <li className={`${s.arrowSliding} ${s.delay1}`}>
      <div className={s.arrow}></div>
    </li>
    <li className={`${s.arrowSliding} ${s.delay2}`}>
      <div className={s.arrow}></div>
    </li>
    <li className={`${s.arrowSliding} ${s.delay3}`}>
      <div className={s.arrow}></div>
    </li>
    <span className={s.name}>{name}</span>
  </ul>
)
