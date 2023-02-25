import PhotoWrapper from "./Components/PhotoWrapper"
import Button from "./Components/Button"
import NavBar from "./Components/NavBar"
import Formatter from "./Utilities/Formatter"

function App() {
    return (
        <>
            <main>
                <PhotoWrapper/>
            </main>
            <NavBar>
                <Button
                    className={"m-inline-end-sm m-inline-start-auto"}
                    info="&#60;"
                />
                <Button
                    className={"m-inline-end-sm"}
                    info={Formatter(new Date())}
                />
                <Button info="&#62;" />
                <Button className={"m-inline-start-auto"} info="random" />
            </NavBar>
        </>
    )
}

export default App
