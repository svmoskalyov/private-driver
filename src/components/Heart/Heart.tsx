import s from './Heart.module.scss'
import { Props } from './Heart.types'

export const Heart = ({ isFav }: Props) => {
  return (
    <label className={s.heart}>
      <input
        type='checkbox'
        name='status'
        checked={isFav}
        onChange={() => console.log('checked')}
      />
    </label>
  )
}
