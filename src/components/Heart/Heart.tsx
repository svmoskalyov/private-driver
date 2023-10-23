import { FiHeart } from 'react-icons/fi'

import s from './Heart.module.scss'

import { useAppDispatch } from '../../hooks/reduxHooks'

import { setFavorite } from '../../redux/drivers/driversSlice'

export const Heart = (el: DriverFav) => {
  const dispatch = useAppDispatch()
  const { isFav } = el

  return (
    <label className={s.chekboxHeart}>
      <input
        className={'visuallyHidden'}
        type='checkbox'
        name='status'
        checked={isFav}
        onChange={() => dispatch(setFavorite({ ...el, isFav: !isFav }))}
      />
      <FiHeart className={s.heart} />
    </label>
  )
}
