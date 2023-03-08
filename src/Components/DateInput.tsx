import { DateHandler } from "../Utilities/DateHandler"
import Formatter from "../Utilities/Formatter"

type DateInputProps = {
    dateHandler: DateHandler
    formRef: React.RefObject<HTMLFormElement>
}
// function handleSubmit(event: React.SyntheticEvent) {
//     console.log(event.currentTarget)
//     const form = event.currentTarget
//     const formData = new FormData(form)
//     const date_input = formData.get('photo-search')
//     console.log(date_input)
// }

function DateInput({ dateHandler, formRef }: DateInputProps) {
    return (
        <>
            <form method="dialog" className="flow" ref={ formRef}>
                <label htmlFor="photo-search">Search date:</label>

                <div className="input-wrapper">
                    <input
                        type="date"
                        id="photo-search"
                        name="photo-search"
                        defaultValue={Formatter(dateHandler.today, "input")}
                        min={Formatter(dateHandler.min, "input")}
                        max={Formatter(dateHandler.max, "input")}
                    ></input>
                    <button type="submit">query photo</button>
                </div>
            </form>
        </>
    )
}

export default DateInput
