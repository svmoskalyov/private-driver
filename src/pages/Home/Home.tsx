import s from './Home.module.scss'

import { FormBook } from '../../components/FormBook'
import { FormLogin } from '../../components/FormLogin'
import { FormRegistration } from '../../components/FormRegistration'

const Home = () => {
  return (
    <div className={s.home}>
      Home
      {/* <FormBook /> */}
      {/* <FormRegistration /> */}
      {/* <FormLogin /> */}
    </div>
  )
}

export default Home
