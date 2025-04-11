$(document).ready(function () {
  function sendMessage() {
    const $input = $("#chatInput");
    const $chatBox = $("#chatBox");
    const userMessage = $input.val().trim();

    if (userMessage === "") return;

    // Append user message
    const $userBubble = $('<div class="text-end my-1"><span class="badge bg-secondary"></span></div>');
    $userBubble.find("span").text(userMessage);
    $chatBox.append($userBubble);

    // Generate bot reply
    const botReply = getBotReply(userMessage);
    const $botBubble = $('<div class="text-muted small my-1"></div>').text(`🤖 ${botReply}`);
    $chatBox.append($botBubble);

    // Auto scroll to bottom
    $chatBox.scrollTop($chatBox[0].scrollHeight);

    // Clear input
    $input.val("");
  }

  function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
      return "Hi there! 😊 How can I assist you with your health today?";
    } else if (message.includes("doctor")) {
      return "You can book a doctor appointment or start a chat from the 'General Services' section.";
    } else if (message.includes("symptom")) {
      return "Try our Symptom Checker to get a quick assessment!";
    } else if (message.includes("emergency")) {
      return "If this is an emergency, please use the 'Emergency Services' section or call your local emergency number.";
    } else {
      return "I'm here to help with anything related to your wellbeing. 😊 Try asking about doctors, symptoms, or features.";
    }
  }

  // Trigger on button click
  $("#sendBtn").on("click", sendMessage);

  // Trigger on Enter key
  $("#chatInput").on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      sendMessage();
    }
  });
});
