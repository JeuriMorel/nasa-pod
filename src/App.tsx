import PhotoWrapper from "./Components/PhotoWrapper"
import Button from "./Components/Button"
import NavBar from "./Components/NavBar"
import Formatter from "./Utilities/Formatter"
import { DateHandler } from "./Utilities/DateHandler"

function App() {
    const date_handler = new DateHandler()
    return (
        <>
            <main>
                <PhotoWrapper />
            </main>
            <NavBar>
                <Button
                    className={"m-inline-end-sm m-inline-start-auto"}
                    button_text="&#60;"
                    onClick={date_handler.decrementDate}
                />
                <Button
                    className={"m-inline-end-sm"}
                    button_text={Formatter(date_handler.current)}
                />
                <Button button_text="&#62;" onClick={date_handler.incrementDate}/>
                <Button
                    className={"m-inline-start-auto"}
                    button_text="random"
                    
                />
            </NavBar>
        </>
    )
}

export default App
