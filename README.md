# Name That Carol

**Name That Carol** The aim of the website is to provide users with a way to test their knowledge of Christmas Songs in a fun and engaging way that encourages them to invite their friends to see if they can beat their score.

The decision to make this website is due to the user stories found [here](userstory.md).

![Responsive Mockup](insert link)

## Features 

Below are the features for the website and at the end is listed any features that weren't able to be implemented but would be with more time.

### Existing Features

- __Home Page__

  - __Header__

    - 
    
    ![Homepage Header](insert link)

### Features Left to Implement

- Create a login database by asking for user to create a password when they create their username so people can create permanent accounts which would allow them to:
  - Track their scores and comapre to past attempts
  - Compare to various leaderboards
  - Add friends
  - Access future quizzes we may implement
- Add a leaderboard that is stored on a database and allow the below as leaderboards they can look at:
  - Friends
  - Local
  - National
  - Global

## Testing 

The website has been tested; including internal (buttons and navbar) & external links, responsive design, and forms; on Opera GX, Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari.

### Fixed Bugs

- Buttons were showing at the wrong point, so I added an event listener with a class list to the relevant buttons
- Quiz Data was not shuffling due to missing [ ] at the correct points
- Show Guide and Go to Quiz buttons on username page were needing to be double clicked due to onclick in HTML and addEventListeners in the JS file, tidied up the function reveal() which is onclick for the buttons in HTML file
- Quiz wasn't revealing itself after showing user their final score using Go to Quiz button in scoreboard section, created an onclick function of restart that accesses reset and reveal functions in JS
- Answer was undefined after user submitted answer due to answer variable wasn't in the selectAnswer function
- Options when clicked were submitting the answer rather than submit answer button submitting the answer due to the element being a button, therefore it was changed to a radio list and label
- Clicking the name of the song wasn't selecting it as the answer due to incorrect attributes assigned to the label
- Submit answer was returning an error and increase the wrong score when it was clicked without an answer being selected. Added an if statement and return to exit the function to stop the score from updating and tell the user to select an answer

### Unfixed Bugs

- 

### Links and Actions

| Location | Link / Button | Expected Action | Pass / Fail |
| --- | --- | --- | --- |
| Username Creation | Username not entered | Tell user to fill in the field | Pass |
| Username Creation | Username Entered and Submit Clicked | Reveal message that tells user, username was successfully created and guide and quiz buttons | Pass |
| Username Creation | Username Entered and user hit enter | Reveal message that tells user, username was successfully created and guide and quiz buttons | Pass |
| Username Creation | If username is stored locally already | Reveal welcome back message and guide and quiz button | Pass |
| Username Creation | Click Show Guide | Hide username creation and reveal guide | Pass |
| Username Creation | Click Go to Quiz | Hide username creation and reveal quiz | Pass |
| Guide Div accessed from Username Creation | Click Go to Quiz | Hide guide and reveal quiz with question 1 at top and question with options button below | Pass |
| Guide Div accessed from Quiz div | Click Go to Quiz | Hide guide and reveal quiz with the last question the answer was on and the options button below | Pass |
| Quiz Div | Click Show Guide | Reveal guide | Pass |
| Quiz Div | Click Submit Answer | If user hasn't selected an answer an alert box appears telling the user to select an answer | Pass |
| Quiz Div | Click Submit Answer | Submit selected answer and if answer is correct an alert box appears congratulating the user and correct score goes up by 1 | Pass |
| Quiz Div | Click Submit Answer | Submit selected answer and if answer is wrong an alert box appears telling the user what the correct answer was and wrong score goes up by 1 | Pass |
Quiz Div | When final question has been answered | Hide question area and only show the scoreboard with a button Restart Quiz appearing | Pass |
Scoreboard | When restart quiz is clicked | Reveal question area again above scoreboard with question 1 and the options, reset scoreboard to 0 for correct and wrong | Pass |


### Validator Testing 

- Lighthouse Score
  - Below you can see my lighthouse scores tested on Chrome Incognito Mode

  - Homepage

  ![Lighthouse - Homepage](insert link)

- HTML
  - No errors were returned when passing through the official W3C Validator, see images below for each page.

    - Homepage
      
    ![W3C validator](insert link)
    

- CSS
  - Put CSS through Autoprefixer to ensure it works on all browsers
  - No errors were found when passing through the official Jigsaw validator, see links below.
  
   ![(Jigsaw) validator](insertlink)

## Deployment

This section desribes how I deployed my website

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the "Settings" tab 
  - Under "Code and automation" selected "Pages"
  - Ensure "Deploy from branch" is selected
  - In the "Branch" section "main" was selected as the branch then "/root" was selected
  - Click "save" and the GitHub Pages was deployed

The live link can be found here - INSERT LINK

## Cloning

This section describes how other software developers can clone the code to edit it elsewhere

- To clone the code so you can edit it yourself please follow the below:
PLEASE NOTE THIS IS FOR WINDOWS COMMAND LINE
  - In the GitHub repository click the dropdown for '<> code'
  - Ensure you are on 'local' and have 'https' selected, then copy the URL by clicking the symbol next to the URL box
  - Once copied in the search bar on your taskbar type in 'cmd' and open 'Command Prompt' or 'Comman Line'
  - In command line type 'git clone' and paste the url next to it
  - In file explorer locate 'This PC' down the side, then 'local disk' (usually the :C drive), then 'users', then your user, then find the folder called 'photo-guides'
  - You now have access to all the code and files locally
  - If you want to edit the code, please ensure you creat a new branch in the software you are using enabling us to potentially see the edits you have done before uploading them to the original GitHub repository
  - To create a new branch that depends on the software you are using, please google how to do this for your software

If you aren't on windows please google how to get a GitHub repository stored locally on your OS

 
## Credits 

Below are my credits for where I got inspiration for some of the code, where the content came from and where media is from.

### Code

- The border-box CSS code has been inspired by Love Maths
- The scoring design has been inspired by Love Maths
- The HTML structure and JS structure for the quiz has been inspired by Code Pickers blog post on Medium found [here](https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2).
- Some of the other JS coding concepts has been used from Love Maths as well
- The username creation code has been inspired by a geekforgeeks article found [here](https://www.geeksforgeeks.org/how-to-create-a-textfield-to-enter-a-username-and-save-it-on-a-website/)
- Got guidance in how to use fisher-yates algorithim from this video [here](https://www.youtube.com/watch?v=FGAUekwri1Q)

### Content 

- All icons are from font awesome
- All fonts are from Google Fonts
- Quiz questions were made up by myself
