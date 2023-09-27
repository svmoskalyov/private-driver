import s from './DriverCategories.module.scss'
import { Props } from './DriverCategories.types'

export const DriverCategories = ({ categories }: Props) => {
  return (
    <div className={s.driverCategories}>
      <ul className={s.categoriesList}>
        {categories?.map((e, i) => (
          <li className={s.categoriesItems} key={i}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  )
}
