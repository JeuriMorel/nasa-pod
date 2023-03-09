export class DateHandler {
    today: Date
    current: Date
    max: Date
    min: Date
    min_in_ms: number
    max_in_ms: number


    constructor() {
        this.today = new Date()
        this.current = new Date()
        this.max = new Date()
        this.min = new Date("1995-06-16")
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
