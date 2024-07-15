function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value;

    if (userMessage.trim() === "") {
        return;
    }

    var chatBox = document.getElementById("chat-box");

    var userDiv = document.createElement("div");
    userDiv.innerHTML = `<div class="chat-message user">${userMessage}</div>`;
    chatBox.appendChild(userDiv);

    // Simulate bot response (in a real scenario, this would be an API call or more complex logic)
    setTimeout(function() {
        var botDiv = document.createElement("div");
        botDiv.innerHTML = `<div class="chat-message bot">I'm just a demo bot. Please implement my responses!</div>`;
        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }, 500);

    userInput.value = "";
}