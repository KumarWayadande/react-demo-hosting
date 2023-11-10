import { useState } from "react";

const Player = ({ name, symbol, isActive, handleNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const handleClick = () => {
    setIsEditing((prevValue) => !prevValue);
  };
  const handleChange = (event) => {
        setPlayerName(event.target.value);
  };

  let editablePlayerName = !isEditing ? (
    <span className="player-name">{playerName}</span>
  ) : (
    <input required value={playerName} onChange={handleChange}/>
  );

  let button = !isEditing ? (
    <button onClick={handleClick}>Edit</button>
  ) : (
    <button onClick={() => {handleClick(); handleNameChange(playerName, symbol);}}>Save</button>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {button}
    </li>
  );
};

export default Player;
