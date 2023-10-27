import s from './DriverInfo.module.scss'
import { Props } from './DriverInfo.types'

export const DriverInfo = ({ languages, driver_info, skills }: Props) => {
  return (
    <ul className={s.infoList}>
      <li className={s.infoListItem}>
        <span className={s.infoName}>Speaks:</span>
        <p className={s.infoText}>
          {languages?.map((e, i) => (
            <span className={s.infoLang} key={i}>
              {e}
            </span>
          ))}
        </p>
      </li>

      <li className={s.infoListItem}>
        <span className={s.infoName}>Driver Info:</span>
        <p className={s.infoText}>{driver_info}</p>
      </li>

      <li className={s.infoListItem}>
        <span className={s.infoName}>Skills:</span>
        <p className={s.infoText}>
          {skills?.map((e, i) => <span key={i}>{e}</span>)}
        </p>
      </li>
    </ul>
  )
}
