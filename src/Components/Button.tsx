import {MouseEventHandler} from 'react'

interface ButtonProps {
    button_text: string
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    label?: string
}

function Button({ button_text, className, onClick, disabled= false, label }: ButtonProps) {
    return (
        
        <>
            <button
                className={className}
                onClick={onClick}
                disabled={disabled}
                aria-label={label}
            >
                {button_text}
            </button>
        </>
    )
}

export default Button
