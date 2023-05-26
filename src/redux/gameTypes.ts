// gameTypes.ts
export enum ActionTypes {
  SET_PLAYER_CHOICE = "SET_PLAYER_CHOICE",
  SET_COMPUTER_CHOICE = "SET_COMPUTER_CHOICE",
  SET_WINNER = "SET_WINNER",
  SET_HIGH_SCORE = "SET_HIGH_SCORE",
  SET_PLAYER_SCORE = "SET_PLAYER_SCORE",
  RESET_GAME = "RESET_GAME",
}

export interface GameState {
  playerChoice: string;
  computerChoice: string;
  winner: string;
  highScore: number;
  playerScore: number;
}

export interface SetPlayerChoiceAction {
  type: ActionTypes.SET_PLAYER_CHOICE;
  payload: string;
}

export interface SetComputerChoiceAction {
  type: ActionTypes.SET_COMPUTER_CHOICE;
  payload: string;
}

export interface SetWinnerAction {
  type: ActionTypes.SET_WINNER;
  payload: string;
}

export interface SetHighScoreAction {
  type: ActionTypes.SET_HIGH_SCORE;
  payload: number;
}

export interface SetPlayerScoreAction {
  type: ActionTypes.SET_PLAYER_SCORE;
  payload: number;
}

export interface ResetGameAction {
  type: ActionTypes.RESET_GAME;
}

export type GameAction =
  | SetPlayerChoiceAction
  | SetComputerChoiceAction
  | SetWinnerAction
  | SetHighScoreAction
  | SetPlayerScoreAction
  | ResetGameAction;
