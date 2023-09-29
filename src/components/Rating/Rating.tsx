import { GoStarFill } from 'react-icons/go'

import s from './Rating.module.scss'

import { Props } from './Rating.types'

export const Rating = ({ text, value }: Props) => {
  return (
    <ul className={s.rating}>
      <li>
        <GoStarFill className={s.star} />
      </li>
      <li>
        <span className={text ? s.ratingValueTop : s.ratingValue}>
          {text ? text + ': ' + value.toFixed(1) : value.toFixed(1)}
        </span>
      </li>
    </ul>
  )
}
