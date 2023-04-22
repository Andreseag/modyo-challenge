import React, { useEffect, useRef, useState } from "react";

// Store
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Models
import { Entry } from "@/app/game/models";

// Domain functions
import { generateShuffleCards } from "@/domain/cards";

// Components
import GameCard from "@/app/game/components/GameCard/GameCard";

// Create dispatch  and selector to use redux
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Props {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setErrors: React.Dispatch<React.SetStateAction<number>>;
  setHits: React.Dispatch<React.SetStateAction<number>>;
  setShowWinner: React.Dispatch<React.SetStateAction<boolean>>;
  starGame: boolean;
  setStarGame: React.Dispatch<React.SetStateAction<boolean>>;
}

function GameBoard({
  setScore,
  setErrors,
  setHits,
  setShowWinner,
  starGame,
  setStarGame,
}: Props) {
  // const dispatch = useAppDispatch();
  const gameCards = useAppSelector((state) => state.game.gameCards);
  const [cards, setCards] = useState<Entry[]>(() =>
    generateShuffleCards(gameCards.entries)
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
    if (Object.keys(clearedCards).length === gameCards.entries.length) {
      setShowWinner(true);
    }
  };

  // Check if both the cards have same uuid and inactive cards.
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
    // restore selected cards after a 500ms duration
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
    setCards(generateShuffleCards(gameCards.entries));
    // Reset start game
    setStarGame(false);
  };

  // Watch if the startGame is true and restart board
  useEffect(() => {
    starGame && restartBoard();
  }, [starGame]);

  // Watch if openCards have 2 elements and execute evaluate function
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
    <div className="game-board m-auto w-full lg:w-3/5 bg-white p-4 border shadow-sm rounded-md">
      <div className="board-game__container grid grid-cols-3 sm:grid-cols-6 grid-rows-6 sm:grid-rows-3 gap-3">
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
