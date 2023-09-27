import s from './DriverTopInfo.module.scss'
import { Props } from './DriverTopInfo.types'

export const DriverTopInfo = ({
  rating,
  price_per_hour,
  trips_made,
}: Props) => (
  <div className={s.driverTopInfo}>
    <ul className={s.topInfoList}>
      <li className={s.topInfoItem}>Trips made: {trips_made}</li>
      <li className={s.topInfoItem}>Rating {rating}</li>
      <li className={s.topInfoItem}>
        Price / 1 hour:
        <span className={s.topInfoPrice}>{price_per_hour}$</span>
      </li>
    </ul>
  </div>
)
