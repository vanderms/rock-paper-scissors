import { ItemType } from "../item/item";
import { PickCard } from "@/components/pick/pick";
import { GameResult } from "@/utilities/eval-result";

interface StepThreeProps {
  userPick: ItemType;
  housePick: ItemType;
  result: GameResult;
  playAgain: () => void;
}

export const StepThree: React.FC<StepThreeProps> = (props) => {
  return (
    <div className="mt-24 w-full flex flex-wrap justify-between gap-y-[3.875rem] lg:flex-nowrap lg:w-[58.6875rem] mx-auto lg:items-center lg:gap-16">
      <div className="flex lg:order-1">
        <PickCard type={props.userPick} text="YOU PICKED" />
      </div>
      <div className="flex lg:order-3">
        <PickCard type={props.housePick} text="THE HOUSE PICKED" />
      </div>

      <div className=" w-full flex flex-col gap-4 col-span-2 items-center lg:order-2">
        <p className="text-white text-[3.5rem] leading-[4.1875rem] font-bold">
          {
            {
              [GameResult.DRAW]: "DRAW",
              [GameResult.LOSS]: "YOU LOSE",
              [GameResult.WIN]: "YOU WIN",
            }[props.result]
          }
        </p>
        <button
          onClick={() => props.playAgain()}
          className="bg-white rounded-md text-[#3B4262] w-[13.75rem] h-12 tracking-[2.5px]"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};
