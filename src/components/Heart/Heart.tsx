import { FiHeart } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

import s from './Heart.module.scss'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { selectIsAuth } from '../../redux/auth/authSelectors'
import { setFavorite } from '../../redux/drivers/driversSlice'

export const Heart = (el: DriverFav) => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)
  const { isFav } = el

  return (
    <label className={s.chekboxHeart}>
      <input
        className={'visuallyHidden'}
        type='checkbox'
        name='status'
        checked={isFav}
        // onChange={
        //   isAuth
        //     ? () => dispatch(setFavorite({ ...el, isFav: !isFav }))
        //     : () => navigate('/login')
        // }
        onChange={() => dispatch(setFavorite({ ...el, isFav: !isFav }))}
      />
      <FiHeart className={s.heart} />
    </label>
  )
}
