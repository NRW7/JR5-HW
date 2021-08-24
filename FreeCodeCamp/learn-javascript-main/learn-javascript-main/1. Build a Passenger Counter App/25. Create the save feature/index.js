// 1. Grab the save-el paragrah and store it in a variable called saveEl
var countEl = document.getElementById("count-el")
var count = 0
var saveEl = document.getElementById("save-el")

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}



function save() {
    var countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr

    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}


