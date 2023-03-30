import Descrip1 from "../assests/ssy.jpg"
import Descrip2 from "../assests/ssy.jpg"
import Descrip3 from "../assests/ssy.jpg"
import Descrip4 from "../assests/ssy.jpg"
import "./DescriptionStyles.css"

const Description = () => {
  return (
    <div className="description">
      <h1>What Are We</h1>
      <p>Schizophrenia........</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Description about us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            risus velit. Etiam ornare, nibh eget volutpat rhoncus, sem quam
            semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
            nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
            nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
            faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
            Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc.
          </p>
        </div>
        <div className="image">
            <img alt="intro" src={Descrip1}></img>
            <img alt="intro" src={Descrip2}></img>
        </div>
      </div>
      <div className="second-des">
        <div className="des-text">
            <h2> What we Stand For </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            risus velit. Etiam ornare, nibh eget volutpat rhoncus, sem quam
            semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
            nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
            nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
            faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
            Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc.
            </p>
        </div>
        <div className="image2">
            <img alt="intro" src={Descrip3}></img>
            <img alt="intro" src={Descrip4}></img>
        </div>
      </div>
    </div>
  );
};

export default Description;
