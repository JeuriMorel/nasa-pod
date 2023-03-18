import { DateHandler } from "../Utilities/DateHandler"
import Formatter from "../Utilities/Formatter"

type DateInputProps = {
    dateHandler: DateHandler
    formRef: React.RefObject<HTMLFormElement>
    inputRef: React.RefObject<HTMLInputElement>
    onSubmit: () => void
}

function DateInput({ dateHandler, formRef, onSubmit, inputRef }: DateInputProps) {
    return (
        <>
            <form
                method="dialog"
                className="flow"
                ref={formRef}
                onSubmit={onSubmit}
            >
                <label htmlFor="photo-search">{`Pick a date between ${Formatter(dateHandler.MIN.value)} and ${Formatter(dateHandler.MAX.value)}:`}</label>

                <div className="input-wrapper">
                    <input
                        ref={inputRef}
                        type="date"
                        id="photo-search"
                        name="photo-search"
                        defaultValue={Formatter(dateHandler.today, true)}
                        min={Formatter(dateHandler.MIN.value, true)}
                        max={Formatter(dateHandler.MAX.value, true)}
                    ></input>
                    <button type="submit">query photo</button>
                </div>
            </form>
        </>
    )
}

export default DateInput
