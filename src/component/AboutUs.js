import aboutUsLogo from '../assets/images/hannah-morgan-ycVFts5Ma4s-unsplash.jpg'
import '../assets/css/aboutServicesContact.css'


function AboutUs() {

    return (
        <>

            <div id="about-contact-services-container">

                <div id="about-contact-services-content"><h3 id="about-contact-services-heading">About Us</h3><span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi nobis rerum consequatur modi
                    aspernatur saepe quas commodi aut distinctio et laboriosam animi exercitationem at tempore molestiae officia,
                    laudantium impedit culpa laborum! Exercitationem recusandae, voluptas tempore ut quo repellendus ipsam totam, iure
                    modi temporibus numquam?</span></div>
                <div id="about-contact-services-pic"><img src={aboutUsLogo} alt="Our Store" id="about-contact-services-img"></img></div>

            </div>

        </>
    )
}

export default AboutUs