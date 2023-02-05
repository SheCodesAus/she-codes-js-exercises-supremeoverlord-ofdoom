window.onload = function() {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    
    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    speechBubbleElement.appendChild(messageBox);
    messageBox.id = "message-box";

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
}


function showMessage() {
    let message = document.getElementById("message-text").value;
    let name = document.getElementById("name-text").value;
    let nameAndMessage = (`${name}'s message: ${message}`)
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = nameAndMessage;
}

