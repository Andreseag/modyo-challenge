import Link from "next/link";

function GameInit() {
  return (
    <>
      <div className="home m-auto w-2/3 flex flex-col items-center justify-center mt-40 gap-12">
        <div className="game-head flex flex-col items-center">
          <img src="./logo.svg" alt="logo" />
          <h1 className="text-4xl font-bold text-slate-800">
            <span className="text-green-500">Memory</span>Game
          </h1>
        </div>
        <Link href="/game">
          <button
            className="h-16 w-80 font-medium text-lg text-slate-800 bg-green-400 hover:bg-green-500 rounded"
            type="button"
          >
            Empezar
          </button>
        </Link>
      </div>
    </>
  );
}

export default GameInit;
