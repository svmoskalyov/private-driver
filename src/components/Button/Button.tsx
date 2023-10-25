import s from './Button.module.scss'
import { Props } from './Button.types'

export const Button = ({
  className,
  type = 'button',
  onClick,
  disabled,
  children,
  ...allyProps
}: Props) => (
  <button
    className={`${className} ${s.button}`}
    type={type}
    onClick={onClick}
    disabled={disabled}
    {...allyProps}
  >
    {children}
  </button>
)
