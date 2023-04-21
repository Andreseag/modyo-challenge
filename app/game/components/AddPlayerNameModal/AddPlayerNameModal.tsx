import React from "react";

function AddPlayerNameModal() {
  return (
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
      />
      <button
        className="h-16 font-medium text-lg text-slate-800 bg-green-400 hover:bg-green-500 rounded w-full"
        type="button"
      >
        Empezar
      </button>
    </div>
  );
}

export default AddPlayerNameModal;
