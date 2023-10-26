import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { FormLogin } from '../../components/FormLogin'
import { Modal } from '../../components/Modal'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { selectAuthError } from '../../redux/auth/authSelectors'
import { setErrNull } from '../../redux/auth/authSlice'

const Login = () => {
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
    if (`${error}` === 'auth/invalid-login-credentials') {
      toast.error('Email or password is not correct')
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
          <FormLogin onClose={toggleModal} />
        </Modal>
      )}
    </>
  )
}

export default Login
