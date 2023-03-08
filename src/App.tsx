import PhotoWrapper from "./Components/PhotoWrapper"
import Button from "./Components/Button"
import NavBar from "./Components/NavBar"
import Formatter from "./Utilities/Formatter"
import { DateHandler, isCurrentMinOrMax } from "./Utilities/DateHandler"
import { useMemo, useRef, useState } from "react"
import Modal from "./Components/Modal"
import DateInput from "./Components/DateInput"
import axios from "axios"
import { useQuery } from "react-query"

function App() {
    const [date_handler, set_date_handler] = useState(new DateHandler())

    const nasa_keys = {
        url: import.meta.env.VITE_NASA_API_URL,
        key: import.meta.env.VITE_NASA_API_KEY
    }


    const { isLoading, isSuccess, isError, data, error, refetch } = useQuery({
        queryKey: ["photos", date_handler.current],
        queryFn: fetchPhotoToday,
        staleTime: Infinity
    })

    async function fetchPhotoToday() {
        console.log(Formatter(date_handler.current, "input"))
        try {
            const response = await axios.get(
                nasa_keys.url, {
                    params: {api_key: nasa_keys.key, date: Formatter(date_handler.current, "input")}
                }
            )
            return response
        } catch (error) {
            console.error(error)
        }
    }

    
    let current_date = Formatter(date_handler.current)
    const current_is_min = useMemo(
        () => isCurrentMinOrMax(date_handler, "min"),
        [date_handler]
    )
    const current_is_max = useMemo(
        () => isCurrentMinOrMax(date_handler, "max"),
        [date_handler]
    )
    const modalRef = useRef<HTMLDialogElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    // formRef.current?.onSubmit = () => {
    //     console.log(formRef)
    // }
    
    

    function toggleModal() {
        modalRef.current?.showModal()
    }

    // const explanation =
    //     "On February 22, a young Moon shared the western sky at sunset with bright planets Venus and Jupiter along the ecliptic plane. The beautiful celestial conjunction was visible around planet Earth. But from some locations Jupiter hid for a while, occulted by the crescent lunar disk. The Solar System's ruling gas giant was captured here just before it disappeared behind the the Moon's dark edge, seen over the R\u00edo de la Plata at Colonia del Sacramento, Uruguay.  In the serene river and skyscape Venus is not so shy, shining brightly closer to the horizon through the fading twilight. Next week Venus and Jupiter will appear even closer in your evening sky."

    // const title = "Crescent Moon Occultation"

    // const copyright = "Tara Mostofi"

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
                    <DateInput dateHandler={date_handler} formRef={ formRef} />
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
                />
            </NavBar>
        </>
    )
}

export default App
