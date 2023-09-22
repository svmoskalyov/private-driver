import { configureStore } from '@reduxjs/toolkit'

import driversReducer from './drivers/driversSlice'

export const store = configureStore({
  reducer: {
    drivers: driversReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
