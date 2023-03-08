const formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
})

function Formatter(date: Date, format_type?: string) {
    if (format_type == "input") return date.toISOString().split("T")[0]

    return formatter.format(date)
}

export default Formatter
