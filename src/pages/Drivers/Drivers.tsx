import { useEffect, useRef } from 'react'

import s from './Drivers.module.scss'

import { Button } from '../../components/Button'
import { CardList } from '../../components/CardList'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import {
  getDrivers,
  getTotalDrivers,
} from '../../redux/drivers/driversOperations'
import {
  selectDrivers,
  selectError,
  selectIsLoading,
  selectStartId,
  selectTotalDrivers,
} from '../../redux/drivers/driversSelectors'

const Drivers = () => {
  const dispatch = useAppDispatch()
  const initialized = useRef<boolean>(false)
  const loading = useAppSelector<boolean>(selectIsLoading)
  const err = useAppSelector<string | null>(selectError)
  const catalog = useAppSelector<DriverFav[]>(selectDrivers)
  const totalDrivers = useAppSelector<number>(selectTotalDrivers)
  const startId = useAppSelector<number>(selectStartId)

  const onClickLoadMore = () => {
    dispatch(getDrivers(startId))
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      if (catalog.length === 0) {
        dispatch(getDrivers(startId))
        dispatch(getTotalDrivers())
      }
    }
  }, [dispatch, catalog.length, startId])

  return (
    <div className={s.drivers}>
      <div>Filters</div>
      <CardList catalog={catalog} />

      {catalog.length < totalDrivers && (
        <Button
          className={s.btnLoadMore}
          type='button'
          onClick={onClickLoadMore}
        >
          Load more
        </Button>
      )}
    </div>
  )
}

export default Drivers
