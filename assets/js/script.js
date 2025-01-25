/**
 * Questions, options and answered stored here
 */
const quizData = [
  {
    question:
      "It is Christmas, no need to be afraid. We are to spread a smile of joy and pray for the other ones. While you pray we are to feed the world too and let them know it is Christmas.",
    options: [
      "Blue Christmas",
      "Jingle Bell Rock",
      "Do they know it's Christmas",
      "Santa Baby",
    ],
    answer: "Do they know it's Christmas",
  },
  {
    question:
      "There is not a lot I want for Christmas, only one thing I need. Santa will not make me happy. Please make my wish come true. I definitely will not ask for much this Christmas. Please just come and hold me tight. I just want to see my baby.",
    options: [
      "All I want for Christmas",
      "It's Beginning to look a lot like Christmas",
      "Feliz Navidad",
      "White Christmas",
    ],
    answer: "All I want for Christmas",
  },
  {
    question:
      "On Christmas Eve Sinatra was swinging and we kissed on a corner and danced through the night. The boys of the NYPD were singing Galway Bay and the bells rang out for Christmas day.",
    options: [
      "Santa Claus is Coming to Town",
      "Fairytale of New York",
      "Merry Xmas Everybody",
      "I wish it could be Christmas everyday",
    ],
    answer: "Fairytale of New York",
  },
  {
    question:
      "There was no crib. But little Lord Jesus lay down his head. The stars looked down on Him while he was asleep. The cattle were lowing as He awoke with no crying.",
    options: [
      "O Come All Ye Faithful",
      "We Three Kings",
      "Silent Night",
      "Away in a Manger",
    ],
    answer: "Away in a Manger",
  },
  {
    question:
      "The angels sing and give glory to a new born King! There is a lot of joy to be proclaimed for Christ is born in Bethlehem. Christ is adored and is the everlasting Lord. Born so no man may die.",
    options: [
      "Hark the Herald",
      "Little Donkey",
      "While Shepherds Watched",
      "Joy to the World",
    ],
    answer: "Hark the Herald",
  },
  {
    question:
      "Israel is captive and mourns in lonely exile. But rejoice for Emmanuel shall come. He ordered all things and gave us a path of knowledge. Israel received the law and were in awe. They were expecting a branch from Jesse's family.",
    options: [
      "O Little Town of Bethlehem",
      "O Come, O Come Emmanuel",
      "In the Bleak Midwinter",
      "The First Noel",
    ],
    answer: "O Come, O Come Emmanuel",
  },
];

/**
 * Validating username creation
 */
document.addEventListener("DOMContentLoaded", () => {
  // Check if a username is already saved and display it
  let savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    document.getElementById("message").textContent = `Welcome back, ${savedUsername}! Give the quiz another try and beat your best score!`;
    document.getElementById("guide-btn").classList.remove("hidden");
    document.getElementById("quiz-btn").classList.remove("hidden");
  }

  // Form submission handler
  document.getElementById("formuser").addEventListener("submit", function (event) {
    // Prevents form from reloading the page
    event.preventDefault();

    // Get entered username
    const usernameInput = document.getElementById("username").value;

    //Save username in localStorage
    localStorage.setItem("username", usernameInput);

    // display a message and buttons
    document.getElementById("message").textContent = `Username saved: ${usernameInput}! Read the guide first and then enjoy the quiz!`;
    document.getElementById("guide-btn").classList.remove("hidden");
    document.getElementById("quiz-btn").classList.remove("hidden");
  });

  // Allow user to hit enter key when typing in username
  document
    .getElementById("username")
    .addEventListener("keydown", function (event) {
      if (event === "Enter") {
        usernameInput;
      }
    });
});

/**
 * Reveal the div the user asks for when clicking relevant button
 */
function reveal(divName) {
    document.getElementById("createuser").classList.add("hidden");
    document.getElementById("guide").classList.add("hidden");
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("lboard").classList.add("hidden");

    if (divName == "quiz")
      showCurrentQuestion();

    document.getElementById(divName).classList.remove("hidden");
}

/**
 * Searches leaderboard
 */

// Fisher-Yates Algorithim to help randomize order of questions

/**
 * Reveal questions in random order
 */
var currentQuestionIndex = 0;
var answersCorrect = 0;
var answersWrong = 0;

function restart() {
  currentQuestionIndex = 0;
  answersCorrect = 0;
  answersWrong = 0;
  showCurrentQuestion();
}

function moveToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showCurrentQuestion();
  } else {
    showResult();
  }
}

function showCurrentQuestion() {
  // Increase question number we are on
  document.getElementById("questionno").innerText = (currentQuestionIndex + 1);

  // Reveal random question
  let currentQuestion = quizData[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;

  // Reveal random options
  let optionsContainerElement = document.getElementById("options");
  optionsContainerElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    let radio = document.createElement("input");
    radio.type = 'radio';
    radio.name = 'answer';
    radio.id = 'answer' + index;
    radio.value = option;

    let label = document.createElement("label");
    label.htmlFor = 'answer' + index;
    label.innerText = option;

    optionsContainerElement.appendChild(radio);
    optionsContainerElement.appendChild(label);
    optionsContainerElement.appendChild(document.createElement("br"));
  });
}

/**
 * Checks answer user gives to the correct answer
 */
function selectAnswer(e) {
    let answer = quizData[currentQuestionIndex].answer;

    if (e.target.innerText === answer) {
      alert("Well done! You got it right!");
      answersCorrect++;
    } else {
      alert(`Unlucky you got it wrong. The answer was ${answer}`);
      answersWrong++;
    }

    updateScoreDisplay();
    moveToNextQuestion();
}

/**
 * Redisplay the score
 */
function updateScoreDisplay() {
  document.getElementById("correct").innerText = answersCorrect;
  document.getElementById("wrong").innerText = answersWrong;
}

/**
 * Shows result of overall quiz when they finish
 */
function showResult() {
  document.getElementById("quiz-area").innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${answersCorrect}/${quizData.length}</p>`;
}
