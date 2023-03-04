import { DateHandler } from "../Utilities/DateHandler"
import Formatter from "../Utilities/Formatter"


type DateInputProps = {
    dateHandler: DateHandler
}

function DateInput({dateHandler}: DateInputProps) {
    return (
        <>
            <label htmlFor="photo-search">Search date:</label>

            <input
                type="date"
                id="photo-search"
                name="photo-search"
                defaultValue={Formatter(dateHandler.today, "input")}
                min={Formatter(dateHandler.min, "input")}
                max={Formatter(dateHandler.max, "input")}
            ></input>
        </>
    )
}

export default DateInput
