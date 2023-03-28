import { sub } from "date-fns"

const OFFSET_FROM_UTC = 8

interface Date_Object {
    value: Date
    in_ms: number
}

export class DateHandler {
    today: Date
    current: Date
    apod_start_date: Date
    MAX: Date_Object
    MIN: Date_Object

    constructor() {
        this.today = adjust_date_to_pst(new Date())
        this.current = this.today
        this.apod_start_date = new Date("1995-06-16 PST")
        this.MAX = {
            value: this.today,
            in_ms: this.today.getTime()
        }
        this.MIN = {
            value: this.apod_start_date,
            in_ms: this.apod_start_date.getTime()
        }
    }
}

export function adjust_date_to_pst(date_to_adjust: Date) {
    return sub(date_to_adjust, { hours: OFFSET_FROM_UTC })
}
