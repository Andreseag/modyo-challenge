import classnames from "classnames";
import Image from "next/image";
import "./GameCard.scss";

// interface Props {
//   card: string;
// }

function GameCard({
  card,
  onClick,
  index,
  isDisabled,
  isInactive,
  isFlipped,
}: any) {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

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
      onClick={handleClick}
    >
      <div
        className={classnames(
          "board-game__card__container relative transition-all ease-in-out duration-500 w-full h-full",
          {
            active: isFlipped,
            inactive: isInactive,
          }
        )}
      >
        <div
          className="board-game__card__front 
        text-slate-800 text-6xl
          font-semibold
        bg-green-400 
          "
        >
          ?
        </div>
        <div className="board-game__card__back bg-red-700">
          <Image
            className="object-cover h-full w-full rounded-md"
            src={card.fields.image.url}
            alt={card.fields.image.title}
            width="112"
            height="160"
          />
        </div>
      </div>
    </div>
  );
}

export default GameCard;
