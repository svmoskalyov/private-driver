import s from './Drivers.module.scss'

import { getTotalDriversApi } from '../../services/firebaseAPI'

const Drivers = () => {
  return (
    <div className={s.drivers}>
      <button onClick={() => getTotalDriversApi()}>total drivers </button>
    </div>
  )
}

export default Drivers
