import { adjustDate } from "./DateHandler"

const formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
})

function Formatter(date: Date, iso_format=false) {
    if (iso_format) return formatAsISO(date)

    return formatter.format(date)
}

function formatAsISO(date: Date) {
    return `${date.getFullYear()}-${padDate(date.getMonth()+1)}-${padDate(date.getDate())}`
}

function padDate(date: number): string {
    return date.toString().padStart(2, '0')
}

export default Formatter
