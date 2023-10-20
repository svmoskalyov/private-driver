import { createSlice } from '@reduxjs/toolkit'

import { loginUser, logoutUser, registerUser } from './authOperations'

type UserState = {
  name: string | null
  email: string | null
  isAuth: boolean
  isLoading: boolean
  error: string | null
}

const initialState: UserState = {
  name: '',
  email: '',
  isAuth: false,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.email = payload.email
        state.name = payload.displayName
        state.isAuth = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload.email
        state.name = payload.displayName
        state.isAuth = true
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState
      })
      .addMatcher(
        (action) =>
          action.type.startsWith('auth') && action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
        (state) => {
          state.isLoading = false
          state.error = null
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('auth') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false
          state.error = payload
        },
      )
  },
})

export default authSlice.reducer
