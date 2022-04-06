//

let maximum = parseInt(prompt("Enter the maximum number possible for guessing:"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number!"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = parseInt(prompt("What is your guess?"));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt("Sorry, too high! Enter a new number:"))
    } else {
        guess = parseInt(prompt("Sorry, too low! Enter a new number:"))
    }
}
if (guess == targetNum) {
    console.log("You Win!")
}

