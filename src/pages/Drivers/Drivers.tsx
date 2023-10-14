import { useEffect, useRef } from 'react'

import s from './Drivers.module.scss'

import { Button } from '../../components/Button'
import { CardList } from '../../components/CardList'

import { FilterList } from '../../components/FilterList'
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
import { selectFilterChoiced } from '../../redux/filters/filterSelectors'

const Drivers = () => {
  const dispatch = useAppDispatch()
  const initialized = useRef<boolean>(false)
  const loading = useAppSelector<boolean>(selectIsLoading)
  const err = useAppSelector<string | null>(selectError)
  const catalog = useAppSelector<DriverFav[]>(selectDrivers)
  const totalDrivers = useAppSelector<number>(selectTotalDrivers)
  const startId = useAppSelector<number>(selectStartId)
  const selFilterChoiced = useAppSelector<boolean>(selectFilterChoiced)

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
      {!loading && !err && catalog.length !== 0 && <FilterList />}
      {!selFilterChoiced && <CardList catalog={catalog} />}

      {!selFilterChoiced && catalog.length < totalDrivers && (
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
