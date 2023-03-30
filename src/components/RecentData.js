import "./Recent.css";

function RecentData(props){
    return(
        <div className="event-card">
            <div className="event-image">
                <img src= {props.image} alt="image"></img>
            </div>
            <h4> {props.heading}</h4>
            <p> {props.text}</p>
        </div>
    )
}

export default RecentData;