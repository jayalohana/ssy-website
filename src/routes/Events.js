import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/ssy2.jpg"

import React from "react";
import Recent from "../components/Recent";
function Events () {
    return(
        <>
         <Navbar></Navbar>
      <Hero
               cName="hero-mid"
               heroImg={AboutImg}
               title="Events"
               btnClass="hide" 
      ></Hero>
      <Recent></Recent>
        </>
    )

}



export default Events;