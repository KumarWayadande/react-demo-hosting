const GameOver = ({ winner , onRestart, winnerName}) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{!winner ? "Match Draw" :  `${winnerName} Won!`}</p>
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};


export default GameOver;