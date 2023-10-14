import { useCallback, useEffect, useState } from 'react'

import s from './FilterList.module.scss'

import driverCategories from '../../assets/data/categories.json'
import driverLanguages from '../../assets/data/languages.json'
import driverPrice from '../../assets/data/price.json'
import { useAppSelector } from '../../hooks/reduxHooks'
import { selectDrivers } from '../../redux/drivers/driversSelectors'
import {
  selectFilterCategories,
  selectFilterChoiced,
  selectFilterLanguages,
  selectFilterPrice,
} from '../../redux/filters/filterSelectors'
import { CardList } from '../CardList'
import { Filter } from '../Filter'

export const FilterList = () => {
  const catalog = useAppSelector<DriverFav[]>(selectDrivers)
  const selFilterLanguages = useAppSelector<string>(selectFilterLanguages)
  const selFilterCategories = useAppSelector<string>(selectFilterCategories)
  const selFilterPrice = useAppSelector<number>(selectFilterPrice)
  const selFilterChoiced = useAppSelector<boolean>(selectFilterChoiced)
  const [filteredDrivers, setFilteredDrivers] = useState<DriverFav[]>([])

  const filterLanguages = useCallback(
    (arr: DriverFav[]) => {
      if (selFilterLanguages === '') {
        return arr
      }

      return arr.filter((el) => el.languages.includes(selFilterLanguages))
    },
    [selFilterLanguages],
  )

  const filterCategories = useCallback(
    (arr: DriverFav[]) => {
      if (selFilterCategories === '') {
        return arr
      }

      return arr.filter((el) => el.categories.includes(selFilterCategories))
    },
    [selFilterCategories],
  )

  const filterPrice = useCallback(
    (arr: DriverFav[]) => {
      if (selFilterPrice === 0) {
        return arr
      }

      return arr.filter((el) => el.price_per_hour <= selFilterPrice)
    },
    [selFilterPrice],
  )

  useEffect(() => {
    if (!selFilterChoiced) {
      return
    }

    let filteredData = filterLanguages(catalog)
    filteredData = filterCategories(filteredData)
    filteredData = filterPrice(filteredData)
    setFilteredDrivers(filteredData)
  }, [
    catalog,
    filterLanguages,
    filterCategories,
    filterPrice,
    selFilterChoiced,
  ])

  return (
    <>
      <div className={s.filterList}>
        <Filter label='languages' items={driverLanguages} />
        <Filter label='categories' items={driverCategories} />
        <Filter label='price' items={driverPrice} />
      </div>

      {selFilterChoiced ? (
        filteredDrivers.length !== 0 ? (
          <CardList catalog={filteredDrivers} />
        ) : (
          <div className={s.notFound}>No drivers matching the filter</div>
        )
      ) : null}
    </>
  )
}
