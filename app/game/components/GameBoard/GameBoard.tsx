import { Entry } from "@/app/game/models";
import GameCard from "@/app/game/components/GameCard/GameCard";
import { shuffleCards } from "@/domain/animals";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  entries: Entry[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setErrors: React.Dispatch<React.SetStateAction<number>>;
  setHits: React.Dispatch<React.SetStateAction<number>>;
  setShowWinner: React.Dispatch<React.SetStateAction<boolean>>;
  starGame: boolean;
  setStarGame: React.Dispatch<React.SetStateAction<boolean>>;
}

function GameBoard({
  entries,
  setScore,
  setErrors,
  setHits,
  setShowWinner,
  starGame,
  setStarGame,
}: Props) {
  const [cards, setCards] = useState<Entry[]>(() =>
    shuffleCards(entries.concat(entries))
  );
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<any>({});
  const [disableCards, setDisableCards] = useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>();

  // Toggle state to boolean state disableCards
  const disableCardsToggle = () => {
    setDisableCards((disable) => !disable);
  };

  // Validate of the game is ended
  const validateGameCompletion = () => {
    if (Object.keys(clearedCards).length === entries.length) {
      setShowWinner(true);
    }
  };

  // Check if both the cards have same type. If they do, mark them inactive
  const evaluate = () => {
    const [first, second] = openCards;
    disableCardsToggle();
    if (cards[first].fields.image.uuid === cards[second].fields.image.uuid) {
      setClearedCards((prev: {}) => ({
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
      // Add index to card to openCards state
      setOpenCards((prev: number[]) => [...prev, index]);
      // Add move to moves counter
      setScore((moves: number) => moves + 1);
      // Disable cards
      disableCardsToggle();
    }

    if (openCards.length === 0) {
      clearTimeout(timeout.current);
      // Add index to card to openCards state
      setOpenCards([index]);
    }
  };

  // Validate if the card is selected
  const checkIsSelected = (index: number) => {
    return openCards.includes(index);
  };

  // Validate if the card exist in inactive cards
  const checkIsInactive = (card: Entry) => {
    return Boolean(clearedCards[card.fields.image.uuid]);
  };

  // restart board
  const restartBoard = () => {
    setClearedCards({});
    setOpenCards([]);
    setDisableCards(false);
    // Set a shuffled deck of cards
    setCards(shuffleCards(entries.concat(entries)));
    // Reset start game
    setStarGame(false);
  };

  useEffect(() => {
    starGame && restartBoard();
  }, [starGame]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    validateGameCompletion();
  }, [clearedCards]);

  return (
    <div className="game-board m-auto w-3/5 bg-white p-4 border shadow-sm rounded-md">
      <div className="board-game__container grid grid-cols-6 grid-rows-3 gap-3">
        {cards.map((card: Entry, index: number) => (
          <GameCard
            key={index}
            index={index}
            card={card}
            isDisabled={disableCards}
            isInactive={checkIsInactive(card)}
            isSelected={checkIsSelected(index)}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;