// gameActions.ts
import { ActionTypes } from "./gameTypes";
import { GameAction } from "./gameTypes";

export const setPlayerChoice = (choice: string): GameAction => {
  return {
    type: ActionTypes.SET_PLAYER_CHOICE,
    payload: choice,
  };
};

export const setComputerChoice = (choice: string): GameAction => {
  return {
    type: ActionTypes.SET_COMPUTER_CHOICE,
    payload: choice,
  };
};

export const setWinner = (winner: string): GameAction => {
  return {
    type: ActionTypes.SET_WINNER,
    payload: winner,
  };
};

export const resetGame = (): GameAction => {
  return {
    type: ActionTypes.RESET_GAME,
  };
};

export const setPlayerScore = (score: number): GameAction => {
  return {
    type: ActionTypes.SET_PLAYER_SCORE,
    payload: score,
  };
};

export const setHighScore = (score: number): GameAction => {
  return {
    type: ActionTypes.SET_HIGH_SCORE,
    payload: score,
  };
};
