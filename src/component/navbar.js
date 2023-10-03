import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userLogout } from '../reduxToolkit/slices/userSlice'
import '../assets/css/index.css'

function Navbar() {
    const { user_login, userDetails } = useSelector((state) => { return state.user })
    const dispatch = useDispatch()
    // console.log(user_login, userDetails)

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

                {(!user_login) ?
                    <>
                        <Link to='/login'><button type="button" className="login join">Login</button></Link>
                        <Link to='/registration'><button type="button" className="register join">Register</button></Link>
                    </> :
                    <div id='user-logged-in'>
                        <select id='user-logged-in-dropdown' onChange={() => { dispatch(userLogout(userDetails.token)) }}>
                            <option hidden selected disabled>WELCOME, {userDetails.name}</option>
                            <option value='logout' id='user-logged-in-dropdown' >Logout</option>
                        </select></div>
                }
            </nav>

        </>
    )
}

export default Navbar