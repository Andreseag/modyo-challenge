function GameHead() {
  return (
    <div className="game-head flex flex-col items-center">
      <img src="./logo.svg" alt="logo" />
      <h1 className="text-4xl font-bold text-slate-800">
        <span className="text-green-500">Memory</span>Game
      </h1>
    </div>
  );
}

export default GameHead;
