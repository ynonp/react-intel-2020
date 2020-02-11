import React, {useState} from "react";

function Result(props: { guess: string, secretNumber: number }) {
    const { guess, secretNumber } = props;
    const shouldLie = Math.random() > 0.5;
    if (guess === '') {
        return null;
    }
    let msg = "";

    const nGuess = Number(guess);
    if (nGuess < secretNumber) {
        msg = "Sorry, too small";
    } else if (nGuess > secretNumber) {
        msg = "Sorry, too large";
    } else {
        msg = "Bravo!";
    }

    return <p>{msg}</p>
}

export default function NumberGuessingGame() {
    const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100));
    const [guess, setGuess] = useState('');

    function newGame() {
        setSecretNumber(Math.floor(Math.random() * 100));
    }

    return (
        <div>
            <input
                type="text"
                value={guess}
                placeholder="Please type a number..."
                onChange={(e) => setGuess(e.target.value)}
            />
            <Result guess={guess} secretNumber={secretNumber} />
            <button onClick={newGame}>New Game</button>
        </div>
    )
}