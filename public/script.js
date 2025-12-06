
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const chatContainer = document.getElementById('chatContainer');
const chatToggle = document.getElementById('chatToggle');
const closeButton = document.getElementById('closeButton');
const notificationBadge = document.getElementById('notificationBadge');

let isOpen = false;


function toggleChat() {
  isOpen = !isOpen;
  if (isOpen) {
    chatContainer.classList.add('open');
    notificationBadge?.classList.add('hidden');
    // Small delay so focus works after animation starts
    setTimeout(() => userInput?.focus(), 150);
  } else {
    chatContainer.classList.remove('open');
  }
}

chatToggle.addEventListener('click', toggleChat);
closeButton.addEventListener('click', toggleChat);


function addMessage(content, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

  const messageContent = document.createElement('div');
  messageContent.className = 'message-content';
  messageContent.innerHTML = `<strong>${isUser ? 'You' : 'Bot'}:</strong> ${escapeHtml(content)}`;

  messageDiv.appendChild(messageContent);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) typingIndicator.remove();
}


chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

 
  if (!isOpen) toggleChat();

  addMessage(message, true);
  userInput.value = '';
  userInput.disabled = true;
  sendButton.disabled = true;

  showTypingIndicator();

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    removeTypingIndicator();

    if (!res.ok) {
      
      let errText = 'Failed to get response';
      try {
        const err = await res.json();
        errText = err.error || err.message || errText;
      } catch (_) {}
      addMessage(`Error: ${errText}`);
      return;
    }

    const data = await res.json();
    addMessage(data.reply || 'No reply received.');
  } catch (err) {
    removeTypingIndicator();
    addMessage(`Network error: ${err.message || err}`);
  } finally {
    userInput.disabled = false;
    sendButton.disabled = false;
    userInput.focus();
  }
});


window.addEventListener('keydown', (e) => {
  if (e.altKey && e.key.toLowerCase() === 'c') toggleChat();
});

 ch
if (chatContainer.classList.contains('open')) {
  userInput.focus();
}
