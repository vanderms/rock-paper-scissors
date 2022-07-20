import { ItemType } from "@/components/item/item";

export enum GameResult {
  WIN = "WIN",
  LOSS = "LOSS",
  DRAW = "DRAW",
}

export const ResultTable = {
  ["lizard x lizard"]: GameResult.DRAW,
  ["lizard x paper"]: GameResult.WIN,
  ["lizard x rock"]: GameResult.LOSS,
  ["lizard x scissors"]: GameResult.LOSS,
  ["lizard x spock"]: GameResult.WIN,
  ["paper x lizard"]: GameResult.LOSS,
  ["paper x paper"]: GameResult.DRAW,
  ["paper x rock"]: GameResult.WIN,
  ["paper x scissors"]: GameResult.LOSS,
  ["paper x spock"]: GameResult.WIN,
  ["rock x lizard"]: GameResult.WIN,
  ["rock x paper"]: GameResult.LOSS,
  ["rock x rock"]: GameResult.DRAW,
  ["rock x scissors"]: GameResult.WIN,
  ["rock x spock"]: GameResult.LOSS,
  ["scissors x lizard"]: GameResult.WIN,
  ["scissors x paper"]: GameResult.WIN,
  ["scissors x rock"]: GameResult.LOSS,
  ["scissors x scissors"]: GameResult.DRAW,
  ["scissors x spock"]: GameResult.LOSS,
  ["spock x lizard"]: GameResult.LOSS,
  ["spock x paper"]: GameResult.LOSS,
  ["spock x rock"]: GameResult.WIN,
  ["spock x scissors"]: GameResult.WIN,
  ["spock x spock"]: GameResult.DRAW,
};

export const evalResult = (userPick: ItemType, housePick: ItemType): GameResult => {
  return ResultTable[`${userPick} x ${housePick}`];
};
