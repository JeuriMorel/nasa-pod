interface Date_Object {
    value: Date
    day: number
    month: number
    year: number
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
        this.today = adjustDate(new Date())
        this.current = this.today
        this.apod_start_date = adjustDate(new Date("1995-06-16 PST"))
        this.min_in_ms = this.apod_start_date.getTime()
        this.max_in_ms = this.today.getTime()
        this.MAX = {
            value: this.today,
            day: this.today.getDay(),
            month: this.today.getMonth(),
            year: this.today.getFullYear(),
        }
        this.MIN = {
            value: this.apod_start_date,
            day: this.apod_start_date.getDay(),
            month: this.apod_start_date.getMonth(),
            year: this.apod_start_date.getFullYear(),
        }
    }
}

export function isCurrentMinOrMax(
    date_handler: DateHandler,
    date_to_compare: Date_Object
): boolean {
    return (
        date_handler.current.getDay() == date_to_compare.day &&
        date_handler.current.getMonth() == date_to_compare.month &&
        date_handler.current.getFullYear() == date_to_compare.year
    )
}

export function adjustDate(date_to_adjust: Date) {
    date_to_adjust.setHours(0, 0, 0, 0)
    return date_to_adjust
}
