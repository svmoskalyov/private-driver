import s from './Favorites.module.scss'

import { CardList } from '../../components/CardList'
import { useAppSelector } from '../../hooks/reduxHooks'
import {
  selectError,
  selectFavorites,
  selectIsLoading,
} from '../../redux/drivers/driversSelectors'

const Favorites = () => {
  const loading = useAppSelector<boolean>(selectIsLoading)
  const err = useAppSelector<string | null>(selectError)
  const favorites = useAppSelector<DriverFav[]>(selectFavorites)

  return (
    <>
      {favorites.length !== 0 && <CardList catalog={favorites} />}

      {favorites.length === 0 && (
        <div className={s.notFavCar}>No favorites drivers </div>
      )}
    </>
  )
}

export default Favorites
