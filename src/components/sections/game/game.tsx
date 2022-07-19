import { ChangeEvent, useId } from "react";
import { Item, ItemType } from "@/components/item/item";
import { useState } from "react";

export const GameSection: React.FC = () => {
  const titleId = useId();
  const [game, setGame] = useState<{
    user: ItemType | null;
    winner: "player" | "cpu" | "";
  }>({
    user: null,
    winner: "",
  });

  const handlePick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      const value = e.currentTarget.value as ItemType;
      setGame((prev) => ({ ...prev, user: value }));
      console.log(e.currentTarget.value);
    }
  };

  return (
    <section aria-labelledby={titleId} className="mt-24 w-full">
      <h2 id={titleId} className="sr-only">
        Pick your option:
      </h2>
      <div className="w-full h-[19.4375rem] relative bg-pentagon">
        <label className="absolute left-[34.73%] cursor-pointer">
          <input
            type="radio"
            name="game"
            value={ItemType.SCISSORS}
            className="appearance-none"
            checked={ItemType.SCISSORS === game.user}
            onChange={handlePick}
          />
          <span className="sr-only">Scissors</span>
          <Item type={ItemType.SCISSORS} />
        </label>
        <label className="absolute top-[27.33%] cursor-pointer">
          <input
            type="radio"
            name="game"
            value={ItemType.SPOCK}
            className="appearance-none"
            checked={ItemType.SPOCK === game.user}
            onChange={handlePick}
          />
          <span className="sr-only">Spock</span>
          <Item type={ItemType.SPOCK} />
        </label>
        <label className="absolute top-[27.33%] right-0 cursor-pointer">
          <input
            type="radio"
            name="game"
            value={ItemType.PAPER}
            className="appearance-none"
            checked={ItemType.PAPER === game.user}
            onChange={handlePick}
          />
          <span className="sr-only">Paper</span>
          <Item type={ItemType.PAPER} />
        </label>
        <label className="absolute bottom-0 left-[13.83%] cursor-pointer">
          <input
            type="radio"
            name="game"
            value={ItemType.LIZARD}
            className="appearance-none"
            checked={ItemType.LIZARD === game.user}
            onChange={handlePick}
          />
          <span className="sr-only">Lizard</span>
          <Item type={ItemType.LIZARD} />
        </label>
        <label className="absolute bottom-0 right-[13.83%] cursor-pointer">
          <span className="sr-only">Rock</span>
          <input
            type="radio"
            name="game"
            value={ItemType.ROCK}
            className="appearance-none"
            checked={ItemType.ROCK === game.user}
            onChange={handlePick}
          />
          <Item type={ItemType.ROCK} />
        </label>
      </div>
    </section>
  );
};
