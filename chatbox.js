// 1. The questions array contains objects with questions, options, correct answers, and feedback messages.
let questions = [
    {
        question: "Do you feel happy?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    // Add other questions and answers here
    {
        question: "What is the capital city of France?",
        options: {
            a: "Paris",
            b: "Berlin",
            c: "Moscow",
            d: "New York"
        },
        correctAnswer: "a",
        correctResponse: "Correct!",
        incorrectResponse: "Incorrect, try again!"
    },
    {
        question: "What is the capital city of Germany?",
        options: {
            a: "Paris",
            b: "Berlin",
            c: "Moscow",
            d: "New York"
        },
        correctAnswer: "b",
        correctResponse: "Correct!",
        incorrectResponse: "Incorrect, try again!"
    },
    {
        question: "What year are we in?",
        options: {
            a: "2000",
            b: "2024",
            c: "2036",
            d: "2026"
        },
        correctAnswer: "d",
        correctResponse: "Correct!",
        incorrectResponse: "Incorrect, try again!"
    },
     
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
displayQuestion();

// 2. The displayQuestion function creates and appends an element for the current question in the chat container.
function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let optionsHTML = Object.keys(currentQuestion.options)
    .map(key => `${key}. ${currentQuestion.options[key]}`)
    .join("<br>");

  let botResponse = document.createElement("div");
  botResponse.classList.add("message");
  botResponse.innerHTML = `<strong>ChatBot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;
  chatContainer.appendChild(botResponse);
}

// Optional helper
function scrollChatContainerToBottom() {
  let chatContainer = document.getElementById("chat-container");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 3. The event listener for the form prevents default submit, processes user response, checks if correct, and displays feedback.
chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let userResponse = userInput.value.toLowerCase();

  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
  chatContainer.appendChild(userMessage);

  let currentQuestion = questions[currentQuestionIndex];
  let botResponse = document.createElement("div");
  botResponse.classList.add("message");
  botResponse.innerHTML = `<strong>ChatBot:</strong> `;

  if (userResponse === currentQuestion.correctAnswer) {
    botResponse.innerHTML += currentQuestion.correctResponse;
  } else {
    botResponse.innerHTML += currentQuestion.incorrectResponse;
  }

  chatContainer.appendChild(botResponse);

  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  userInput.value = "";
  displayQuestion();

  scrollChatContainerToBottom();
});