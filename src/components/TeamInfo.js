import "./TeamInfo.css";
import RecentData from "./RecentData";
import Event1 from "../assests/ssy1.jpg";
import Event2 from "../assests/ssy5.jpg";
import Event3 from "../assests/ssy3.jpg";

function TeamInfo() {
  return (
    <div className="team">
      <h1> Team Members </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit
      </p>
      <div className="teamcard">
        <RecentData
          image={Event1}
          heading={"Founder"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event2}
          heading={"President"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event3}
          heading={"Vice President Operations"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />
      </div>

      <div className="teamcard">
        <RecentData
          image={Event1}
          heading={"Vice President Marketing"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event2}
          heading={"Director of Events"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event3}
          heading={"Director of Events"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />
      </div>

      <div className="teamcard">
        <RecentData
          image={Event1}
          heading={"Director of Marketing"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event2}
          heading={"Director of Marketing"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event3}
          heading={"Director of External Affairs"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />
      </div>

      <div className="teamcard">
        <RecentData
          image={Event1}
          heading={"Director of External Affairs"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event2}
          heading={"Director of Finance"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />

        <RecentData
          image={Event3}
          heading={"Adminstrative Associate"}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
        velit"
        />
      </div>

    </div>
  );
}

export default TeamInfo;
