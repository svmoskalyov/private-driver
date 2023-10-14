import s from './DriverCategories.module.scss'
import { Props } from './DriverCategories.types'

import { useAppSelector } from '../../hooks/reduxHooks'
import { selectFilterCategories } from '../../redux/filters/filterSelectors'

export const DriverCategories = ({ categories }: Props) => {
  const selFilterCategories = useAppSelector<string>(selectFilterCategories)

  return (
    <ul className={s.categoriesList}>
      {categories?.map((e, i) => (
        <li
          className={
            selFilterCategories === e
              ? `${s.categoriesItems} ${s.categoriesItemsChoice}`
              : s.categoriesItems
          }
          key={i}
        >
          {e}
        </li>
      ))}
    </ul>
  )
}
