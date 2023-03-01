interface NavBarProps  {
    children: React.ReactNode
}
function NavBar(props: NavBarProps) {
    return <nav>{props.children}</nav>
}

export default NavBar
