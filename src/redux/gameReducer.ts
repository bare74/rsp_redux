import { ActionTypes, GameAction, GameState } from "./gameTypes";

const initialState: GameState = {
  playerChoice: "",
  computerChoice: "",
  winner: "",
  highScore: 0,
  playerScore: 0,
};

export const gameReducer = (
  state = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case ActionTypes.SET_PLAYER_CHOICE:
      return { ...state, playerChoice: action.payload };
    case ActionTypes.SET_COMPUTER_CHOICE:
      return { ...state, computerChoice: action.payload };
    case ActionTypes.SET_WINNER:
      return { ...state, winner: action.payload };
    case ActionTypes.SET_HIGH_SCORE:
      return { ...state, highScore: action.payload };
    case ActionTypes.SET_PLAYER_SCORE:
      return { ...state, playerScore: action.payload };
    case ActionTypes.RESET_GAME:
      return { ...initialState };
    default:
      return state;
  }
};
