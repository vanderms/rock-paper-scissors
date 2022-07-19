import { ItemType } from "@/components/item/item";
import { useEffect, useRef } from "react";
import { pause } from "@/utilities/pause";
import { useState } from "react";
import { PickCard } from "../pick/pick";

export const StepTwo: React.FC<{
  setHousePick: (item: ItemType) => void;
  userPick: ItemType;
}> = ({ setHousePick, userPick }) => {
  const [pick, setPick] = useState<ItemType | null>(null);
  const firstRun = useRef(true);

  useEffect(() => {
    const process = async () => {
      await pause(1000);

      const types = Object.values(ItemType);
      const value = types[Math.floor(Math.random() * types.length)];
      setPick(value);

      await pause(1000);      
      setHousePick(value as ItemType);
    };

    if (firstRun.current) {
      process();
      firstRun.current = false;
    }
  }, []);

  return (
    <div className="mt-24 w-full flex justify-between lg:mt-[4.5rem] lg:w-[41.125rem] lg:mx-auto">
      <PickCard type={userPick} text="YOU PICKED" />
      <PickCard type={pick} text="THE HOUSE PICKED" />
    </div>
  );
};
