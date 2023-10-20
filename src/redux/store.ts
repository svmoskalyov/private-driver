import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/authSlice'
import driversReducer from './drivers/driversSlice'
import filtersReducer from './filters/filterSlice'

const persistDriversConfig = {
  key: 'drivers',
  storage,
  blacklist: ['error', 'isLoading'],
}

const persistedDriversReducer = persistReducer(
  persistDriversConfig,
  driversReducer,
)

export const store = configureStore({
  reducer: {
    drivers: persistedDriversReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
