import React from "react";
import "./GameResult.css"; // Import the CSS file for GameOptions

interface GameResultProps {
  playerChoice: string;
  computerChoice: string;
  winner: string;
}

const GameResult: React.FC<GameResultProps> = ({
  playerChoice,
  computerChoice,
  winner,
}) => (
  <div>
    <p>Spiller valgte: {playerChoice}</p>
    <p>Computer valgte: {computerChoice}</p>
    <h2 className="winner">{winner}</h2>
  </div>
);

export default GameResult;
