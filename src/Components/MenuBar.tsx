import { Children } from "react"

interface MenuBarProps {
    children: React.ReactNode
}
function MenuBar({ children }: MenuBarProps) {
    const children_as_array = Children.toArray(children)
    return (
        <menu>
            {children_as_array.map(child => (
                <li>{child}</li>
            ))}
        </menu>
    )
}

export default MenuBar
