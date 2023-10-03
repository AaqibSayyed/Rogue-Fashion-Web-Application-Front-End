import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../assets/css/register.css'

function Register() {
    const navigate = useNavigate()
    let [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
    })

    let name, value;
    function getValues(e) {
        name = e.target.name
        value = e.target.value
        // console.log(e)
        setInput({ ...input, [name]: value })
    }


    async function postDetails(e) {
        e.preventDefault() // prevent a from from refresh when submitted 

        const { name, email, password } = input
        let input_values = JSON.stringify({
            user_name: name, user_email: email, user_password: password
        })


        const fetched_details = await fetch('/register', {
            method: "POST",
            headers: {
                "content-type": "application/JSON"
            },

            body: input_values

        }).catch((error) => { return { error } })

        // console.log(fetched_details)

        if (fetched_details.error) {
            alert(fetched_details.error)
        }

        const register_data = await fetched_details.json().catch((error) => { return { error } })

        // console.log(register_data)

        if (register_data.error) {
            alert(register_data.error)
        }
        else {
            alert(`${register_data.data}. Click on OK to login.`)
            navigate("/login")
        }

    }



    return (
        <>

            <div id="backgroundImage">
                <div id="register">
                    <div id="zen"><h2><Link to='/'>ZEN's</Link></h2></div>
                    <div id="registerform">
                        <form method='POST'>
                            <input type="text" name="name" value={input.name} onChange={getValues} placeholder="Name" required />
                            <input type="email" name="email" value={input.email} onChange={getValues} placeholder="Email Address" required />
                            <input type="password" name="password" value={input.password} onChange={getValues} placeholder="Password" required />
                            <input type="submit" value="Sign Up" onClick={postDetails} />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register;


