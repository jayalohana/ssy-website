import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/ssy4.jpg"
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
 
function Contact () {
    return(
        <>
         <Navbar></Navbar>
      {/* <Hero
               cName="hero-mid"
               heroImg={AboutImg}
               title="Contact Us"
               btnClass="hide" 
      ></Hero> */}
      <ContactPage></ContactPage>
      <Footer></Footer>
    </>
    ) 

}



export default Contact;