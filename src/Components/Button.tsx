import {MouseEventHandler} from 'react'

interface ButtonProps {
    button_text: string
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

function Button({ button_text, className, onClick, disabled= false }: ButtonProps) {
    return (
        <>
            <button
                className={`nav-button ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {button_text}
            </button>
        </>
    )
}

export default Button
