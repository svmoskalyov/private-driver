import s from './Drivers.module.scss'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { getTotalDrivers } from '../../redux/drivers/driversOperations'
import {
  selectError,
  selectIsLoading,
  selectTotalDrivers,
} from '../../redux/drivers/driversSelectors'

const Drivers = () => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectIsLoading)
  const err = useAppSelector(selectError)
  const totalDrivers = useAppSelector(selectTotalDrivers)

  return (
    <div className={s.drivers}>
      <button type='button' onClick={() => dispatch(getTotalDrivers())}>
        total drivers
      </button>{' '}
      {totalDrivers}
    </div>
  )
}

export default Drivers
