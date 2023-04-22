"use client";
import { useEffect, useState } from "react";
// Store
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setGameCards } from "@/store/gameSlice";

// Services
import { getAnimals } from "./services";

// Models
import { GameCards } from "./models";

// Create dispatch  and selector to use redux
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Components
import GameBoard from "@/app/game/components/GameBoard/GameBoard";
import PlayerInfo from "@/app/game/components/PlayerInfo/PlayerInfo";
import GameWinnerModal from "@/app/game/components/GameWinnerModal/GameWinnerModal";
import AddPlayerNameModal from "./components/AddPlayerNameModal/AddPlayerNameModal";
import Score from "./components/Score/Score";

function Page() {
  const dispatch = useAppDispatch();

  const playerName = useAppSelector((state) => state.game.playerName);
  const [animals, setAnimals] = useState<GameCards>();
  const [score, setScore] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [hits, setHits] = useState<number>(0);
  const [showWinner, setShowWinner] = useState(false);
  const [starGame, setStarGame] = useState<boolean>(false);

  const resetScores = () => {
    setScore(0);
    setErrors(0);
    setHits(0);
  };

  const resetShowWinner = () => {
    setShowWinner(false);
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      const animalsResponse = await getAnimals();
      dispatch(setGameCards(animalsResponse));
      setAnimals(animalsResponse);
    };
    fetchAnimals();
  }, []);

  return (
    <div className="game m-auto w-full mx-4 lg:w-4/5 xl:w-3/4 max-w-4xl">
      {!playerName && <AddPlayerNameModal />}
      {playerName && (
        <>
          <PlayerInfo errors={errors} hits={hits} />
          {animals && (
            <GameBoard
              setScore={setScore}
              setErrors={setErrors}
              setHits={setHits}
              setShowWinner={setShowWinner}
              starGame={starGame}
              setStarGame={setStarGame}
            />
          )}
          <Score score={score} />
          {showWinner && (
            <GameWinnerModal
              score={score}
              resetScores={resetScores}
              resetShowWinner={resetShowWinner}
              setStarGame={setStarGame}
              playerName={playerName}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Page;
