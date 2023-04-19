import GameCard from "@/components/GameCard/GameCard";

function GameBoard() {
  return (
    <div className="game-board m-auto w-3/5 bg-white p-4 border shadow-sm rounded-md">
      <div className="board-game__container grid grid-cols-6 gap-3">
        {"?"
          .repeat(18)
          .split("")
          .map((card: string, index) => (
            <GameCard key={index} card={card} />
          ))}
      </div>
    </div>
  );
}

export default GameBoard;
