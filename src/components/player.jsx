import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(event) => {
          setPlayerName(event.target.value);
        }}
      />
    );
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button 
        onClick={() => {
          setIsEditing((editing) => !editing);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
