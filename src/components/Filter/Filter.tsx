import { FocusEvent, useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import s from './Filter.module.scss'

import { Props } from './Filter.types'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { setFilter } from '../../redux/filters/filterSlice'
// import {
//   selectFilterCategories,
//   selectFilterLanguages,
//   selectFilterPrice,
// } from '../../redux/filters/filterSelectors'

export const Filter = ({ label, items }: Props) => {
  const dispatch = useAppDispatch()
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectItem, setSelectItem] = useState<string>('')
  // const selFilterLanguages = useAppSelector<string>(selectFilterLanguages)
  // const selFilterCategories = useAppSelector<string>(selectFilterCategories)
  // const selFilterPrice = useAppSelector<number>(selectFilterPrice)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const dismissHandler = (e: FocusEvent<HTMLButtonElement>) => {
    if (e.currentTarget === e.target) {
      setShowDropdown(false)
    }
  }

  const itemSelection = (e: string) => {
    setSelectItem(e)

    if (label === 'languages') {
      dispatch(setFilter({ languages: e }))
    } else if (label === 'categories') {
      dispatch(setFilter({ categories: e }))
    } else {
      dispatch(setFilter({ price: Number(e) }))
    }
  }

  // const itemDefault = () => {
  //   if (label === 'languages') {
  //     return selFilterLanguages
  //   } else if (label === 'categories') {
  //     return selFilterCategories
  //   } else {
  //     return selFilterPrice
  //   }
  // }

  return (
    <div className={s.filter}>
      <p className={s.filterLabel}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </p>
      <button
        onClick={() => toggleDropdown()}
        onBlur={(e: FocusEvent<HTMLButtonElement>) => dismissHandler(e)}
      >
        <div>
          {selectItem
            ? label === 'price'
              ? `${selectItem} $`
              : selectItem
            : '. . .'}
        </div>

        {/* <div>
          {selectItem
            ? label === 'price'
              ? `${selectItem} $`
              : selectItem
            : itemDefault()}
        </div> */}

        {showDropdown && (
          <div className={s.dropdown}>
            {items.map((e: string, i: number) => {
              return (
                <p
                  className={
                    selectItem === e
                      ? `${s.dropdownItem} ${s.choiced}`
                      : s.dropdownItem
                  }
                  key={i}
                  onClick={() => {
                    itemSelection(e)
                  }}
                >
                  {e}
                </p>
              )
            })}
          </div>
        )}

        {showDropdown ? (
          <FiChevronUp className={s.icon} />
        ) : (
          <FiChevronDown className={s.icon} />
        )}
      </button>
    </div>
  )
}
