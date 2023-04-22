// Store
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Create dispatch  and selector to use redux
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Props {
  errors: number;
  hits: number;
}

function PlayerInfo({ errors, hits }: Props) {
  const playerName = useAppSelector((state) => state.game.playerName);

  return (
    <div className="payer-info mb-4 md:mb-8 mt-8 bg-white shadow-sm border rounded-md p-4 w-full lg:w-3/5 m-auto">
      <div className="player-info__container">
        <div className="player-info__player flex justify-center items-center gap-6">
          <div className="player-info__player-avatar flex flex-col items-center px-6 border-r">
            <span
              className="h-14 w-14
                flex
                items-center
                justify-center
                rounded-full 
                bg-green-400
                text-4xl
                text-white
                font-bold
                select-none"
            >
              {playerName.charAt(0)}
            </span>
            <p className="text-slate-800 text-lg font-semibold capitalize">
              {playerName}
            </p>
          </div>
          <div className="player-info__player-scores flex flex-col gap-1">
            <div className="player-info__player-errors flex gap-3">
              <p className="text-lg ">Errores:</p>
              <span className="text-lg font-bold text-slate-800">{errors}</span>
            </div>
            <div className="player-info__player-hits flex gap-3">
              <p className="text-lg ">Aciertos:</p>
              <span className="text-lg font-bold text-slate-800">{hits}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerInfo;
