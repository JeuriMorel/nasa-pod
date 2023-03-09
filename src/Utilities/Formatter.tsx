const formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
})

function Formatter(date: Date, iso_format=false) {
    if (iso_format) return formatAsISO(date)
    // if (format_type == "input") return date.toISOString().split("T")[0]

    return formatter.format(date)
}

function formatAsISO(date: Date) {
    return `${date.getFullYear()}-${padDate(date.getMonth()+1)}-${padDate(date.getDate())}`
}

function padDate(date: number): string {
    return date.toString().padStart(2, '0')
}

export default Formatter
