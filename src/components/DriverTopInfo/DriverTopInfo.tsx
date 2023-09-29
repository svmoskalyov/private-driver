import s from './DriverTopInfo.module.scss'
import { Props } from './DriverTopInfo.types'

import { Rating } from '../Rating'

export const DriverTopInfo = ({
  rating,
  price_per_hour,
  trips_made,
}: Props) => (
  <ul className={s.topInfoList}>
    <li className={s.topInfoItem}>Trips made: {trips_made}</li>
    <li className={s.topInfoItem}>
      <Rating text='Rating' value={rating} />
    </li>
    <li className={s.topInfoItem}>
      Price / 1 hour:
      <span className={s.topInfoPrice}>{price_per_hour}$</span>
    </li>
  </ul>
)
