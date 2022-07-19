import { ChangeEvent, useId } from "react";
import { Item, ItemType } from "@/components/item/item";
import { useState } from "react";
import { StepOne } from "@/components/steps/step-one";
import { StepTwo } from "@/components/steps/step-two";

export const GameSection: React.FC = () => {
  const titleId = useId();
  const [userPick, setUserPick] = useState<ItemType | null>(null);
  const [housePick, setHousePick] = useState<ItemType | null>(null);

  const [step, setStep] = useState<number>(1);

  const getUserPick = (pick: ItemType) => {
    setUserPick(pick);
    setStep(2);
  };

  const getHousePick = (pick: ItemType) => {
    setHousePick(pick);
    setStep(3);
  };

  return (
    <section aria-labelledby={titleId} className="w-full">
      <h2 id={titleId} className="sr-only">
        Pick your option:
      </h2>
      {step === 1 && <StepOne setUserPick={getUserPick} />}
      {step >= 2 && (
        <StepTwo setHousePick={getHousePick} userPick={userPick as ItemType} />
      )}
    </section>
  );
};
