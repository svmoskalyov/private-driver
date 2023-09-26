import s from './Avatar.module.scss'
import { Props } from './Avatar.types'

export const Avatar = ({ src, alt }: Props) => (
  <img
    className={s.avatar}
    loading='lazy'
    src={src}
    width={96}
    height={96}
    alt={alt}
  />
)
