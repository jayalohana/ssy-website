
import Description from "../components/Description";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recent from "../components/Recent";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero"
        heroImg="https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635abf4c2446c95a7c997c1a_horizontal%20(2).svg"
        title="Schizophrenia Society York"
        text = "We spread awareness and aim to humanize individuals diagnosed with schizophrenia."
        // buttonText = "Know More"
        // url = "/"
        // btnClass="show"
      ></Hero>
      {/* <div>
        <h1 className="title">Schizophrenia Society York</h1>
        <h2 className="info">We spread awareness and aim to humanize individuals diagnosed with schizophrenia.</h2>
        <button>Know More</button>
      </div> */}
      <Description></Description>
      <Recent></Recent>
      <Footer></Footer>
    </>
  );
}

export default Home;
