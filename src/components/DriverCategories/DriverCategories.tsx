import s from './DriverCategories.module.scss'
import { Props } from './DriverCategories.types'

export const DriverCategories = ({ categories }: Props) => {
  const isCoiced = false

  return (
    <ul className={s.categoriesList}>
      {categories?.map((e, i) => (
        <li
          className={
            isCoiced
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
