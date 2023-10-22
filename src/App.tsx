import { lazy } from 'react'
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Layout } from './components/Layout'
import { PrivateRoute } from './components/routes/PrivateRoute'

const Home = lazy(() => import('./pages/Home'))
const Drivers = lazy(() => import('./pages/Drivers'))
const Favorites = lazy(() => import('./pages/Favorites'))
const Login = lazy(() => import('./pages/Login'))
const Registration = lazy(() => import('./pages/Registration'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='drivers' element={<Drivers />} />
      <Route
        path='favorites'
        element={<PrivateRoute component={Favorites} />}
      />
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
