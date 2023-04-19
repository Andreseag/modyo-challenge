function PlayerInfo() {
  return (
    <div className="payer-info mb-8 mt-8 border rounded-md p-4 w-3/5 m-auto">
      <div className="player-info__container">
        <div className="player-info__player flex justify-center items-center gap-6">
          <div className="player-info__player-avatar flex flex-col items-center px-6 border-r">
            <span
              className="h-14 w-14
                flex
                items-center
                justify-center
                rounded-full 
                bg-orange-500
                text-4xl
                text-white
                font-bold"
            >
              A
            </span>
            <p className="text-slate-800 text-lg font-semibold">
              Andres Castro
            </p>
          </div>
          <div className="player-info__player-scores flex flex-col gap-1">
            <div className="player-info__player-errors flex gap-3">
              <p className="text-lg font-bold text-purple-800">Errors:</p>
              <span className="text-lg font-bold text-slate-800">640</span>
            </div>
            <div className="player-info__player-hits flex gap-3">
              <p className="text-lg font-bold text-purple-800">Hits:</p>
              <span className="text-lg font-bold text-slate-800">640</span>
            </div>
            <div className="player-info__player-total flex gap-3">
              <p className="text-lg font-bold text-purple-800">Score:</p>
              <span className="text-lg font-bold text-slate-800">640</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerInfo;
