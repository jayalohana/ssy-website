import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/ssy.jpg"

function About () {
    return(
        <>
       <Navbar></Navbar>
      <Hero
               cName="hero-mid"
               heroImg={AboutImg}
               title="About Our Club"
               btnClass="hide" 
      ></Hero>
        </>
    )

}

export default About;

// text = "We spread awareness and aim to humanize individuals diagnosed with schizophrenia."
        // buttonText = "Know More"
        // url = "/"
        // btnClass="show"