import { Link } from 'react-router-dom'
import '../assets/css/index.css'

function Services() {
    return (
        <>

            <div id="services">

                <Link to='/womenproducts' style={{ display: " contents" }} id="clothLink">
                    <div id="women" className="serviceOut">
                        <div className="lable">
                            <h2>Women's Collection</h2>
                        </div>
                    </div>
                </Link>


                <Link to='/menproducts' style={{ display: " contents" }} id="clothLink">
                    <div id="men" className="serviceOut">
                        <div className="lable">
                            <h2>Men's Collection</h2>
                        </div>
                    </div>
                </Link>

                <Link to='/kidproducts' style={{ display: " contents" }} id="clothLink">
                    <div id="kids" className="serviceOut">
                        <div className="lable">
                            <h2>Kids's Collection</h2>
                        </div>
                    </div>
                </Link>
            </div>



        </>
    )
}

export default Services;