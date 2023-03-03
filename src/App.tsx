import PhotoWrapper from "./Components/PhotoWrapper"
import Button from "./Components/Button"
import NavBar from "./Components/NavBar"
import Formatter from "./Utilities/Formatter"
import { DateHandler, isCurrentMinOrMax } from "./Utilities/DateHandler"
import { useMemo, useState } from "react"


function App() {
    const [date_handler, set_date_handler] = useState(new DateHandler())
    let current_date = Formatter(date_handler.current)
    const current_is_min = useMemo(()=> isCurrentMinOrMax( date_handler, 'min'), [date_handler])
    const current_is_max = useMemo(()=> isCurrentMinOrMax( date_handler, 'max'), [date_handler])


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
                    disabled={current_is_min}
                />
                <Button
                    className={"m-inline-end-sm button-date"}
                    button_text={current_date}
                />
                <Button
                    button_text="&#62;"
                    onClick={()=> updateDate(1)}
                    disabled={current_is_max}
                />
                <Button
                    className={"m-inline-start-auto m-inline-end-sm"}
                    button_text="random"
                />
            </NavBar>
        </>
    )
}

export default App
