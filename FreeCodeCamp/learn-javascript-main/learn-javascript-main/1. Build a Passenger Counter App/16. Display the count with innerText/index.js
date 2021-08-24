// grab the count-el element, store it in a countEl variable
var countEl = document.getElementById("count-el")

var count = 0


function increment() {
    count = count + 1
    countEl.innerText = count
    // set countEl's innerText to the count
}



