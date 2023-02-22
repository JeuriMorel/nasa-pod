import Card from "./Components/Card"
import Header from "./Components/Header"
import Button from "./Components/Button"

function App() {
    return (
        <>
            <Header>
                <Button info="previous day" />
                <Button info="next day" />
                <Button info="today" />
                <Button info="random"/>
            </Header>
            <main>
                <Card></Card>
            </main>
        </>
    )
}

export default App
