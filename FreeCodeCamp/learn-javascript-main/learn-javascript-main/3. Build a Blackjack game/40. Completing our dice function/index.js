// Try to modify the expression so that we get a range from 1 to 6
// var randomNumber = Math.floor( Math.random() * 6 ) + 1

// console.log(randomNumber)

function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

console.log(rollDice())