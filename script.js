// script.js

document.getElementById("chatbot-icon").addEventListener("click", toggleChatbot);
document.getElementById("close-chatbot").addEventListener("click", toggleChatbot);
document.getElementById("whatsapp-button").addEventListener("click", function() {
    var phoneNumber = "9742007311"; // Replace with your WhatsApp number
    var whatsappLink = `https://wa.me/${phoneNumber}?text=Hello%20I%20need%20dental%20care%20assistance.`;
    window.open(whatsappLink, "_blank");
});

function toggleChatbot() {
    var chatbotContent = document.getElementById("chatbot-content");
    var chatbotIcon = document.getElementById("chatbot-icon");

    if (chatbotContent.style.display === "none" || chatbotContent.style.display === "") {
        chatbotContent.style.display = "block";
        chatbotIcon.style.display = "none";
    } else {
        chatbotContent.style.display = "none";
        chatbotIcon.style.display = "flex";
    }
}
