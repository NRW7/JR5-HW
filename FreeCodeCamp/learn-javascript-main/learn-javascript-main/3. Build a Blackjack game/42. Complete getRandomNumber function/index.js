var firstCard = getRandomCard()
var secondCard = getRandomCard()
var cards = [firstCard, secondCard]
var sum = firstCard + secondCard
var hasBlackJack = false
var isAlive = true
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    var randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    // return Math.floor( Math.random()*13 ) + 1
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
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
    var card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
