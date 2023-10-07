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

import driversReducer from './drivers/driversSlice'

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
