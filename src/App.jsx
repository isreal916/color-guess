import { useState, useEffect } from "react";

import "./App.css";
import Box from "./components/colorbox/box";
import colorsData from "./data/data";
import shuffle from "./utils/utils";
import Toast from "./components/toast/toast";

function App() {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [shuffledColors, setShuffledColors] = useState(getRandomColorData());
  const [mainColor, setMainColor] = useState(
    shuffledColors.shades[Math.floor(Math.random() * shuffledColors.shades.length)]
  );

  function getRandomColorData() {
    const shuffledColors = shuffle([...colorsData]);
    return shuffledColors[Math.floor(Math.random() * shuffledColors.length)];
  }

  function handleClick(color) {
    if (color === mainColor) {
      setResult("correct");
      setScore(score + 1);
    } else {
      setResult("incorrect");
      setScore(1);
    }
    // Update colors after each click
    const newShuffledColors = getRandomColorData();
    setShuffledColors(newShuffledColors);
    setMainColor(newShuffledColors.shades[Math.floor(Math.random() * newShuffledColors.shades.length)]);
  }

  function handleNewGame() {
    setScore(0);
    setResult("");
    const newShuffledColors = getRandomColorData();
    setShuffledColors(newShuffledColors);
    setMainColor(newShuffledColors.shades[Math.floor(Math.random() * newShuffledColors.shades.length)]);
  }

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setResult(""), 500);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <>
      <div className="container">
        <div className="color-box">
          {result && (
            <Toast
              message={result === "correct" ? "Correct" : "Incorrect"}
              type={result === "correct" ? "success" : "error"}
            />
          )}
          <p className="score">Score: <span data-testid="score">{score}</span></p>
          <div
            className="main-color"
            data-testid="colorBox"
            style={{ backgroundColor: mainColor }}
          ></div>
          <p data-testid="gameInstructions">Guess the correct color</p>
          <div className="color-picker">
            {shuffledColors.shades.map((color) => (
              <Box color={color} handleClicks={handleClick} key={color} />
            ))}
          </div>
          <button onClick={handleNewGame} className="new-game-button">New Game</button>
        </div>
      </div>
    </>
  );
}

export default App;