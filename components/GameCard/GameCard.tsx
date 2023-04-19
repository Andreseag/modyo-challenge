import "./GameCard.scss";

interface Props {
  card: string;
}

function GameCard({ card }: Props) {
  return (
    <div
      className="board-game__card
      cursor-pointer
      transition
      ease-in-out
      delay-0
      hover:scale-110
      h-40 w-28
      "
    >
      <div className="board-game__card__container relative transition-all ease-in-out duration-500 w-full h-full">
        <div
          className="board-game__card__front 
        text-white text-6xl 
        bg-purple-700 
          "
        >
          {card}
        </div>
        <div
          className="board-game__card__back 
          bg-orange-500
          "
        >
          Lorem ipsum, dolor sit amet
        </div>
      </div>
    </div>
  );
}

export default GameCard;
