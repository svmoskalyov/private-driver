import axios from 'axios'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

import { auth } from './firebaseConfig'

import { LoginForm } from '../components/FormLogin/FormLogin.types'
import { RegistrationForm } from '../components/FormRegistration/FormRegistration.types'

axios.defaults.baseURL = auth.app.options.databaseURL

export const getTotalDriversApi = async (): Promise<Driver[]> => {
  const { data } = await axios.get<Driver[]>('/drivers.json')
  return data
}

export const getDriversApi = async (
  startId: number = 1201,
): Promise<Driver[]> => {
  const limit = 3
  const endId = startId + limit

  const res = await axios
    .get<Driver[]>('/drivers.json', {
      params: {
        orderBy: `"driverId"`,
        startAt: startId,
        endAt: endId,
        print: 'pretty',
      },
    })
    .then(({ data }) =>
      Object.entries(data).map(([, drivers]) => ({ ...drivers })),
    )

  return res
}

export const registerUserApi = async ({
  name,
  email,
  password,
}: RegistrationForm) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(user, {
    displayName: name,
  })
  return user
}

export const loginUserApi = async ({ email, password }: LoginForm) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return user
}

export const logoutUserAPI = async () => {
  await auth.signOut()
}
