import "./Recent.css";
import RecentData from "./RecentData";
import Event1 from "../assests/ssy1.jpg";
import Event2 from "../assests/ssy5.jpg";
import Event3 from "../assests/ssy3.jpg";

function Recent() {
  return (
    <div className="recent">
      <h1> Recent Events</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit
      </p>
      <div className="eventcard">
        <RecentData
          image={Event1}
          heading={"First Event"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event2}
          heading={"Second Event"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event3}
          heading={"Third Event"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />
      </div>
    </div>
  );
}

export default Recent;

