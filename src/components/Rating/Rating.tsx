import { GoStarFill } from 'react-icons/go'

import s from './Rating.module.scss'

import { Props } from './Rating.types'

export const Rating = ({ text, value }: Props) => {
  return (
    <div className={s.rating}>
      <GoStarFill className={s.star} />
      <span className={text ? s.ratingValueTop : s.ratingValue}>
        {text ? text + ': ' + value.toFixed(1) : value.toFixed(1)}
      </span>
    </div>
  )
}
