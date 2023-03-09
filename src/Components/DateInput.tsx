import { DateHandler } from "../Utilities/DateHandler"
import Formatter from "../Utilities/Formatter"

type DateInputProps = {
    dateHandler: DateHandler
    formRef: React.RefObject<HTMLFormElement>
    inputRef: React.RefObject<HTMLInputElement>
    onSubmit: () => void
}

// function handleSubmit(event: React.SyntheticEvent) {
//     console.log(event.currentTarget)
//     const form = event.currentTarget
//     const formData = new FormData(form)
//     const date_input = formData.get('photo-search')
//     console.log(date_input)
// }

function DateInput({ dateHandler, formRef, onSubmit, inputRef }: DateInputProps) {
    return (
        <>
            <form
                method="dialog"
                className="flow"
                ref={formRef}
                onSubmit={onSubmit}
            >
                <label htmlFor="photo-search">Search date:</label>

                <div className="input-wrapper">
                    <input
                        ref={inputRef}
                        type="date"
                        id="photo-search"
                        name="photo-search"
                        defaultValue={Formatter(dateHandler.today, true)}
                        min={Formatter(dateHandler.min, true)}
                        max={Formatter(dateHandler.max, true)}
                    ></input>
                    <button type="submit">query photo</button>
                </div>
            </form>
        </>
    )
}

export default DateInput
