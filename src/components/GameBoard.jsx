// import {useState} from 'react';

export default function GameBoard({onSelectSquare,board/*turns*/ /*activePlayerSymbol*/}) {
  
  // const [gameBoard,setGameBoard]=useState(initialGameBoard);
  // function handleSquareClick(rowIndex,colIndex){
  //   setGameBoard((prevGameBoard)=>{
  //     const updatedGameBoard=[...prevGameBoard.map((innerArray=>[...innerArray]))];
  //     updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare();
  // };
  return (
    <ol id="game-board">
      {/*gameBoard*/board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={/*()=>{handleSquareClick(rowIndex,colIndex)}*/()=>{onSelectSquare(rowIndex,colIndex)}} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
          ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
