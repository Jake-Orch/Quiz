# Quiz
In this project i was tasked with creating a quiz, in which the user can save their score to the local server with their own initials. There was no starter code provided. The quiz i decided to create is a planetary quiz. I created the timer loop and made it go on for 60 seconds, provided the user either gets no answers incorrect (this deducts 5 seconds of their timer) or completes the quiz withing the time allocated. I then used data attributes to allow me to know if the lcicked answer is indeed correct or incorrect. and using this information I made the click hide the current question and display the next one, and depending on if the answer is correct or not, add a point to the users score and show the clicked element in green or deduct 5 seconds from the timer and display the clicked element in red. at the end of the quiz the user is shown a form where they can put their initials and score to be saved to the local server. I added an if statement to the click function which allows them to store their scores, which makes sure that the score provided is indeed the score they got in the quiz.  
## ScreenShot
[./assets.quiz.PNG]
## How to access the page
Deployed Webpage: https://jake-orch.github.io/Quiz/
GitHub Repository: https://github.com/Jake-Orch/Quiz