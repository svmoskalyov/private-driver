import { RootState } from '../store'

export const selectIsAuth = (state: RootState) => Boolean(state.auth.isAuth)
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading
export const selectAuthError = (state: RootState) => state.auth.error
