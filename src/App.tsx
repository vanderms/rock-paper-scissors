import { Header } from "./components/sections/header/header";
import { GameSection } from "./components/sections/game/game";
import { useState } from "react";
import { GameResult } from "./utilities/eval-result";
import { RulesSection } from "./components/sections/rules/rules";

const getInitialValue = () => {
  const value = localStorage.getItem("score");
  if (!value) {
    return 0;
  } else return Number(value);
};

export default function App() {
  const [score, setScore] = useState<number>(getInitialValue);

  const processResult = (result: GameResult) => {
    if (result === GameResult.WIN) {
      setScore((prev) => {
        const value = prev + 1;
        localStorage.setItem("score", `${value}`);
        return value;
      });
    }
  };

  return (
    <>
      <main
        className={`min-h-screen h-[48rem] w-full overflow-hidden
          bg-[radial-gradient(134.34%_134.34%_at_50%_0%,#1F3757_0%,_#131537_100%)]
      `}
      >
        <div className="container">
          <div className="flex flex-col items-center h-[40.875rem] lg:h-[43.5rem]">
            <Header score={score} />
            <GameSection processResult={processResult} />
          </div>
          <RulesSection />
        </div>
      </main>
    </>
  );
}
