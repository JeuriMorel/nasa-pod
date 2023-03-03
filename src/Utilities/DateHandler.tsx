export class DateHandler {
    today: Date
    current: Date
    max: Date
    min: Date

    constructor() {
        this.today = new Date()
        this.current = new Date()
        this.max = new Date()
        this.min = new Date("1995-06-16")
    }
}

export function isCurrentMinOrMax(
    date_handler: DateHandler,
    value: keyof DateHandler
): boolean {
    return date_handler.current.getTime() == date_handler[value].getTime()
}
