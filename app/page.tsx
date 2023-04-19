import AddPlayerName from "@/components/AddPlayerName/AddPlayerName";
import GameHead from "@/components/GameHead/GameHead";

export default function Home() {
  return (
    <>
      <div className="home m-auto w-2/3 flex flex-col items-center justify-center mt-40 gap-12">
        <GameHead />
        <AddPlayerName />
      </div>
    </>
  );
}
