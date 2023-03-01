function DateInput() {
    return (
        <>
            <label htmlFor="photo-search">Search date:</label>

            <input
                type="date"
                id="photo-search"
                name="trip-start"
                value="2018-07-22"
                min="1995-06-16"
                max="2018-12-31"
            ></input>
        </>
    )
}

export default DateInput
