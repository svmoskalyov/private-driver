import { RootState } from '../store'

export const selectDrivers = (state: RootState) => state.drivers.items
export const selectFavorites = (state: RootState) => state.drivers.favorites
export const selectTotalDrivers = (state: RootState) =>
  state.drivers.totalDrivers
export const selectStartId = (state: RootState) => state.drivers.startId
export const selectIsLoading = (state: RootState) => state.drivers.isLoading
export const selectError = (state: RootState) => state.drivers.error
