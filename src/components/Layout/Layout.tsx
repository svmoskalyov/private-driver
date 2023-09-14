import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import s from './Layout.module.scss'

import { Header } from '../Header'

export const Layout = () => (
  <div className={s.layout}>
    <Header />
    <main>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </div>
)
