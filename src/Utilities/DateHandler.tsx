import { add, isSameDay, sub } from "date-fns"

const OFFSET_FROM_UTC = 8

interface Date_Object {
    value: Date
}

export class DateHandler {
    today: Date
    current: Date
    apod_start_date: Date
    min_in_ms: number
    max_in_ms: number
    MAX: Date_Object
    MIN: Date_Object

    constructor() {
        this.today = adjust_date_to_pst(new Date())
        this.current = this.today
        this.apod_start_date = new Date("1995-06-16 PST")
        this.min_in_ms = this.apod_start_date.getTime()
        this.max_in_ms = this.today.getTime()
        this.MAX = {
            value: this.today,
        }
        this.MIN = {
            value: this.apod_start_date,
        }
    }
}

// export function isCurrentMinOrMax(
//     date_handler: DateHandler,
//     date_to_compare: Date_Object
// ): boolean {
//     return (
//         date_handler.current.getDay() == date_to_compare.day &&
//         date_handler.current.getMonth() == date_to_compare.month &&
//         date_handler.current.getFullYear() == date_to_compare.year
//     )
// }

export function adjust_date_to_pst(date_to_adjust: Date) {
    return sub(date_to_adjust, { hours: OFFSET_FROM_UTC })
}
