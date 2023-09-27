import s from './Avatar.module.scss'
import { Props } from './Avatar.types'

export const Avatar = ({ src, name }: Props) =>
  name === 'reviewer' ? (
    <img
      className={`${s.avatar} ${s.avatarReviewer}`}
      loading='lazy'
      width={44}
      height={44}
      src={src}
      alt={'avatar reviewer'}
    />
  ) : (
    <div className={s.avatarDriverWrapper}>
      <img
        className={s.avatar}
        loading='lazy'
        width={96}
        height={96}
        src={src}
        alt={'avatar driver'}
      />
    </div>
  )
