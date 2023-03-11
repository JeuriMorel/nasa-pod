export class DateHandler {
    today: Date
    current: Date
    max: Date
    min: Date
    min_in_ms: number
    max_in_ms: number


    constructor() {
        this.today = adjustDate(new Date())
        this.current = adjustDate(new Date())
        this.max = adjustDate(new Date())
        this.min = adjustDate(new Date("1995-06-16 PST"))
        this.min_in_ms = this.min.getTime()
        this.max_in_ms = this.max.getTime()
    }
}

export function isCurrentMinOrMax(
    date_handler: DateHandler,
    date_to_compare: Date
): boolean {
        return date_handler.current.getTime() == date_to_compare.getTime()
}

export function adjustDate(oldDate: Date) {
    oldDate.setHours(0, 0, 0, 0)
    return oldDate
    // return new Date( oldDate.getTime() - oldDate.getTimezoneOffset() * -60000 )
}
