import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import s from './Layout.module.scss'

import { Header } from '../Header'
import { Loader } from '../Loader'

export const Layout = () => (
  <div className={s.layout}>
    <Header />
    <main>
      <Loader />
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  </div>
)
