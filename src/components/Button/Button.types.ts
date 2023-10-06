import { MouseEventHandler, ReactNode } from 'react'

export interface Props {
  className?: string | undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler
  children: ReactNode
  allyProps?: { [x: string]: unknown }
}
