import Image from "next/image";
// Store
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setPlayerName } from "@/store/gameSlice";

// Create dispatch  and selector to use redux
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Props {
  score: number;
  resetScores: Function;
  resetShowWinner: Function;
  setStarGame: React.Dispatch<React.SetStateAction<boolean>>;
  playerName: string;
}

function GameWinnerModal({
  score,
  resetScores,
  resetShowWinner,
  setStarGame,
}: Props) {
  const dispatch = useAppDispatch();
  const playerName = useAppSelector((state) => state.game.playerName);

  const restartGame = () => {
    resetScores();
    resetShowWinner();
    setStarGame(true);
  };

  const restartPlayer = () => {
    resetScores();
    resetShowWinner();
    dispatch(setPlayerName(""));
    // resetPlayerName("");
    setStarGame(true);
  };

  return (
    <div
      className="game-winner-modal
      fixed
      inset-0 
      bg-gray-600 
      bg-opacity-50 
      overflow-y-auto 
      h-full 
      w-full
      flex"
    >
      <div
        className="game-winner-modal__container text-center
        bg-white
          w-1/2
          m-auto
          rounded-md
          p-8
          flex
          flex-col
          justify-center
          items-center
          "
      >
        <Image src="/descarga.svg" alt="descarga" width="180" height="180" />
        <span className="text-2xl mb-2 font-bold text-slate-800">
          ¡Felicitaciones!
        </span>
        <p className="mb-4 text-slate-600 ">
          <span className="font-bold">{playerName}</span> has completado
          correctamente el juego
        </p>
        <div className="score bg-slate-800 text-lg text-white py-2 px-8 rounded-3xl mb-4">
          Score: <span className="font-bold text-green-400">{score}</span>
        </div>
        <button
          className="mb-3 h-12 text-lg  text-slate-800 bg-green-400 hover:bg-green-500 rounded w-full"
          type="button"
          onClick={restartGame}
        >
          Reiniciar juego
        </button>
        <button
          className=" text-lg h-12  text-slate-800 border border-slate-800 bg-white hover:bg-slate-800 hover:text-white rounded w-full"
          type="button"
          onClick={restartPlayer}
        >
          Cambiar de jugador
        </button>
      </div>
    </div>
  );
}

export default GameWinnerModal;
