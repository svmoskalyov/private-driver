import { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

import s from './Modal.module.scss'
import { Props } from './Modal.types'

const modalRoot = document.querySelector('#modal-root') as HTMLElement

export const Modal = ({ children, onClose }: Props) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    document.documentElement.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'auto'
    }
  }, [handleKeyDown])

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot,
  )
}
