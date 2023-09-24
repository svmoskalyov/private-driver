import s from './CardList.module.scss'

import { Props } from './CardList.types'

export const CardList = ({ catalog }: Props) => {
  return (
    <ul className={s.cardList}>
      {catalog.map((el) => (
        <li key={el.driverId}>{el.name} </li>
      ))}
    </ul>
  )
}
