import s from './CardList.module.scss'
import { Props } from './CardList.types'

import { CardItem } from '../CardItem'

export const CardList = ({ catalog }: Props) => {
  return (
    <ul className={s.cardList}>
      {catalog.map((e) => (
        <CardItem key={e.driverId} {...e} />
      ))}
    </ul>
  )
}
