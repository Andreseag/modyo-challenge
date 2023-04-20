"use client";
import { useEffect, useState } from "react";
import GameBoard from "@/components/GameBoard/GameBoard";
import PlayerInfo from "@/components/PlayerInfo/PlayerInfo";
import { getAnimals } from "./services";
import { Animals } from "./models";

function Page() {
  const [animals, setAnimals] = useState<Animals>();
  const [score, setScore] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [hits, setHits] = useState<number>(0);

  useEffect(() => {
    const fetchAnimals = async () => {
      const animalsResponse = await getAnimals();
      setAnimals(animalsResponse);
    };
    fetchAnimals();
  }, []);

  return (
    <>
      <PlayerInfo errors={errors} hits={hits} />
      {animals && (
        <GameBoard
          entries={animals.entries}
          setScore={setScore}
          setErrors={setErrors}
          setHits={setHits}
        />
      )}
      <div className="m-auto mt-4 w-3/5 bg-white p-4 border shadow-sm rounded-md">
        <div className="player-info__player-total flex gap-3 text-2xl">
          <p className="text-slate-800">Score:</p>
          <span className="font-bold text-slate-800">{score}</span>
        </div>
      </div>
    </>
  );
}

export default Page;
