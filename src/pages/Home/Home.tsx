import { Link } from 'react-router-dom'

import s from './Home.module.scss'

import driver from '../../assets/images/driver.jpg'
import { ArrowStart } from '../../components/ArrowStart'

const Home = () => (
  <>
    <ul className={s.home}>
      <li>
        <h1 className={s.title}>
          Spend the time of the trip in comfort,
          <mark className={s.titleAccent}>choose your driver</mark>
        </h1>
        <Link to='drivers' className={s.getStarted}>
          <ArrowStart name='Get started' />
        </Link>
      </li>
      <li>
        <p className={s.text}>
          Travel in comfort, relax or solve your business on the road without
          thinking about driving rules, contact our professional drivers.
        </p>
      </li>
      <li>
        <img
          className={s.img}
          loading='lazy'
          src={driver}
          width={600}
          height={375}
          alt='image driver'
        />
      </li>
    </ul>
  </>
)

export default Home
