var hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


/* function randomItem() {
    let hands [Math.floor (Math.random () * hands.length)]
}

randomItem()

let randomValue = myArray [Math.floor (Math.random () * myArray.length)]; */

function getHand() {
    var randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )