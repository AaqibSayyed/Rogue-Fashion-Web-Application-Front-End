import '../assets/css/index.css'

function HomeSection() {

    return (
        <>
            <div className="home">
                <div class="wrapper">
                    <div class="wrapper-holder">
                        <div id="slider-img-1"></div>
                        <div id="slider-img-2"></div>
                        <div id="slider-img-3"></div>
                        <div id="slider-img-4"></div>
                    </div>
                </div>
                <div class="button-holder">
                    <a href="#slider-img-1" className="button" ></a>
                    <a href="#slider-img-2" className="button"></a>
                    <a href="#slider-img-3" className="button"></a>
                    <a href="#slider-img-4" className="button"></a>
                </div>

            </div>
        </>
    )

}

export default HomeSection