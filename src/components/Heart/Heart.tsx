import { FiHeart } from 'react-icons/fi'

import s from './Heart.module.scss'
import { Props } from './Heart.types'

export const Heart = ({ isFav }: Props) => {
  return (
    <label className={s.chekboxHeart}>
      <input
        className={'visuallyHidden'}
        type='checkbox'
        name='status'
        checked={isFav}
        onChange={() => console.log('checked')}
      />
      <FiHeart className={s.heart} />
    </label>
  )
}
