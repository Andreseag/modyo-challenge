import Image from "next/image";

interface Props {
  score: number;
}

function GameWinnerModal({ score }: Props) {
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
          <span className="font-bold">Andres</span> has completado correctamente
          el juego
        </p>
        <div className="score bg-slate-800 text-lg text-white py-2 px-8 rounded-3xl mb-4">
          Score: <span className="font-bold text-green-400">{score}</span>
        </div>
        <button
          className="mb-3 h-12 text-lg  text-slate-800 bg-green-400 hover:bg-green-500 rounded w-full"
          type="button"
        >
          Reiniciar juego
        </button>
        <button
          className=" text-lg h-12  text-slate-800 border border-slate-800 bg-white hover:bg-slate-800 hover:text-white rounded w-full"
          type="button"
        >
          Cambiar de jugador
        </button>
      </div>
    </div>
  );
}

export default GameWinnerModal;
