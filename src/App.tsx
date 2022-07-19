import { Header } from "./components/sections/header/header";
import { GameSection } from "./components/sections/game/game";


export default function App() {
  return (
    <>
      <main
        className={`min-h-screen h-[48rem] w-full
          bg-[radial-gradient(134.34%_134.34%_at_50%_0%,#1F3757_0%,_#131537_100%)]
      `}
      >
        <div className="container flex flex-col items-center">
          <Header score={12} />
          <GameSection/>
        </div>
      </main>
    </>
  );
}
