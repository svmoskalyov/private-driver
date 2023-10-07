import * as React from 'react'
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Layout } from './components/Layout'

const Home = React.lazy(() => import('./pages/Home'))
const Drivers = React.lazy(() => import('./pages/Drivers'))
const Favorites = React.lazy(() => import('./pages/Favorites'))
const Login = React.lazy(() => import('./pages/Login'))
const Registration = React.lazy(() => import('./pages/Registration'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='drivers' element={<Drivers />} />
      <Route path='favorites' element={<Favorites />} />
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>,
  ),
)

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>LOADING...</div>} />
  )
}

export default App
