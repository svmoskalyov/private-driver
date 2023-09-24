import { BarLoader } from 'react-spinners'

import s from './Loader.module.scss'

import { useAppSelector } from '../../hooks/reduxHooks'
import { selectIsLoading } from '../../redux/drivers/driversSelectors'

export const Loader = () => {
  const loading = useAppSelector(selectIsLoading)

  return (
    <div className={s.loader}>
      <BarLoader
        width='100%'
        height='4px'
        color='#00c8ff'
        aria-label='Loading Spinner'
        loading={loading}
      />
    </div>
  )
}
