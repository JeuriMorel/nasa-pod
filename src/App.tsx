import PhotoWrapper from "./Components/PhotoWrapper"
import Button from "./Components/Button"
import MenuBar from "./Components/MenuBar"
import {
    adjust_date_to_pst,
    DateHandler,
    LONG_LOCALIZED_DATE,
    YEAR_MONTH_DAY,
} from "./Utilities/DateHandler"
import { useMemo, useRef, useState } from "react"
import Modal from "./Components/Modal"
import DateInput from "./Components/DateInput"
import axios from "axios"
import { useQuery } from "react-query"
import { format, isSameDay, isValid, addDays } from "date-fns"
import Status_404 from "./Components/Status_404"
import Loader from "./Components/Loader"

function App() {
    // const YEAR_MONTH_DAY = "yyyy-MM-dd"
    // const LONG_LOCALIZED_DATE = "PPP"
    const [date_handler, set_date_handler] = useState(new DateHandler())

    const [favorites_array, set_favorites_array] = useState<
        FavoritePhotoInfo[]
    >([])

    const nasa_keys = {
        url: import.meta.env.VITE_NASA_API_URL as string,
        key: import.meta.env.VITE_NASA_API_KEY as string,
    }

    const formatted_current_date = format(date_handler.current, YEAR_MONTH_DAY)

    const { isLoading, isSuccess, isError, data, error, refetch } = useQuery({
        queryKey: ["photos", date_handler.current],
        queryFn: fetchPicture,
        staleTime: Infinity,
        retry: 0,
    })

    function handleFavoritesToggle(
        checked: Boolean,
        photo_info_obj: PhotoInfo
    ) {
        if (checked === true) {
            set_favorites_array(array => [
                ...array,
                { ...photo_info_obj, date: formatted_current_date },
            ])
            // set_favorites_array([...favorites_array, {...photo_info_obj, date: current}])
        } else
            set_favorites_array(array =>
                array.filter(({ date }) => date !== formatted_current_date)
            )

        console.log(favorites_array)
    }

    function setRandomDate() {
        const start = date_handler.MIN.in_ms
        const end = date_handler.MAX.in_ms
        setCurrentDate(
            adjust_date_to_pst(new Date(start + Math.random() * (end - start)))
        )
    }

    async function fetchPicture() {
        try {
            const response = await axios.get(nasa_keys.url, {
                params: {
                    api_key: nasa_keys.key,
                    date: format(date_handler.current, YEAR_MONTH_DAY),
                },
            })
            return response
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const { data, status } = error.response

                    if (status === 404) throw new Error(error.message)
                    console.log(`There was a ${status} Error: ${data}`)
                } else if (error.request) {
                    console.log(error.message)
                }
            } else {
                console.log(error)
            }
        }
    }

    let current_date = format(date_handler.current, LONG_LOCALIZED_DATE)
    const current_is_min = useMemo(
        () => isSameDay(date_handler.current, date_handler.MIN.value),
        [date_handler]
    )
    const current_is_max = useMemo(
        () => isSameDay(date_handler.current, date_handler.MAX.value),
        [date_handler]
    )
    const modalRef = useRef<HTMLDialogElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    function toggleModal() {
        modalRef.current?.showModal()
    }

    function handleSubmit() {
        const input_value_as_date = new Date(inputRef.current?.value as string)

        input_value_as_date.setDate(input_value_as_date.getDate() + 1)

        setCurrentDate(input_value_as_date)
    }

    function setCurrentDate(new_current: Date) {
        if (isValid(new_current))
            set_date_handler({ ...date_handler, current: new_current })
    }

    function updateDate(value: number) {
        if (isBreachingOuterBounds(value, date_handler)) return

        set_date_handler({
            ...date_handler,
            current: addDays(date_handler.current, value),
        })
    }

    function currentIsInFavorites(obj: FavoritePhotoInfo): boolean {
        return obj.date === formatted_current_date
    }

    return (
        <>
            <main>
                {isSuccess && (
                    <PhotoWrapper
                        {...data?.data}
                        handleToggle={handleFavoritesToggle}
                        checked={favorites_array.some(currentIsInFavorites)}
                    />
                )}
                {isError && <Status_404 />}
                {isLoading && <Loader />}
                <Modal modalRef={modalRef}>
                    <DateInput
                        formRef={formRef}
                        onSubmit={handleSubmit}
                        inputRef={inputRef}
                    />
                </Modal>
            </main>
            <MenuBar>
                <Button
                    className={
                        "shift-button shift-button-left"
                    }
                    button_text="&#60;"
                    onClick={() => updateDate(-1)}
                    disabled={current_is_min}
                />
                <Button
                    className={"button-date"}
                    button_text={current_date}
                    onClick={toggleModal}
                />
                <Button
                    className={"shift-button shift-button-right"}
                    button_text="&#62;"
                    onClick={() => updateDate(1)}
                    disabled={current_is_max}
                />
                <Button
                    className={"m-inline-start-auto m-inline-end-sm random-date-button"}
                    button_text=""
                    onClick={setRandomDate}
                />
            </MenuBar>
        </>
    )
}

export default App
function isBreachingOuterBounds(value: number, date_handler: DateHandler) {
    return (
        (value < 0 &&
            isSameDay(date_handler.current, date_handler.MIN.value)) ||
        (value > 0 && isSameDay(date_handler.current, date_handler.MAX.value))
    )
}
