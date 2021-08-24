// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count


var countEL = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEL.innerText = count
    console.log(count)
}


console.log(count)