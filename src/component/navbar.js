import {Link, NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <>

            <nav id="navbar">
                
                <h1><Link to='/'>ZEN's</Link></h1>

                <ul>
                    <li><NavLink to='/' className="navlink">Home</NavLink></li>
                    <li><NavLink to='/about' className="navlink">About Us</NavLink></li>
                    <li><NavLink to='/contact' className="navlink">Contact Us</NavLink></li>
                    <li><NavLink to='/services' className="navlink">Services</NavLink></li>
                </ul>

                <Link to='/login'><button type="button" className="login join">Login</button></Link>
                <Link to='/registration'><button type="button" className="register join">Register</button></Link>

            </nav>

        </>
    )
}

export default Navbar