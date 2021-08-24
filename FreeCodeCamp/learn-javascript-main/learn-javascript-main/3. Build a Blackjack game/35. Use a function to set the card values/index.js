// 2. Use getRandomCard() to set the values of firstCard and secondCard
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

// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
    return 5
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
    // 3. Use the getRandomCard() to set the value of card
    var card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
