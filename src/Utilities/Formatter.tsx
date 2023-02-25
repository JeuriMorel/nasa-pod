const formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "GMT",
})


function Formatter(date: Date) {
  return (
    formatter.format(date)
  )
}

export default Formatter