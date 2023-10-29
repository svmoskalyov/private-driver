import s from './Favorites.module.scss'

import { CardList } from '../../components/CardList'
import { useAppSelector } from '../../hooks/reduxHooks'
import { selectFavorites } from '../../redux/drivers/driversSelectors'

const Favorites = () => {
  const favorites = useAppSelector<DriverFav[]>(selectFavorites)

  return (
    <div className={s.favorites}>
      {favorites.length !== 0 && <CardList catalog={favorites} />}

      {favorites.length === 0 && (
        <div className={s.notFavCar}>No favorites drivers </div>
      )}
    </div>
  )
}

export default Favorites
