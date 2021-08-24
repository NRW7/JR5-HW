var sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
var greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (var i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}