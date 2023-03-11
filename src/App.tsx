import PhotoWrapper from "./Components/PhotoWrapper"
import Button from "./Components/Button"
import NavBar from "./Components/NavBar"
import Formatter from "./Utilities/Formatter"
import { adjustDate, DateHandler, isCurrentMinOrMax } from "./Utilities/DateHandler"
import { useMemo, useRef, useState } from "react"
import Modal from "./Components/Modal"
import DateInput from "./Components/DateInput"
import axios from "axios"
import { useQuery } from "react-query"

function App() {
    const [date_handler, set_date_handler] = useState(new DateHandler())

    const nasa_keys = {
        url: import.meta.env.VITE_NASA_API_URL as string,
        key: import.meta.env.VITE_NASA_API_KEY as string,
    }

    const { isLoading, isSuccess, isError, data, error, refetch } = useQuery({
        queryKey: ["photos", date_handler.current],
        queryFn: fetchPicture,
        staleTime: Infinity,
    })

    function setRandomDate() {
        const start = date_handler.min_in_ms
        const end = date_handler.max_in_ms
        setCurrentDate(adjustDate(new Date(start + Math.random() * (end - start))))
    }

    async function fetchPicture() {
        try {
            const response = await axios.get(nasa_keys.url, {
                params: {
                    api_key: nasa_keys.key,
                    thumbs: true,
                    date: Formatter(date_handler.current, true),
                },
            })
            console.log(response)
            console.log(date_handler)
            return response
        } catch (error) {
            console.error(error)
        }
    }

    let current_date = Formatter(date_handler.current)
    const current_is_min = useMemo(
        () => isCurrentMinOrMax(date_handler, date_handler.min),
        [date_handler]
    )
    const current_is_max = useMemo(
        () => isCurrentMinOrMax(date_handler, date_handler.max),
        [date_handler]
    )
    const modalRef = useRef<HTMLDialogElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)


    function toggleModal() {
        modalRef.current?.showModal()
    }

    function handleSubmit() {
        const input_value_as_date = adjustDate(new Date(inputRef.current?.value as string))

        input_value_as_date.setDate(input_value_as_date.getDate() + 1)

        setCurrentDate(input_value_as_date)

    }

    function setCurrentDate(new_current: Date) {
        if (
            new_current instanceof Date &&
            isFinite(new_current.getTime())
        ) {
            date_handler.current = new_current

            set_date_handler({ ...date_handler })
        }
    }

    function updateDate(value: number) {
        if (
            value < 0 &&
            date_handler.current.getTime() == date_handler.min.getTime()
        )
            return
        if (
            value > 0 &&
            date_handler.current.getTime() == date_handler.max.getTime()
        )
            return

        date_handler.current.setDate(date_handler.current.getDate() + value)

        set_date_handler({ ...date_handler })
    }

    return (
        <>
            <main>
                <PhotoWrapper {...data?.data} />
                <Modal modalRef={modalRef}>
                    <DateInput
                        dateHandler={date_handler}
                        formRef={formRef}
                        onSubmit={handleSubmit}
                        inputRef={inputRef}
                        
                    />
                </Modal>
            </main>
            <NavBar>
                <Button
                    className={"m-inline-end-sm m-inline-start-auto"}
                    button_text="&#60;"
                    onClick={() => updateDate(-1)}
                    disabled={current_is_min}
                />
                <Button
                    className={"m-inline-end-sm button-date"}
                    button_text={current_date}
                    onClick={toggleModal}
                />
                <Button
                    button_text="&#62;"
                    onClick={() => updateDate(1)}
                    disabled={current_is_max}
                />
                <Button
                    className={"m-inline-start-auto m-inline-end-sm"}
                    button_text="random"
                    onClick={setRandomDate}
                />
            </NavBar>
        </>
    )
}

export default App
