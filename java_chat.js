// Éléments DOM
const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Fonction pour afficher un message dans le chat
function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.innerText = message;
    chatOutput.appendChild(messageElement);
}

// Fonction pour envoyer une requête au LLM
async function sendMessageToLLM(question) {
    appendMessage("user", question); // Affiche la question dans le chat
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer YOUR_API_KEY", // Remplacez par votre clé API OpenAI
            },
            body: JSON.stringify({
                model: "text-davinci-003", // Ou le modèle LLM que vous utilisez
                prompt: question,
                max_tokens: 200,
            }),
        });
        const data = await response.json();
        const answer = data.choices[0].text.trim();
        appendMessage("bot", answer); // Affiche la réponse du bot dans le chat
    } catch (error) {
        console.error("Erreur avec le chatbot :", error);
        appendMessage("bot", "Je suis désolé, une erreur est survenue. Veuillez réessayer.");
    }
}

// Soumettre une question prédéfinie au chargement de la page
window.addEventListener("load", () => {
    const predefinedQuestion = "Que retenir de Conrad ?";
    sendMessageToLLM(predefinedQuestion);
});

// Envoyer un message à partir de l'entrée utilisateur
sendBtn.addEventListener("click", () => {
    const question = userInput.value;
    if (question.trim() !== "") {
        sendMessageToLLM(question);
        userInput.value = ""; // Réinitialise le champ de saisie
    }
});
