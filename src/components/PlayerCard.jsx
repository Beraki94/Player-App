import "./PlayerCard.css";

const PlayerCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="card--img"/>
      <div className="card--name"><h3>{props.name}</h3></div>
      <hr />
      <div className="card--info">
        <p><span>Team: </span>{props.team}</p>
        <p><span>Nationality: </span>{props.nationality}</p>
        <p><span>Jersey Number: </span>{props.jerseyNumber}</p>
        <p><span>Age: </span>{props.age}</p>
      </div>
    </div>
  )
}

export default PlayerCard