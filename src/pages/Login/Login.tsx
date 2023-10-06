import { useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { FormLogin } from '../../components/FormLogin'
import { Modal } from '../../components/Modal'

const Login = () => {
  const navigate = useNavigate()

  const handleCloseModal = useCallback(() => {
    navigate('/')
  }, [navigate])

  const [showModal, setShowModal] = useState<boolean>(true)

  const toggleModal = () => {
    setShowModal(!showModal)
    handleCloseModal()
  }

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
