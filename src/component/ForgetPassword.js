import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/forgetPassword.css'

const ForgetPassword = () => {
    let navigate = useNavigate()

    let [input, setInput] = useState({
        email: ''
    });

    let name, value;
    function getDetails(e) {
        name = e.target.name
        value = e.target.value
        setInput({ [name]: value })
    }

    async function postDetails(e) {
        e.preventDefault()
        let fetched_details = await fetch('/forgetpassword', {
            method: "post",
            headers: { "content-type": "application/JSON" },
            body: JSON.stringify({
                user_email: input.email
            })
        }).catch((error) => { return { error } })


        if (!fetched_details || (fetched_details && fetched_details.error)) {
            alert(fetched_details.error)
        }

        let data = await fetched_details.json().catch((error) => { return { error } })
        if (!data || (data && data.error)) {
            alert(data.error)
        }

        else {
            alert(data.data)
            navigate("/resetpassword")
        }

    }


    return (
        <>

            <div id='forget-pass-container'>
                <div id="form-layout-center">
                    <div id="inside-heading"><h3>Forgot Password</h3></div>
                    <form method='post' id="form-elemnts">
                        <input type='email' name='email' values={input.email} placeholder='Email' onChange={getDetails} required />
                        <input type='submit' value="Next" onClick={postDetails} />

                    </form>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword