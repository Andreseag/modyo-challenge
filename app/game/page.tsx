"use client";
import { useEffect, useState } from "react";
import GameBoard from "@/app/game/components/GameBoard/GameBoard";
import PlayerInfo from "@/app/game/components/PlayerInfo/PlayerInfo";
import { getAnimals } from "./services";
import { Animals } from "./models";
import GameWinnerModal from "@/app/game/components/GameWinnerModal/GameWinnerModal";

function Page() {
  const [animals, setAnimals] = useState<Animals>();
  const [score, setScore] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [hits, setHits] = useState<number>(0);
  const [showWinner, setShowWinner] = useState(false);
  const [starGame, setStarGame] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>("");

  useEffect(() => {
    const fetchAnimals = async () => {
      const animalsResponse = await getAnimals();
      setAnimals(animalsResponse);
    };
    fetchAnimals();
  }, []);

  const resetScores = () => {
    setScore(0);
    setErrors(0);
    setHits(0);
  };

  const resetShowWinner = () => {
    setShowWinner(false);
  };

  return (
    <>
      <PlayerInfo errors={errors} hits={hits} />
      {animals && (
        <GameBoard
          entries={animals.entries}
          setScore={setScore}
          setErrors={setErrors}
          setHits={setHits}
          setShowWinner={setShowWinner}
          starGame={starGame}
          setStarGame={setStarGame}
        />
      )}
      <div className="m-auto mt-4 w-3/5 bg-white p-4 border shadow-sm rounded-md">
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
        />
      )}
    </>
  );
}

export default Page;
