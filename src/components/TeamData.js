import "./TeamInfo.css";

function TeamData(props){
    return(
        <div className="team-card">
            <div className="team-image">
                <img src= {props.image} alt="image"></img>
            </div>
            <h4> {props.heading}</h4>
            <p> {props.text}</p>
        </div>
    )
}

export default TeamData;