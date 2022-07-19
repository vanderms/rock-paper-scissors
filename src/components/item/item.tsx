import Rock from "@/assets/images/rock.svg";
import Paper from "@/assets/images/paper.svg";
import Scissors from "@/assets/images/scissors.svg";
import Lizard from "@/assets/images/lizard.svg";
import Spock from "@/assets/images/spock.svg";

export enum ItemType {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  LIZARD = "lizard",
  SPOCK = "spock",
}

const imageTable = {
  [ItemType.ROCK]: Rock,
  [ItemType.SCISSORS]: Scissors,
  [ItemType.LIZARD]: Lizard,
  [ItemType.SPOCK]: Spock,
  [ItemType.PAPER]: Paper,
};

export const Item: React.FC<{ type: ItemType }> = ({ type }) => {
  return (
    <img
      className="absolute w-full h-full top-0 left-0 object-contain object-center"
      src={imageTable[type]}
      alt={type}
    />
  );
};
