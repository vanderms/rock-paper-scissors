import { Item, ItemType } from "@/components/item/item";
import { ChangeEvent } from "react";

export const StepOne: React.FC<{ setUserPick: (item: ItemType) => void }> = ({
  setUserPick,
}) => {
  const handlePick = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      const value = e.currentTarget.value as ItemType;
      setUserPick(value);
    }
  };

  return (
    <div className="mt-24 w-full h-[19.4375rem] relative bg-pentagon lg:w-[29.5rem] lg:h-[28.9375rem] lg:mx-auto lg:mt-12">
      <label className="absolute w-24 h-24 lg:h-[9.25rem] lg:w-[9.25rem]  left-[34.73%] cursor-pointer grid">
        <input
          type="radio"
          name="game"
          value={ItemType.SCISSORS}
          className="appearance-none"
          onChange={handlePick}
        />
        <span className="sr-only">Scissors</span>
        <Item type={ItemType.SCISSORS} />
      </label>
      <label className="absolute  w-24 h-24 lg:h-[9.25rem] lg:w-[9.25rem] top-[27.33%] cursor-pointer grid">
        <input
          type="radio"
          name="game"
          value={ItemType.SPOCK}
          className="appearance-none"
          onChange={handlePick}
        />
        <span className="sr-only">Spock</span>
        <Item type={ItemType.SPOCK} />
      </label>
      <label className="absolute w-24 h-24 lg:h-[9.25rem] lg:w-[9.25rem] top-[27.33%] right-0 cursor-pointer grid">
        <input
          type="radio"
          name="game"
          value={ItemType.PAPER}
          className="appearance-none"
          onChange={handlePick}
        />
        <span className="sr-only">Paper</span>
        <Item type={ItemType.PAPER} />
      </label>
      <label className="absolute w-24 h-24 lg:h-[9.25rem] lg:w-[9.25rem] bottom-0 left-[13.83%] cursor-pointer grid">
        <input
          type="radio"
          name="game"
          value={ItemType.LIZARD}
          className="appearance-none"
          onChange={handlePick}
        />
        <span className="sr-only">Lizard</span>
        <Item type={ItemType.LIZARD} />
      </label>
      <label className="absolute w-24 h-24 lg:h-[9.25rem] lg:w-[9.25rem] bottom-0 right-[13.83%] cursor-pointer grid">
        <span className="sr-only">Rock</span>
        <input
          type="radio"
          name="game"
          value={ItemType.ROCK}
          className="appearance-none"
          onChange={handlePick}
        />
        <Item type={ItemType.ROCK} />
      </label>
    </div>
  );
};
