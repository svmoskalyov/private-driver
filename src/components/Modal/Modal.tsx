import { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { IoClose } from 'react-icons/io5'

import s from './Modal.module.scss'
import { Props } from './Modal.types'

import { useAppDispatch } from '../../hooks/reduxHooks'
import { toggleModal } from '../../redux/drivers/driversSlice'
import { Button } from '../Button'

const modalRoot = document.querySelector('#modal-root') as HTMLElement

export const Modal = ({ children }: Props) => {
  const dispatch = useAppDispatch()

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModal())
    }
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch(toggleModal())
      }
    },
    [dispatch],
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
      <div className={s.modalWrapper}>
        {children}
        <Button
          className={s.btnModalCloseWrapper}
          onClick={() => dispatch(toggleModal())}
          aria-label='button modal close'
        >
          <IoClose className={s.btnModalClose} />
        </Button>
      </div>
    </div>,
    modalRoot,
  )
}
