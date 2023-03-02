import PhotoWrapper from "./Components/PhotoWrapper"
import Button from "./Components/Button"
import NavBar from "./Components/NavBar"
import Formatter from "./Utilities/Formatter"
import { DateHandler } from "./Utilities/DateHandler"
import { useState } from "react"


function App() {
    const [date_handler, set_date_handler] = useState(new DateHandler())
    let current_date = Formatter(date_handler.current)

    function isCurrentMinOrMax(value: keyof DateHandler): boolean {
        return date_handler.current.getTime() == date_handler[value].getTime()
    }

    function updateDate(value: number) {
        if (value < 0 && date_handler.current.getTime() == date_handler.min.getTime()) return
        if (value > 0 && date_handler.current.getTime() == date_handler.max.getTime()) return

        let new_current = date_handler.current

        new_current.setDate(date_handler.current.getDate() + value)

        set_date_handler({ ...date_handler, current: new_current })
        
    }

    return (
        <>
            <main>
                <PhotoWrapper />
            </main>
            <NavBar>
                <Button
                    className={"m-inline-end-sm m-inline-start-auto"}
                    button_text="&#60;"
                    onClick={()=> updateDate(-1)}
                    disabled={isCurrentMinOrMax('min')}
                />
                <Button
                    className={"m-inline-end-sm"}
                    button_text={current_date}
                />
                <Button
                    button_text="&#62;"
                    onClick={()=> updateDate(1)}
                    disabled={isCurrentMinOrMax('max')}
                />
                <Button
                    className={"m-inline-start-auto"}
                    button_text="random"
                />
            </NavBar>
        </>
    )
}

export default App
