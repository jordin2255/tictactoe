export default function Log({ gameLog }) {
  return (
    <ol id="log">
      {gameLog.map(({ square, player }) => (
        <li key={`${square.row}${square.col}`}>
          {player} selected {square.row},{square.col}{" "}
        </li>
      ))}
    </ol>
  );
}
