import { FC } from 'react'

import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../../hooks/reduxHooks'
import { selectIsAuth } from '../../redux/auth/authSelectors'

interface PropType {
  component: React.FC
}

export const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isAuth = useAppSelector(selectIsAuth)

  return !isAuth ? <Navigate to='/login' /> : <Component />
}
