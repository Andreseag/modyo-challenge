import GameBoard from "@/components/GameBoard/GameBoard";
import PlayerInfo from "@/components/PlayerInfo/PlayerInfo";

function page() {
  return (
    <>
      <PlayerInfo />
      <GameBoard />
      <div className="m-auto mt-4 w-3/5 bg-white p-4 border shadow-sm rounded-md">
        <div className="player-info__player-total flex gap-3 text-2xl">
          <p className="text-slate-800">Score:</p>
          <span className="font-bold text-slate-800">640</span>
        </div>
      </div>
    </>
  );
}

export default page;
