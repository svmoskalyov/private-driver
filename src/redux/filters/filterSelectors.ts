import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

export const selectFilterLanguages = (state: RootState) =>
  state.filters.languages
export const selectFilterCategories = (state: RootState) =>
  state.filters.categories
export const selectFilterPrice = (state: RootState) => state.filters.price

export const selectFilterChoiced = createSelector(
  [selectFilterLanguages, selectFilterCategories, selectFilterPrice],
  (languages, categories, price) => {
    if (languages === '' && categories === '' && price === 0) {
      return false
    }
    return true
  },
)
