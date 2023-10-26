import { createAsyncThunk } from '@reduxjs/toolkit'

import { LoginForm } from '../../components/FormLogin/FormLogin.types'
import { RegistrationForm } from '../../components/FormRegistration/FormRegistration.types'
import {
  loginUserApi,
  logoutUserAPI,
  registerUserApi,
} from '../../services/firebaseAPI'

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user: RegistrationForm, thunkApi) => {
    try {
      const { email, displayName } = await registerUserApi(user)
      return { email, displayName }
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user: LoginForm, thunkApi) => {
    try {
      const { email, displayName } = await loginUserApi(user)
      return { email, displayName }
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await logoutUserAPI()
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)
