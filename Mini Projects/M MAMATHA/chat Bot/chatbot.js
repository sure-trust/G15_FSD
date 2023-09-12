const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");


let userMessage;
const API_KEY = "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";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined"> smart_toy </span> <p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        })
    }
    
let lastRequestTime = 0;
const cooldownPeriod = 3000; 

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
            messageElement.textContent = data.choices[0].message.content;
            // Handle the response here and append the chat
            
        })
        .catch((error) => {
            messageElement.classList.add("error");
            messageElement.textContent = "oops";

        }).finally(() => chatbox.scrollTo(0,chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim();

    if (!userMessage) return;
    chatInput.value ="";

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}
sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));



