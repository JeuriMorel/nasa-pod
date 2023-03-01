interface ButtonProps {
    button_text: string
    className?: string
    onClick?: Function
}

function Button({ button_text, className, onClick }: ButtonProps) {
    return (
        <>
            <button
                className={`nav-button ${className}`}
                onClick={() => onClick?.()}
            >
                {button_text}
            </button>
        </>
    )
}

export default Button
