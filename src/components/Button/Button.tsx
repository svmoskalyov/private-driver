import s from './Button.module.scss'
import { Props } from './Button.types'

export const Button = ({
  className,
  type = 'button',
  onClick,
  children,
  ...allyProps
}: Props) => (
  <button
    className={`${className} ${s.button}`}
    type={type}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
)
