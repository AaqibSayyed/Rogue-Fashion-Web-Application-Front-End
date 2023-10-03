import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { userData } from '../reduxToolkit/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import '../assets/css/login.css'

function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const { isloading, user_login, userDetails } = useSelector((state) => { return state.user })

    const my_user = [{ userLoggedIn: user_login }, userDetails]
    // console.log('my_user', my_user)

    localStorage.setItem("UserLoggedIn", JSON.stringify(my_user))
    // setUserLogin (JSON.parse(localStorage.getItem('UserLoggedIn')))

    useEffect(() => {
        if (user_login) {
            navigate('/')
        }
    })




    let [input, setInput] = useState(
        {
            eamil: '',
            password: ''
        }
    )


    let name, value;

    function getValues(e) {
        name = e.target.name
        value = e.target.value
        setInput({ ...input, [name]: value })
        // console.log(input)

    }



    function postDetails(e) {
        e.preventDefault()
        dispatch(userData(input))

    }


    return (
        <>

            <div id="backgroundImageLogin">
                <div id="formcontainer">
                    <div id="loginForm">
                        <div id="zenLogin"><Link to='/login'>ZEN's</Link></div>
                        <form id="login" method="post">
                            <input type="email" name="eamil" value={input.eamil} onChange={getValues} placeholder="Email Address" required />
                            <input type="password" name="password" value={input.password} onChange={getValues} placeholder="Password" required />
                            <input type="submit" value="LOGIN" onClick={postDetails} />
                        </form>
                        <p id="forgetPassword"><strong><Link to='/forgetpassword'>Forgetten Password</Link></strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;