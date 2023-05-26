import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameState } from "../src/redux/gameTypes";
import {
  setPlayerChoice,
  setComputerChoice,
  setWinner,
  setPlayerScore,
  setHighScore,
} from "../src/redux/gameActions";
import GameOptions from "./components/GameOptions";
import GameResult from "./components/GameResult";

const choices = ["rock", "scissors", "paper", "lizard", "spock"];

const App: React.FC = () => {
  const [resetClicked, setResetClicked] = useState(false);
  const dispatch = useDispatch();
  const { playerChoice, computerChoice, winner, playerScore, highScore } =
    useSelector((state: GameState) => state);

  const [difficulty, setDifficulty] = useState("medium");

  useEffect(() => {
    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighScore) {
      dispatch(setHighScore(parseInt(savedHighScore, 10)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("highScore", highScore.toString());
  }, [highScore]);

  const determineWinner = (playerChoice: string, computerChoice: string) => {
    if (playerChoice === computerChoice) {
      return "Uavgjort!";
    } else if (
      (playerChoice === "rock" &&
        (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (playerChoice === "scissors" &&
        (computerChoice === "paper" || computerChoice === "lizard")) ||
      (playerChoice === "paper" &&
        (computerChoice === "rock" || computerChoice === "spock")) ||
      (playerChoice === "lizard" &&
        (computerChoice === "paper" || computerChoice === "spock")) ||
      (playerChoice === "spock" &&
        (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
      return "Du vinner!";
    } else {
      return "Computer vinner!";
    }
  };

  const handlePlayerChoice = (choice: string) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const winner = determineWinner(choice, computerChoice);
    let newPlayerScore = playerScore;

    if (winner === "Du vinner!") {
      newPlayerScore++;
      if (newPlayerScore > highScore) {
        dispatch(setHighScore(newPlayerScore));
      }
    } else if (winner === "Computer vinner!") {
      newPlayerScore = 0;
    }

    dispatch(setPlayerChoice(choice));
    dispatch(setComputerChoice(computerChoice));
    dispatch(setWinner(winner));
    dispatch(setPlayerScore(newPlayerScore));
  };

  const handleDifficultyChange = (difficulty: string) => {
    setDifficulty(difficulty);
  };

  useEffect(() => {
    if (resetClicked) {
      dispatch(setWinner(""));
      dispatch(setPlayerChoice(""));
      dispatch(setComputerChoice(""));
      setResetClicked(false); // Reset the state back to false
    }
  }, [resetClicked, dispatch]);

  const handleResetClick = () => {
    setResetClicked(true);
  };

  return (
    <div className="main-container">
      <h1>Rock, Scissors, Paper, Lizard, Spock</h1>
      <p>High Score: {highScore}</p>
      <p>Din poengsum: {playerScore}</p>
      <div>
        <p>Velg vanskelighetsgrad:</p>
        <select
          value={difficulty}
          onChange={(e) => handleDifficultyChange(e.target.value)}
        >
          <option value="easy">Enkel</option>
          <option value="medium">Medium</option>
          <option value="hard">Vanskelig</option>
        </select>
      </div>
      {!winner ? (
        <GameOptions
          choices={choices}
          handlePlayerChoice={handlePlayerChoice}
          difficulty={difficulty}
          playerChoice={playerChoice}
        />
      ) : (
        <>
          <GameResult
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            winner={winner}
          />
          <button className="three-d-button" onClick={handleResetClick}>
            Start nytt spill
          </button>
        </>
      )}
    </div>
  );
};

export default App;
