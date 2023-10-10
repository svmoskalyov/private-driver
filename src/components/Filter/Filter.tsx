import { FocusEvent, useState } from 'react'

import s from './Filter.module.scss'

import { Props } from './Filter.types'

export const Filter = ({ label, items }: Props) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectItem, setSelectItem] = useState<string>('')

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const dismissHandler = (e: FocusEvent<HTMLButtonElement>) => {
    if (e.currentTarget === e.target) {
      setShowDropdown(false)
    }
  }

  const itemSelection = (e: string) => {
    console.log('choised --> ', e)
    setSelectItem(e)
  }

  return (
    <div className={s.filter}>
      <p className={s.filterLabel}>{label}</p>
      <button
        onClick={() => toggleDropdown()}
        onBlur={(e: FocusEvent<HTMLButtonElement>) => dismissHandler(e)}
      >
        <div>{selectItem ? selectItem : 'Select...'} </div>

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
      </button>
    </div>
  )
}
