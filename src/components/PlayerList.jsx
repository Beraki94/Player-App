import PlayerCard from './PlayerCard';
import PlayersData from './PlayersData';

const PlayerList = () => {
  const playerElements = PlayersData.map(players => {
    return(
      <PlayerCard 
      img = {players.imageUrl}
      name = {players.name}
      team = {players.team}
      nationality = {players.nationality}
      jerseyNumber = {players.jerseyNumber}
      age = {players.age}
    />
    )
  })
  return (
    <div className='section'>
     {playerElements}
    </div>
  )
}

export default PlayerList