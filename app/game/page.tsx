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
    <div className="game mx-4">
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
          <div className="m-auto mt-4 w-full lg:w-3/5 bg-white p-4 border shadow-sm rounded-md">
            <div className="player-info__player-total flex gap-3 text-2xl">
              <p className="text-slate-800">Score:</p>
              <span className="font-bold text-slate-800">{score}</span>
            </div>
          </div>
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
