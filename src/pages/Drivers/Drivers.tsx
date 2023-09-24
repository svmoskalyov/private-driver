import { useEffect, useRef } from 'react'

import s from './Drivers.module.scss'

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
  const initialized = useRef(false)
  const loading = useAppSelector(selectIsLoading)
  const err = useAppSelector(selectError)
  const catalog = useAppSelector(selectDrivers)
  const totalDrivers = useAppSelector(selectTotalDrivers)
  const startId = useAppSelector(selectStartId)

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
      <button type='button' onClick={onClickLoadMore}>
        get drivers
      </button>{' '}
      total:{totalDrivers} catalog: {catalog.length}
    </div>
  )
}

export default Drivers
