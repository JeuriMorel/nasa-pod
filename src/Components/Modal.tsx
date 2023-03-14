import Button from "./Button"
import {MouseEvent} from 'react'

type ModalProps = {
    children: React.ReactNode
    modalRef?: React.RefObject<HTMLDialogElement>
}

function Modal({ children, modalRef }: ModalProps) {
    function close_modal(e: MouseEvent) {
        e.stopPropagation();
        const modal_parent = (e.target as HTMLButtonElement).closest('dialog')
        modal_parent?.close()
    }
    return (
        <dialog ref={modalRef}>
            {children}
            <Button
                button_text="&times;"
                onClick={close_modal}
                className="btn-close-modal"
            ></Button>
        </dialog>
    )
}

export default Modal

// (event) => {
//     const modal_parent = event
//     console.log(modal_parent)
//     modalRef?.current?.close()
// }
