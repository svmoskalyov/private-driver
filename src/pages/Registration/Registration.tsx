import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { FormRegistration } from '../../components/FormRegistration'
import { Modal } from '../../components/Modal'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { selectAuthError } from '../../redux/auth/authSelectors'
import { setErrNull } from '../../redux/auth/authSlice'

const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectAuthError)
  const [showModal, setShowModal] = useState<boolean>(true)

  const handleCloseModal = useCallback(() => {
    navigate('/')
  }, [navigate])

  const toggleModal = () => {
    setShowModal(!showModal)
    handleCloseModal()
    dispatch(setErrNull())
  }

  const createErrorMessage = (error: string) => {
    if (`${error}` === 'auth/email-already-in-use') {
      toast.error('Email already exists')
    } else {
      toast.error(error)
    }

    return error
  }

  useEffect(() => {
    if (error) {
      createErrorMessage(error)
    }
  }, [error])

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>
          <FormRegistration onClose={toggleModal} />
        </Modal>
      )}
    </>
  )
}

export default Registration
