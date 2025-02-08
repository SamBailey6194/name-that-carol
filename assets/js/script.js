// Global variables
let currentQuestionIndex = 0;
let answersCorrect = 0;
let answersWrong = 0;
const maxQuestions = 10;
const numberHighscores = 10;
const highScores = "highscores";

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
  JSON.parse(localStorage.setItem("leaderbaord", highScores)) ?? [];
}

/**
 * Checks the highscore
 */
function checkHighScore(score) {
  // Generate the array of the scores in local storage
  // If no scores yet ?? will give a default empty array
  const highScores = JSON.parse(localStorage.getItem("leaderboard")) ?? [];
  const lowestScore = highScores[numberHighscores - 1]?.score ?? 0;

  if (score > lowestScore) {
    saveHighScore(score, highScores);
    showHighScores();
  }
}

/**
 * Saving highscore
 */
function saveHighScore(score, highScores) {
  const username = localStorage.getItem("username");
  const newScore = { username, score };

  // Adds to list of high scores
  highScores.push(newScore);

  // Sorts the high scores list
  highScores.sort((a, b) => b.score - a.score);

  // Saves list to local storage
  localStorage.setItem("leaderboard", JSON.stringify(highScores));
}

/**
 * Reveal leaderboard
 */
function showHighScores() {
  // Gets the highest scores array from local storage
  // If no scores yet ?? will give a default empty array
  const userScores = JSON.parse(localStorage.getItem(highestScore)) ?? [];
  // Gets the leaderboard section from HTML
  const leaderboard = document.getElementById("leaderboard");

  // Adding the scores and usernames to the leaderboard
  leaderboard.innerHTML = userScores
    .map((score) => `<li>${username} = ${score}</li>`)
    .join("");
}
