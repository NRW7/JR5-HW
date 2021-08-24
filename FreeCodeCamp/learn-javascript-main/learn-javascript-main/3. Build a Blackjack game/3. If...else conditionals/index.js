var firstCard = 10
var secondCard = 11
var sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack!")
} else if (sum > 21) {
    console.log("You're out of the game!")
}