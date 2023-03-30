import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/Team.jpg"
import TeamInfo from "../components/TeamInfo"

import React from "react";
function Team () {
    return(
        <>
         <Navbar></Navbar>
      {/* <Hero
               cName="hero-mid"
               heroImg={AboutImg}
               title="Team"
               btnClass="hide" 
      ></Hero> */}

      <TeamInfo/>
        </>
    )

}



export default Team;