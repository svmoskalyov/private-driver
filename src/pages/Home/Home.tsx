import s from './Home.module.scss'

import { FormBook } from '../../components/FormBook'

const Home = () => {
  return (
    <div className={s.home}>
      Home
      <FormBook />
    </div>
  )
}

export default Home
