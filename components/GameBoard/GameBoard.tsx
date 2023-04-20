import { Entry } from "@/app/game/models";
import GameCard from "@/components/GameCard/GameCard";
import { shuffleCards } from "@/domain/animals";
import { useEffect, useRef, useState } from "react";

function GameBoard({ entries, setScore, setErrors, setHits }: any) {
  const [cards, setCards] = useState<Entry[]>(() =>
    shuffleCards(entries.concat(entries))
  );
  const [openCards, setOpenCards] = useState<any>([]);
  const [clearedCards, setClearedCards] = useState<any>({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const timeout = useRef<any>(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  // Check if both the cards have same type. If they do, mark them inactive
  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].fields.image.uuid === cards[second].fields.image.uuid) {
      setClearedCards((prev: any) => ({
        ...prev,
        [cards[first].fields.image.uuid]: true,
      }));
      setOpenCards([]);
      setHits((hits: number) => hits + 1);
      return;
    } else {
      setErrors((errors: number) => errors + 1);
    }
    // Flip cards after a 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev: any) => [...prev, index]);
      // Add move to moves counter
      setScore((moves: number) => moves + 1);
      disable();
    }

    if (openCards.length === 0) {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  const checkIsFlipped = (index: number) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card: Entry) => {
    return Boolean(clearedCards[card.fields.image.uuid]);
  };

  return (
    <div className="game-board m-auto w-3/5 bg-white p-4 border shadow-sm rounded-md">
      <div className="board-game__container grid grid-cols-6 grid-rows-3 gap-3">
        {cards.map((card: Entry, index) => (
          <GameCard
            key={index}
            index={index}
            card={card}
            isDisabled={shouldDisableAllCards}
            isInactive={checkIsInactive(card)}
            isFlipped={checkIsFlipped(index)}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
