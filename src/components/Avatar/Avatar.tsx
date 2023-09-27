import s from './Avatar.module.scss'
import { Props } from './Avatar.types'

export const Avatar = ({ src, name }: Props) => (
  <img
    className={
      name === 'reviewer' ? `${s.avatar} ${s.avatarReviewer}` : s.avatar
    }
    loading='lazy'
    width={name === 'reviewer' ? 44 : 96}
    height={name === 'reviewer' ? 44 : 96}
    src={src}
    alt={name === 'reviewer' ? 'avatar reviewer' : 'avatar driver'}
  />
)
