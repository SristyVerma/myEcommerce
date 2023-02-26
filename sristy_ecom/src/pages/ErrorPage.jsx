import { Modal, ModalOverlay,ModalContent,ModalBody,ModalFooter,Button,ModalHeader } from "@chakra-ui/react";
import React ,{useState}from 'react'
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const [showModal, setShowModal] = useState(true);
    const navigate =useNavigate()
    function closeModal() {
        setShowModal(false);
        navigate("/")
      }
  return (
    <div>
    <Modal isOpen={showModal} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>
          <p>No such Page Exist.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </div>
  )
}

export default ErrorPage