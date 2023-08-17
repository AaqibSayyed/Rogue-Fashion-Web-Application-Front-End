import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const ResetPassword = () => {
    let navigate= useNavigate()

    let [input, setInput] = useState({
        email:'',
        otp: '',
        password: '',
        c_password:' '
    })

    let name, value;
    function getDetails(e){
        name=e.target.name
        value=e.target.value
        setInput({...input, [name]:value})
        console.log(input)
    }


    async function postDetails(e){
        e.preventDefault()
        let number_opt = Number.parseInt(input.otp)
        console.log(typeof number_opt)

        let fetched_details = await fetch('/resetpassword',{
            method: 'PUT',
            headers: {"content-type": "application/JSON"},
            body: JSON.stringify({
                user_email: input.email,
                otp: input.otp,
                new_password: input.password,
                confirm_password: input.c_password
            })
             
        }).catch((error)=>{return {error}})

        console.log(fetched_details)

        if (!fetched_details || (fetched_details && fetched_details.error)){
            alert(fetched_details.error)
        }
        
        let data = await fetched_details.json().catch((error)=>{return {error}})
        console.log(data)

        if (!data || (data && data.error)){
            alert(data.error)
        }
        else{
            alert("Yout password has been reset now, kindly click on OK to login.")
            navigate('/login')
        }
    }

  return (

 
    <>
    <div id="reset-heading-container"><h3>Reset Password Form</h3></div>

    <div id='reset-pass-container'>
        <div id="reset-form-layout-center">
            <form method='post' id="reset-form-elemnts">
                <input type='email' name='email' values={input.email} placeholder='Confirm Email' onChange={getDetails} required />
                <input type='text' name='otp' values={input.otp} placeholder='OTP' onChange={getDetails} required />
                <input type='password' name='password' values={input.password} placeholder='Password' onChange={getDetails} required />
                <input type='password' name='c_password' values={input.c_password} placeholder='Confirm Password' onChange={getDetails} required />
                <input type='submit' value="Next" onClick={postDetails} />

            </form>
        </div>
    </div>

</>
  )
}

export default ResetPassword