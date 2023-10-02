import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getDrivers, getTotalDrivers } from './driversOperations'

type DriversState = {
  items: DriverFav[]
  favorites: DriverFav[]
  totalDrivers: number
  startId: number
  showModal: boolean
  isLoading: boolean
  error: string | null
}

const initialState: DriversState = {
  items: [],
  favorites: [],
  totalDrivers: 0,
  startId: 1201,
  showModal: false,
  isLoading: false,
  error: null,
}

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal
    },
    setFavorite(state, { payload }: PayloadAction<Driver[]>) {
      console.log('🚀 ~ setFavorite ~ payload:', payload)

      //   state.items = state.items.map((el) =>
      //     el.driverId !== payload.driverId ? el : { ...payload },
      //   )
      //   payload.isFav
      //     ? state.favorites.push(payload)
      //     : (state.favorites = state.favorites.filter(
      //         (el) => el.driverId !== payload.driverId,
      //       ))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTotalDrivers.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.totalDrivers = payload.length
      })
      .addCase(getDrivers.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.items = [
          ...state.items,
          ...payload.map((el) => ({ ...el, isFav: false })),
        ]
        state.startId = state.startId + payload.length
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('drivers') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false
          state.error = payload
        },
      )
  },
})

export const { setFavorite, toggleModal } = driversSlice.actions
export default driversSlice.reducer
