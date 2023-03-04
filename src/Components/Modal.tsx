import Button from "./Button"

type ModalProps = {
  children: React.ReactNode
  modalRef: React.RefObject<HTMLDialogElement>
}


function Modal({children, modalRef}: ModalProps) {
  return (
    <dialog ref={modalRef} className="flow">
      {children}
      <Button button_text="&times;" onClick={() => modalRef.current?.close()}
      className="btn-close-modal"></Button>
    </dialog>
  )
}

export default Modal