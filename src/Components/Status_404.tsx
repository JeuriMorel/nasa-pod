function Status_404() {
    return (
        <div className="error-404">
            <img src="assets/404_error_img.jpg" alt="" />
            <div className="error-overlay">
                <p className="error-message">
                    <span>404</span>There doesn't seem to be media available for
                    this date. Please select a different one.
                </p>
            </div>
        </div>
    )
}

export default Status_404
