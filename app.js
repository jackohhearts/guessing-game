//

let maximum = parseInt(prompt("Enter the maximum number possible for guessing:"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number!"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = parseInt(prompt("What is your guess?"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'quit') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Sorry, too high! Enter a new number:")
    } else {
        guess = prompt("Sorry, too low! Enter a new number:")
    }
}
if (guess === 'quit') {
    console.log("You quit!  That's okay.")
} else {
    console.log(`You Win! It took you ${attempts} guesses!`)
}


