var firstCard = 10
var secondCard = 4
var sum = firstCard + secondCard
var hasBlackJack = false
var isAlive = true
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
var cardsEl = document.getElementById("cards-el")
function startGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + firstCard + " " + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
