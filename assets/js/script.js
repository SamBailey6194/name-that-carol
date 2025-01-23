// Global variables for the different divs
const usernameDiv = document.getElementById("createuser");
const guideDiv = document.getElementById("guide");
const quizDiv = document.getElementById("quiz");
const lboardDiv = document.getElementById("lboard");

/**
 * Validating username creation
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check if a username is already saved and display it
    const savedUsername = localStorage.getItem('username');
    const message = document.getElementById('message');

    if (savedUsername) {
        message.textContent = `Welcome back, ${savedUsername}! Give the quiz another try and beat your best score!`;
        document.getElementById("guide-btn").classList.remove('hidden');
        document.getElementById("quiz-btn").classList.remove('hidden');
    }

    // Form submission handler
    const form = document.getElementById('formuser');
    form.addEventListener('submit', function (event) {
        // Prevents form from reloading the page
        event.preventDefault();

        // Get entered username
        const usernameInput = document.getElementById('username').value;

        //Save username in localStorage
        localStorage.setItem('username', usernameInput);

        // display a message and buttons
        message.textContent = `Username saved: ${usernameInput}! Read the guide first and then enjoy the quiz!`
        document.getElementById("guide-btn").classList.remove('hidden');
        document.getElementById("quiz-btn").classList.remove('hidden');
    });

    // Allow user to hit enter key when typing in username
    document.getElementById('username').addEventListener("keydown", function (event) {
        if (event === "Enter") {
            usernameInput
        }
    })
});

/**
 * Reveal the div the user asks for when clicking relevant button
 */
function reveal() {
    const showGuide = document.getElementById("guide-btn");
    const showQuiz = document.getElementById("quiz-btn");
    const showLeaderboard = document.getElementById("lboard-btn");
    const showGuide1 = document.getElementById("guide-btn1");
    const showQuiz1 = document.getElementById("quiz-btn1");
    const showQuiz2 = document.getElementById("quiz-btn2");

    // Reveal guide and hide username creation
    showGuide.addEventListener("click", function () {
        usernameDiv.classList.add("hidden");
        guideDiv.classList.remove("hidden");
    })

    // Reveal quiz and hide username creation
    showQuiz.addEventListener("click", function () {
        usernameDiv.classList.add("hidden");
        quizDiv.classList.remove("hidden");
    })

    // Reveal leaderboard and hide quiz
    showLeaderboard.addEventListener("click", function () {
        quizDiv.classList.add("hidden");
        lboardDiv.classList.remove("hidden");
    })

    // Reveal guide above quiz
    showGuide1.addEventListener("click", function () {
        guideDiv.classList.remove("hidden");
    })

    // Reveal quiz and hide guide
    showQuiz1.addEventListener("click", function () {
        guideDiv.classList.add("hidden");
        quizDiv.classList.remove("hidden");
    })

    // Reveal quiz and hide leaderboard
    showQuiz2.addEventListener("click", function () {
        lboardDiv.classList.add("hidden");
        quizDiv.classList.remove("hidden");
    })
}

/**
 * Searches leaderboard
 */


// Fisher-Yates Algorithim to help randomize order of questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random] = array[random], array[i]];
    }
};

/**
 * Questions, options and answered stored here
 */
const quizData = [{
        question: "It is Christmas, no need to be afraid. We are to spread a smile of joy and pray for the other ones. While you pray we are to feed the world too and let them know it is Christmas.",
        options: ["Blue Christmas", "Jingle Bell Rock", "Do they know it's Christmas", "Santa Baby"],
        answer: "Do they know it's Christmas"
    },
    {
        question: "There is not a lot I want for Christmas, only one thing I need. Santa will not make me happy. Please make my wish come true. I definitely will not ask for much this Christmas. Please just come and hold me tight. I just want to see my baby.",
        options: ["All I want for Christmas", "It's Beginning to look a lot like Christmas", "Feliz Navidad", "White Christmas"],
        answer: "All I want for Christmas"
    },
    {
        question: "On Christmas Eve Sinatra was swinging and we kissed on a corner and danced through the night. The boys of the NYPD were singing Galway Bay and the bells rang out for Christmas day.",
        options: ["Santa Claus is Coming to Town", "Fairytale of New York", "Merry Xmas Everybody", "I wish it could be Christmas everyday"],
        answer: "Fairytale of New York"
    },
    {
        question: "There was no crib. But little Lord Jesus lay down his head. The stars looked down on Him while he was asleep. The cattle were lowing as He awoke with no crying.",
        options: ["O Come All Ye Faithful", "We Three Kings", "Silent Night", "Away in a Manger"],
        answer: "Away in a Manger"
    },
    {
        question: "The angels sing and give glory to a new born King! There is a lot of joy to be proclaimed for Christ is born in Bethlehem. Christ is adored and is the everlasting Lord. Born so no man may die.",
        options: ["Hark the Herald", "Little Donkey", "While Shepherds Watched", "Joy to the World"],
        answer: "Hark the Herald"
    },
    {
        question: "Israel is captive and mourns in lonely exile. But rejoice for Emmanuel shall come. He ordered all things and gave us a path of knowledge. Israel received the law and were in awe. They were expecting a branch from Jesse's family.",
        options: ["O Little Town of Bethlehem", "O Come, O Come Emmanuel", "In the Bleak Midwinter", "The First Noel"],
        answer: "O Come, O Come Emmanuel"
    },
]

shuffle(quizData);

const questionElement = document.getElementById("question");
const optionElement = document.getElementById("options");
const answerButton = document.getElementById("answer");

/**
 * Reveal questions in random order
 */
function showQuestion() {

    // Increase question number we are on
    let oldQuestionNo = parseInt(document.getElementById('questionno').innerText);
    document.getElementById('questionno').innerText = ++oldQuestionNo;

    // Reveal random question
    questionElement.innerText = quizData.question;
    console.log(quizData.question);

    // Reveal random options
    optionElement.innerHTML = quizData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer());
    });
}

/**
 * Checks answer user gives to the correct answer
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData.answer;

    if (selectedButton.innerText === answer) {
        alert("Well done! You got it right!")
        incrementScore();
    } else {
        alert(`Unlucky you got it wrong. The answer was ${quizData.answer}`)
        incrementWrong();
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

/**
 * Increases correct score by 1 if user gets answer right
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
}

/**
 * Increases incorrect score by 1 if user gets answer right
 */
function incrementWrong() {
    let oldScore = parseInt(document.getElementById('wrong').innerText);
    document.getElementById('wrong').innerText = ++oldScore;
}

/**
 * Shows result of overall quiz when they finish
 */
function showResult() {
    quizData.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${oldScore}/${quizData.length}</p>`
}

showQuestion();