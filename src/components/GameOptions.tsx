import React from "react";
import "./GameOptions.css"; // Import the CSS file for GameOptions

interface GameOptionsProps {
  choices: string[];
  handlePlayerChoice: (choice: string) => void;
  difficulty: string;
  playerChoice: string;
}

const GameOptions: React.FC<GameOptionsProps> = ({
  choices,
  handlePlayerChoice,
  difficulty,
  playerChoice,
}) => (
  <div>
    <h3>Velg ditt våpen:</h3>
    {choices.map((choice) => (
      <button
        key={choice}
        onClick={() => handlePlayerChoice(choice)}
        disabled={difficulty === "hard" && playerChoice !== ""}
        className="three-d-button" // Apply the CSS class for the 3D button
      >
        {choice}
      </button>
    ))}
  </div>
);

export default GameOptions;
