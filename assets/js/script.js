// Global variables
let currentQuestionIndex = 0;
let answersCorrect = 0;
let answersWrong = 0;
const maxQuestions = 10;
// Gets the leaderboard from local storage
const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

/**
 * Validating username creation
 */
document.addEventListener("DOMContentLoaded", () => {
  let savedUsername = localStorage.getItem("username");

  // Check if a username is already saved and display it
  if (savedUsername) {
    document.getElementById(
      "message"
    ).textContent = `Welcome back, ${savedUsername}! Give the quiz another try and beat your best score!`;
    document.getElementById("guide-btn").classList.remove("hidden");
    document.getElementById("quiz-btn").classList.remove("hidden");
  }

  // Form submission handler
  document
    .getElementById("formuser")
    .addEventListener("submit", function (event) {
      // Prevents form from reloading the page
      event.preventDefault();

      // Get entered username
      const usernameInput = document.getElementById("username").value;

      //Save username in localStorage
      localStorage.setItem("username", usernameInput);

      // display a message and buttons
      document.getElementById(
        "message"
      ).textContent = `Username saved: ${usernameInput}! Read the guide first and then enjoy the quiz!`;
      document.getElementById("guide-btn").classList.remove("hidden");
      document.getElementById("quiz-btn").classList.remove("hidden");
    });

  reset();
});

/**
 * Reveal the div the user asks for when clicking relevant button
 */
function reveal(divName) {
  document.getElementById("createuser").classList.add("hidden");
  document.getElementById("guide").classList.add("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("lboard").classList.add("hidden");

  // Enables restart function to work
  if (divName === "quiz") {
    showCurrentQuestion();
    document.getElementById("quiz-area").classList.remove("hidden");
  }

  document.getElementById(divName).classList.remove("hidden");
}

/**
 * Allows restart quiz button to restart the quiz when clicked and user
 * can do the quiz again
 */
function restart() {
  reset();
  reveal("quiz");
}

// Fisher-Yates Algorithim to help randomize order of questions and options
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

/**
 * Resets the quiz when necessary
 */
function reset() {
  currentQuestionIndex = 0;
  answersCorrect = 0;
  answersWrong = 0;
  updateScoreDisplay();
  shuffle(quizData);
  document.getElementById("next").classList.add("hidden");
  document.getElementById("reveal").classList.add("hidden");
}

/**
 * Function enabling user to move onto the next question
 */
function moveToNextQuestion() {
  currentQuestionIndex++;

  // Sets quiz length to be a m aximum of 10 questions
  if (
    currentQuestionIndex < quizData.length &&
    currentQuestionIndex < maxQuestions
  ) {
    showCurrentQuestion();
    document.getElementById("next").classList.add("hidden");
    document.getElementById("reveal").classList.add("hidden");
  } else {
    showResult();
  }
}

/**
 * Function that shows the question and options
 */
function showCurrentQuestion() {
  // Increase question number we are on
  document.getElementById("questionno").innerText = `${
    currentQuestionIndex + 1
  } / ${maxQuestions}`;

  // Reveal random question
  const currentQuestion = quizData[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;

  // Reveal random options
  shuffle(currentQuestion.options);
  const optionsContainerElement = document.getElementById("options");
  optionsContainerElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.type = "button";
    button.name = "answer";
    button.id = "answer" + index;
    button.classList.add("answer", "btn", "col-12", "col-sm-6", "col-md-4");

    optionsContainerElement.appendChild(button);

    button.addEventListener("click", selectAnswer);
  });
}

/**
 * Checks answer user gives to the correct answer
 */
function selectAnswer(e) {
  const correctAnswer = quizData[currentQuestionIndex].answer;
  const userAnswer = e.target;

  // Checks answer and updates score
  if (userAnswer.innerText === correctAnswer) {
    // display a message to tell the user they got it correct
    document.getElementById("reveal").textContent =
      "Well done! You got it right!";
    answersCorrect++;
  } else {
    // display a message to tell the they got it wrong and reveals correct answer
    document.getElementById(
      "reveal"
    ).textContent = `Unlucky you got it wrong. The answer was ${correctAnswer}`;
    answersWrong++;
  }

  document.getElementById("reveal").classList.remove("hidden");
  document.getElementById("next").classList.remove("hidden");

  updateScoreDisplay();

  // Stop user from submitting answer again
  stopAnswers();
}

/**
 * Stops user from submiting more answers
 */
function stopAnswers() {
  // Stop user from submitting answer again
  let button = document.getElementsByClassName("answer");
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
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
  document.getElementById("quiz-area").classList.add("hidden");
  document.getElementById("lboard").classList.remove("hidden");
  localStorage.setItem("score", answersCorrect);
  saveHighScore();
  showHighScores();
}

/**
 * Saving highscore
 */
function saveHighScore() {
  const username = localStorage.getItem("username");
  const score = localStorage.getItem("score");
  const newScore = { 
    name: username, 
    score: score 
  };

  // Adds to list of high scores
  leaderboard.push(newScore);

  // Sorts the high scores list
  leaderboard.sort((a, b) => b.score - a.score);

  // Only allows 10 highscores
  leaderboard.splice(10);

  // Saves list to local storage
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

/**
 * Reveal leaderboard
 */
function showHighScores() {
  // Adding the scores and usernames to the leaderboard
  document.getElementById("leaderbaord").innerHTML = leaderboard
    .map((score) => `<li>${score.username} = ${score.score}</li>`)
    .join("");
}
