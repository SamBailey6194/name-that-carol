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
    }

    // Form submission handler
    const form = document.getElementById('formuser');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents form from reloading the page

        // Get entered username
        const usernameInput = document.getElementById('username').value;

        //Save username in localStorage
        localStorage.setItem('username', usernameInput);

        // display a message
        message.textContent = `Username saved: ${usernameInput}! Read the guide first and then enjoy the quiz!`
    });
});

/**
 * Reveal the div the user asks for when clicking relevant button
 */
document.addEventListener("DOMContentLoaded", function () {
    const showGuide = document.getElementById("guide-btn");
    const showQuiz = document.getElementById("quiz-btn");
    const showLeaderboard = document.getElementById("lboard-btn");

    showGuide.addEventListener("click", function (e) {
            usernameDiv.classList.add("hidden");
            quizDiv.classList.add("hidden");
            guideDiv.classList.remove("hidden");
    })

    showQuiz.addEventListener("click", function (e) {
        usernameDiv.classList.add("hidden");
        guideDiv.classList.add("hidden");
        quizDiv.classList.remove("hidden");
})
})

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



/**
 * Reveal questions in random order
 */
function showQuestion() {

}

/**
 * Checks answer user gives to the correct answer
 */
function selectAnswer() {

}

/**
 * Increases correct score by 1 if user gets answer right
 */
function incrementScore() {

}

/**
 * Increases incorrect score by 1 if user gets answer right
 */
function incrementWrong() {

}

/**
 * Reveals an alert box to show the user if they got it right
 * if they got it wrong it tells them what the answer was
 */
function showResult() {

}