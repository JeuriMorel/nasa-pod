type ButtonProps = {
    info: string
    className?: string
}


function Button({info, className}: ButtonProps) {
    return <>
        <button className={`nav-button ${className}`}>{ info }</button>
    </>
}

export default Button