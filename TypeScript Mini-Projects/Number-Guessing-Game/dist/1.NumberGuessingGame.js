"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const checkGuess = (guess) => {
    attempts++;
    if (guess > secretNumber) {
        return `Too High
Attempt: ${attempts}`;
    }
    else if (guess < secretNumber) {
        return `Too Low
Attempt: ${attempts}`;
    }
    return `Correct
Attempt: ${attempts}`;
};
const guesses = [50, 30, 5];
for (const guess of guesses) {
    const result = checkGuess(guess);
    console.log(result);
    if (guess === secretNumber) {
        console.log((`You Won in ${attempts} attempts!`));
        break;
    }
}
console.log('secret number:', secretNumber);
//# sourceMappingURL=1.NumberGuessingGame.js.map