import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"
const Modal = () => {
  const { IsOpenModal, closeModal } = useGlobalContext()
  return (
    <div className={IsOpenModal ? "modal show-modal" : 'modal'}>
      <div className="contain-modal">
        <span onClick={closeModal}><FaTimes /></span>
        <h2>modal content</h2>
      </div>
    </div>
  )
}

export default Modal;