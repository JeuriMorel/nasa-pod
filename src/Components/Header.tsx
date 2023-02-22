type HeaderProps = {
    children: React.ReactNode
}

function Header(props: HeaderProps) {
    return <>
        <header>{ props.children}</header>
    </>
}

export default Header