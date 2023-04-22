import classNames from "classnames";
import { useState } from "react";
// Store
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setPlayerName } from "@/store/gameSlice";

// Create dispatch  and selector to use redux
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function AddPlayerNameModal() {
  const [disabledButton, setDisableButton] = useState<boolean>(true);
  const [temporalName, setTemporalName] = useState<string>("");
  const dispatch = useAppDispatch();

  const onChangeNamePlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTemporalName(value);
    value.length > 2 ? setDisableButton(false) : setDisableButton(true);
  };

  const handleSetPlayerName = () => {
    dispatch(setPlayerName(temporalName));
  };

  return (
    <div
      className="game__add-player-modal
      fixed
      inset-0 
      bg-gray-600 
      bg-opacity-50 
      overflow-y-auto 
      h-full 
      w-full
      flex
      z-10"
    >
      <div
        className="game__add-player-modal__container text-center
        bg-white
          w-11/12 md:w-1/2
          m-auto
          rounded-md
          p-8
          flex
          flex-col
          justify-center
          items-center
          "
      >
        <div className="add-player-name w-full flex flex-col items-start gap-2">
          <label
            className="text-lg text-slate-600 font-normal"
            htmlFor="player-name"
          >
            Agrega tu nombre para inciar:
          </label>
          <input
            id="player-name"
            type="text"
            className="w-full h-16 px-4 text-lg font-medium capitalize text-slate-800 rounded-md border-2"
            placeholder="Jhon Doe..."
            onChange={onChangeNamePlayer}
          />
          <button
            className={classNames(
              "h-16 font-medium text-lg text-slate-800 bg-green-400 hover:bg-green-500 rounded w-full",
              {
                "opacity-70 hover:bg-green-400 cursor-default": disabledButton,
              }
            )}
            type="button"
            disabled={disabledButton}
            onClick={handleSetPlayerName}
          >
            Empezar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPlayerNameModal;
