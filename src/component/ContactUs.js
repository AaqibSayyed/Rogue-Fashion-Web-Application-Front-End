import { useState } from 'react'
import '../assets/css/aboutServicesContact.css'


function ContactUs() {
    let [input, setInput] = useState({
        name: '',
        email: '',
        concern: ''
    })

    let name, value;
    function getDetails(e) {
        name = e.target.name
        value = e.target.value
        setInput({ ...input, [name]: value })
    }

    function postDetails(e){
        e.preventDefault()
        alert("Thank you for contacting us, will be in touch with as soon as possible.")
        setInput({
            name: '',
            email: '',
            concern: ''
        })
    }


    return (
        <>
            <div id="about-contact-services-container">

                <div id="services-content"><h3 id="services-heading">Contact US</h3>
                    <form onSubmit={postDetails}>
                    <input type="text" name="name" placeholder='Name' value={input.name} onChange={getDetails} required />
                    <input type="email" name="email" placeholder='Email' value={input.email} onChange={getDetails} required />
                    <textarea name="concern" rows="4" cols="20" placeholder='Write Your Concern Here' value={input.concern}
                        onChange={getDetails}  required/>
                    <input type="submit" value='Submit' />
                    </form>

                </div>
                <div id="about-contact-services-pic"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4846171704894!2d72.88436397198275!3d19.086384512153817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3A0x9f9dc99c3119470a!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1690368674671!5m2!1sen!2sin" title='Our Store Location' id='iframe-map'></iframe></div>

            </div>

        </>
    )
}

export default ContactUs