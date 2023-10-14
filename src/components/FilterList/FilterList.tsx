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
  console.log('🚀 ~ FilterList ~ filteredDrivers:', filteredDrivers)

  const filterItems = useCallback((arr: DriverFav[], query: string) => {
    return arr.filter((el) => el.languages.includes(query))
  }, [])

  useEffect(() => {
    if (!selFilterChoiced) {
      return
    }

    const filteredData = filterItems(catalog, selFilterLanguages)
    setFilteredDrivers(filteredData)
  }, [catalog, filterItems, selFilterChoiced, selFilterLanguages])

  // const filterLanguages = useCallback(
  //   (filteredData: DriverFav[]) => {
  //     return filteredData.filter((driver) =>
  //       driver.languages.includes(selFilterLanguages),
  //     )
  //   },
  //   [selFilterLanguages],
  // )

  // useEffect(() => {
  //   if (!selFilterChoiced) {
  //     return
  //   }

  //   const filteredData = filterLanguages(catalog)
  //   setFilteredDrivers(filteredData)
  // }, [catalog, filterLanguages, selFilterChoiced])

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
          <div className={s.notFound}>No cars matching the filter</div>
        )
      ) : null}

      {/* {selFilterChoiced && filteredDrivers.length !== 0 && (
        <CardList catalog={filteredDrivers} />
      )}
      {selFilterChoiced && filteredDrivers.length === 0 && (
        <div className={s.notFound}>No cars matching the filter</div>
      )} */}
    </>
  )
}
