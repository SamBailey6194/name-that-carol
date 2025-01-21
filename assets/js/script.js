/**
 * Reveal the div the user asks for when clicking relevant button
 */
function reveal() {
    const username = document.getElementById("createUser");
    const guide = document.getElementById("guide");
    const quiz = document.getElementById("quiz");
    const lboardReveal = document.getElementById("lboard");

    function revealUser() {
        if (username.style.display === 'none') {
            username.style.display = 'block'
        } else {
            username.style.display = 'none'
        }
    }

    function revealGuide() {
        if (guide.style.display === 'none') {
            guide.style.display = 'block'
        } else {
            guide.style.display = 'none'
        }
    }

}

/**
 * Questions, options and answered stored here
 */
const quizData = {

}

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