import s from './DriverInfo.module.scss'
import { Props } from './DriverInfo.types'

export const DriverInfo = ({ languages, driver_info, skills }: Props) => {
  return (
    <ul className={s.infoList}>
      <li className={s.infoListItem}>
        Speaks:
        {languages?.map((e, i) => (
          <span className={`${s.infoText} ${s.infoLang}`} key={i}>
            {e}
          </span>
        ))}
      </li>
      <li className={s.infoListItem}>
        Driver Info:
        <span className={s.infoText}>{driver_info}</span>
      </li>
      <li className={s.infoListItem}>
        Skills:
        {skills?.map((e, i) => (
          <span className={s.infoText} key={i}>
            {e}
          </span>
        ))}
      </li>
    </ul>
  )
}
