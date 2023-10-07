import { useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { FormRegistration } from '../../components/FormRegistration'
import { Modal } from '../../components/Modal'

const Registration = () => {
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
          <FormRegistration onClose={toggleModal} />
        </Modal>
      )}
    </>
  )
}

export default Registration
