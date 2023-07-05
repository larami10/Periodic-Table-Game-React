import { useState } from "react";
import { elementList } from "../assets/words";
import Modal from "../components/Modal";

function GuessBox({ value, onGuessChange }) {
  return (
    <input
      type="text"
      className="typing-input"
      maxLength={1}
      value={value}
      onChange={(e) => onGuessChange(e.target.value)}
    />
  );
}

const Game = () => {
  // Initialize element to random element from elementList
  const [element, setElement] = useState(
    elementList[Math.floor(Math.random() * elementList.length)]
  );
  const [elementName, setElementName] = useState(element.elementName);
  const [elementSymbol, setElementSymbol] = useState(element.elementSymbol);
  const [firstLetter, setFirstLetter] = useState("");
  const [secondLetter, setSecondLetter] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [guessesLeft, setGuessesLeft] = useState(
    elementName.length > 6 ? 8 : 6
  );
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState();
  const [modalTitle, setModalTitle] = useState();

  function resetGame() {
    let tempElement =
      elementList[Math.floor(Math.random() * elementList.length)];

    if (element === tempElement) {
      while (element === tempElement) {
        tempElement =
          elementList[Math.floor(Math.random() * elementList.length)];
      }
    }

    setElement(tempElement);
    setElementName(tempElement.elementName);
    setElementSymbol(tempElement.elementSymbol);
    setGuessesLeft(tempElement.elementName.length > 6 ? 8 : 6);
    setWrongGuesses([]);
    setFirstLetter("");
    setSecondLetter("");
  }

  // function initGame(e) {
  //   let key = e.target.value.toLowerCase();
  //   if (
  //     key.match(/^[A-Za-z]+$/) &&
  //     !incorrectLetters.includes(` ${key}`) &&
  //     !correctLetters.includes(key)
  //   ) {
  //     if (word.includes(key)) {
  //       for (let i = 0; i < word.length; i++) {
  //         if (word[i] == key) {
  //           correctLetters += key;
  //           inputs.querySelectorAll("input")[i].value = key;
  //         } else {
  //           maxGuesses--;
  //           incorrectLetters.push(` ${key}`);
  //         }

  //         guessLeft.innerText = maxGuesses;
  //         wrongLetter.innerText = incorrectLetters;
  //       }

  //       typingInput.value = "";

  //       setTimeout(() => {
  //         if (correctLetters.lenth === word.length) {
  //           alert(`Congrats! You found the word ${word.toUpperCase()}`);
  //           return randomWord();
  //         } else if (maxGuesses < 1) {
  //           alert("Game over! You don't have remaining guesses");

  //           for (let i = 0; i < word.length; i++) {
  //             inputs.querySelectorAll("input")[i].value = word[i];
  //           }
  //         }
  //       }, 100);
  //     }
  //   }
  // }

  function submitGuess(firstLetter, secondLetter) {
    let guess = "";
    if (element.elementSymbol.length === 1) {
      guess = firstLetter;
    } else {
      guess = firstLetter + secondLetter;
    }

    if (guess === element.elementSymbol) {
      congratulations(guess);
    } else {
      loseGuess(guess);
    }
  }

  function congratulations(guess) {
    setModalTitle("Congrats, that's correct!");
    setModalMessage(`You found the Element Symbol ${guess} for ${elementName}`);
    setShow(true);
  }

  function loseGuess(guess) {
    const tempGuessesLeft = guessesLeft - 1;
    setGuessesLeft(tempGuessesLeft);
    setWrongGuesses((wrongGuesses) => [
      ...wrongGuesses,
      ...(wrongGuesses.length === 0 ? guess : `, ${guess}`),
    ]);

    if (tempGuessesLeft === 0) {
      setModalTitle("Sorry, but that's not correct!");
      setModalMessage(
        `You're out of guesses, the correct Element Symbol for ${elementName} is ${elementSymbol}.`
      );
      setShow(true);
    }
  }

  function onClose() {
    setShow(false);
    resetGame();
  }

  return (
    <>
      <div className="wrapper">
        <h1>Guess the Element's Symbol</h1>
        <div className="content">
          <div className="typing-input-container flex-space">
            <GuessBox value={firstLetter} onGuessChange={setFirstLetter} />
            {elementSymbol.length === 2 ? (
              <GuessBox value={secondLetter} onGuessChange={setSecondLetter} />
            ) : null}
          </div>
          <div className="details">
            <p className="element-name">Element Name: {elementName}</p>
            <p className="guess-left">Remaining guesses: {guessesLeft}</p>
            <p className="wrong-letter">Wrong Guesses: {wrongGuesses}</p>
          </div>
          <div className="flex-space">
            <button
              className="submit-btn"
              onClick={() =>
                submitGuess(
                  firstLetter.toUpperCase(),
                  secondLetter.toLowerCase()
                )
              }
            >
              Submit Guess
            </button>
            <button className="reset-btn" onClick={resetGame}>
              Next Element
            </button>
          </div>
        </div>
      </div>{" "}
      <Modal
        title={modalTitle}
        message={modalMessage}
        show={show}
        onClose={onClose}
      />
    </>
  );
};

export default Game;
