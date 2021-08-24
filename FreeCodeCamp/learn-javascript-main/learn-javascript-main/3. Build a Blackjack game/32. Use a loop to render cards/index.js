var firstCard = 10
var secondCard = 4
var cards = [firstCard, secondCard]
var sum = firstCard + secondCard
var hasBlackJack = false
var isAlive = true
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // Create a for loop that renders out all the cards instead of just two
    for (var i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
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


function newCard() {
    var card = 6
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}
