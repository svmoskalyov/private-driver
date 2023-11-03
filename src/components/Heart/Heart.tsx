import { FiHeart } from 'react-icons/fi'

import { toast } from 'react-toastify'

import s from './Heart.module.scss'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import { selectIsAuth } from '../../redux/auth/authSelectors'
import { setFavorite } from '../../redux/drivers/driversSlice'

export const Heart = (el: DriverFav) => {
  const dispatch = useAppDispatch()
  const { isFav } = el
  const isAuth = useAppSelector(selectIsAuth)

  return (
    <label className={s.chekboxHeart}>
      {isAuth ? (
        <input
          className={'visuallyHidden'}
          type='checkbox'
          name='status'
          checked={isFav}
          onChange={() => dispatch(setFavorite({ ...el, isFav: !isFav }))}
        />
      ) : (
        <input
          className={'visuallyHidden'}
          type='checkbox'
          name='status'
          checked={false}
          onChange={() => toast.info('Available to authorized users')}
        />
      )}
      <FiHeart className={s.heart} />
    </label>
  )
}
