import { DateHandler } from "../Utilities/DateHandler"
import {format} from 'date-fns'

type DateInputProps = {
    formRef: React.RefObject<HTMLFormElement>
    inputRef: React.RefObject<HTMLInputElement>
    onSubmit: () => void
}
const date_handler = new DateHandler()
const input_values = {
    default: format(date_handler.today, "yyyy-MM-dd"),
    min: format(date_handler.MIN.value, "yyyy-MM-dd"),
    max: format(date_handler.MAX.value, "yyyy-MM-dd")
}

function DateInput({ formRef, onSubmit, inputRef }: DateInputProps) {
    return (
        <>
            <form
                method="dialog"
                className="flow"
                ref={formRef}
                onSubmit={onSubmit}
            >
                <label htmlFor="photo-search">{`Pick a date between ${format(date_handler.MIN.value, 'PPP')} and ${format(date_handler.MAX.value, 'PPP')}:`}</label>

                <div className="input-wrapper">
                    <input
                        ref={inputRef}
                        type="date"
                        id="photo-search"
                        name="photo-search"
                        defaultValue={input_values.default}
                        min={input_values.min}
                        max={input_values.max}
                    ></input>
                    <button type="submit">query photo</button>
                </div>
            </form>
        </>
    )
}

export default DateInput
