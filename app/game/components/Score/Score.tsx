interface Props {
  score: number;
}

function Score({ score }: Props) {
  return (
    <div className="game__score mt-4 bg-white p-4 border shadow-sm rounded-md">
      <div className="player-info__player-total flex gap-3 text-2xl">
        <p className="text-slate-800">Score:</p>
        <span className="font-bold text-slate-800">{score}</span>
      </div>
    </div>
  );
}

export default Score;
