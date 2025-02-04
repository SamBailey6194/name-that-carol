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
  {
    question:
      "It is time to ask, are you hanging up a stocking on your wall? Because everybody is having fun look to the future now, its only just begun. Are you waiting for the family to arrive? Well maybe not this year. But we are hoping the snow will start to fall. Especially as ITS CHRISTMAS!!!",
    options: [
      "Merry Xmas Everybody",
      "Santa Claus is coming to Town",
      "Baby it's cold outside",
      "Do you hear what I hear?",
    ],
    answer: "Merry Xmas Everybody",
  },
  {
    question:
      "Christmas is a great time of year and it would be great if Christmas happened each day. Especially when the snowman brings the snow and that he puts a great big smile on somebodys face. The smile will lead to the kids starting to sing and the band begins to play. So let the bells ring out for Christmas.",
    options: [
      "Walking in the Air",
      "I Wish it could Be Christmas Everyday",
      "Mistletoe and Wine",
      "Step into Christmas",
    ],
    answer: "I Wish it could Be Christmas Everyday",
  },
  {
    question:
      "Can not wait to see those faces. Cos it has been so long. Just trying to pass the time away. As it is gonna take some time, but I will get there. Even though there are red lights all around. I take a look at the person next to me, and he is just the same. I have a thousand memories of you to help me get by.",
    options: [
      "Driving Home for Christmas",
      "Happy Xmas (War is Over)",
      "Stay Another Day",
      "Rudolph the Rednose Reindeer",
    ],
    answer: "Driving Home for Christmas",
  },
  {
    question:
      "There was a dusty road, but we gotta keep plodding along as we have a precious load. Through a winters night we aren't going to give up, Bethlehem is in sight. Ring out the bells, follow that star. We had a heavy day, but the journey's end is near, the star is guiding us, heaven is shining clear.",
    options: [
      "Little Donkey",
      "O Little Town of Bethlehem",
      "Once in Royal David's City",
      "Little Drummer Boy",
    ],
    answer: "Little Donkey",
  },
  {
    question:
      "We come bearing gifts and have traveled so far, following yonder star. Born a King on Bethlehem plain, gold I bring to crown Him again, over us all to reign. Frankincense I have to offer, incense is owed to a Deity high, we shall worship Him, God on high.",
    options: [
      "We Three Kings",
      "Good King Wenceslas",
      "For Unto Us a Child is Born",
      "In the Bleak Midwinter",
    ],
    answer: "We Three Kings",
  },
  {
    question:
      "The Lord has come, so let Earth receive her King. Every heart must prepare Him room, while heaven and nature sing. The saviour reigns. Mortal songs employ, while the fields and floods, rocks, hills and plains, repeat the sounding joy.",
    options: [
      "Joy to the World",
      "O Little Town of Bethlehem",
      "While Shepherd's Watched",
      "Silent Night",
    ],
    answer: "Joy to the World",
  },
];

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

// Global variables for question and answer functions
let currentQuestionIndex = 0;
let answersCorrect = 0;
let answersWrong = 0;

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

  if (currentQuestionIndex < quizData.length) {
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
  document.getElementById("questionno").innerText = currentQuestionIndex + 1;

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
  for (var i = 0; i < button.length; i++) {
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
}
