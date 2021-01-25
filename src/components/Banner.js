
function Banner() {
    return (
        <div className="banner">
            <div className="banner-description">
                <h2><img src="/logo_black.png" alt="cat wiki"/></h2>
                <div>
                    <p>Get to know more about your</p>
                    <p>cat breed</p>
                </div>

                <div className="input-search">
                    <input type="search" name="search" placeholder="Enter your breed"/>
                    <span className="icon-search"><i className="fas fa-search"></i></span>
                </div>
            </div>
            <div className="banner-image">
                <img src="assets/HeroImagelg.png" alt="hero"/>
            </div>
        </div>
    )
}

export default Banner
