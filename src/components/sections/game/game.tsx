import { ChangeEvent, useId } from "react";
import { Item, ItemType } from "@/components/item/item";
import { useState } from "react";
import { StepOne } from "@/components/steps/step-one";
import { StepTwo } from "@/components/steps/step-two";
import { StepThree } from "@/components/steps/step-three";
import { GameResult, evalResult } from "@/utilities/eval-result";

export const GameSection: React.FC<{ processResult: (result: GameResult) => void }> = ({
  processResult,
}) => {
  const titleId = useId();
  const [userPick, setUserPick] = useState<ItemType | null>(null);
  const [housePick, setHousePick] = useState<ItemType | null>(null);
  const [result, setResult] = useState<GameResult | null>(null);

  const [step, setStep] = useState<number>(1);

  const getUserPick = (pick: ItemType) => {
    setUserPick(pick);
    setStep(2);
  };

  const getHousePick = (pick: ItemType) => {
    setHousePick(pick);
    const result = evalResult(userPick as ItemType, pick);
    setResult(result);
    processResult(result);
    setStep(3);
  };

  const playAgain = () => {
    setResult(null);
    setHousePick(null);
    setUserPick(null);
    setStep(1);
  };

  return (
    <section aria-labelledby={titleId} className="w-full">
      <h2 id={titleId} className="sr-only">
        Pick your option:
      </h2>
      {step === 1 && <StepOne setUserPick={getUserPick} />}
      {step == 2 && <StepTwo setHousePick={getHousePick} userPick={userPick as ItemType} />}
      {step == 3 && (
        <StepThree
          userPick={userPick as ItemType}
          housePick={housePick as ItemType}
          result={result as GameResult}
          playAgain={playAgain}
        />
      )}
    </section>
  );
};
