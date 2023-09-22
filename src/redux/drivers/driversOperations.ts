import { createAsyncThunk } from '@reduxjs/toolkit'

import { getDriversApi, getTotalDriversApi } from '../../services/firebaseAPI'

export const getTotalDrivers = createAsyncThunk(
  'drivers/getTotal',
  async (_, thunkApi) => {
    try {
      const data = await getTotalDriversApi()
      console.log('🚀 ~ getTotalDrivers ~ response:', data)

      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const getDrivers = createAsyncThunk(
  'drivers/getDrivers',
  async (startId, thunkApi) => {
    try {
      const data = await getDriversApi(startId)
      return { data }
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)
