import Player from "./components/player"
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol>
          <Player initialName="Player 1" symbol="x"/>
          <Player initialName ="Player 2" symbol="0"/>
          
        </ol>
      </div>
    </main>
  )
}

export default App
