import classNames from "classnames";
import { useState } from "react";

interface Props {
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
}

function AddPlayerNameModal({ setPlayerName }: Props) {
  const [disabledButton, setDisableButton] = useState<boolean>(true);
  const [temporalName, setTemporalName] = useState<string>("");

  const onChangeNamePlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTemporalName(value);
    value.length > 2 ? setDisableButton(false) : setDisableButton(true);
  };

  const handleSetPlayerName = () => {
    setPlayerName(temporalName);
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
      flex
      z-10"
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
