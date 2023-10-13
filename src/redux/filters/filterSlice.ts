import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltersState = {
  languages: string
  categories: string
  price: number
}

type FilterChoiced = {
  languages?: string
  categories?: string
  price?: number
}

const initialState: FiltersState = {
  languages: '',
  categories: '',
  price: 0,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, { payload }: PayloadAction<FilterChoiced>) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
