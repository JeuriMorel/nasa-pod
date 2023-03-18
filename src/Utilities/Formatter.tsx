const long_formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
})
const iso_formatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
})

function Formatter(date: Date, iso_format=false) {
    if (iso_format) return iso_formatter.format(date)

    return long_formatter.format(date)
}

export default Formatter
