// Grab the welcome-el paragraph and store it in a variable called welcomeEl

var welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name

var name = "Nathaniel"

var greeting = "Greeting  "

// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name


// welcomeEl.innerText = welcomeEl.innerText + "emoji"
// welcomeEl.innerText += "emoji"