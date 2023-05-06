import classnames from "classnames";
import Image from "next/image";
import "./GameCard.scss";
import { Entry } from "@/app/game/models";

interface Props {
  card: Entry;
  onClick: Function;
  index: number;
  isDisabled: boolean;
  isInactive: boolean;
  isSelected: boolean;
}

function GameCard({
  card,
  onClick,
  index,
  isDisabled,
  isInactive,
  isSelected,
}: Props) {
  const handleClick = () => {
    // Validate if the the card is not selected or disabled for not execute onclick event
    !isSelected && !isDisabled && onClick(index);
  };

  return (
    <div
      className="board-game__card
      cursor-pointer
      transition
      ease-in-out
      delay-0
      hover:scale-110
      h-20 sm:h-36 md:h-40
      w-full sm:w-24 md:w-28
      "
      onClick={handleClick}
    >
      <div
        className={classnames(
          "board-game__card__container relative transition-all ease-in-out duration-500 w-full h-full",
          {
            active: isSelected,
            inactive: isInactive,
          }
        )}
      >
        <div
          className="board-game__card__front 
        text-slate-800 text-6xl
          font-semibold
        bg-green-400 
          select-none
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
