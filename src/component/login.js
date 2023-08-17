import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Login() {

    let [input, setInput] = useState(
        {
            eamil: '',
            password: ''
        }
    )

    let navigate = useNavigate()

    let name, value;

    function getValues(e) {
        name = e.target.name
        value = e.target.value
        setInput({ ...input, [name]: value })
        // console.log(input)

    }


    async function postDetails(e) {
        e.preventDefault()
        let fetched_details = await fetch('/login', {
            method: 'post',
            headers: {
                "content-type": "application/JSON"
            },

            body: JSON.stringify({
                user_email: input.eamil,
                user_password: input.password
            })

        }).catch((error) => { return { error } })

        if (fetched_details.error) {
            alert(fetched_details.error)
        }

        let data = await fetched_details.json().catch((error) => { return { error } })

        if (!data || (data && data.error)) {
            alert(data.error)
        }
        else {
            alert(data.data)
        }
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