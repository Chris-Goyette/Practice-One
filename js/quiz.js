/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0 

const answer1 = "coffee"; 
const answer2 = "popcorn"; 
const answer3 = "sushi"; 
const answer4 = "icecream"; 
const answer5 = "pepper"; 

// 2. Store the rank of a player
const rankOne = "Gold"; 
const rankTwo = "Silver"; 
const rankThree = "Bronze"; 
const noRank = "Sorry, you did not rank."

// 3. Select the <main> HTML element
const main = document.querySelector("main"); 

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const question1 = prompt("What do I like drinking every morning?"); 
const question2 = prompt("What do I like to eat at the movies?"); 
const question3 = prompt("What does Taylor and I like to eat for lunch?"); 
const question4 = prompt("What does Taylor and I like to eat on Sundays?"); 
const question5 = prompt("What's my cats name?"); 

if (question1 === answer1) {
  correctAnswers = 1; 
} 

if (question1 === answer1 && question2 === answer2 ) {
  correctAnswers = 2; 
} 

if (question1 === answer1 && question2 === answer2 && question3 === answer3) {
  correctAnswers = 3; 
} 

if (question1 === answer1 && question2 === answer2 && question3 === answer3 && question4 === answer4) {
  correctAnswers = 4; 
} 

if (question1 === answer1 && question2 === answer2 && question3 === answer3 && question4 === answer4 && question5 === answer5 ) {
  correctAnswers = 5; 
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAnswers === 5) {
  console.log("You earned the Gold Crown!"); 
} else if (correctAnswers === 3 || correctAnswers === 4) {
  console.log("You earned the Silver Crown!"); 
} else if (correctAnswers === 1 || correctAnswers === 2 ) {
  console.log ("You earned the Bronze Crown!"); 
} else {
  console.log("You earned no crown."); 
} 

let rank = 

// 6. Output results to the <main> element
main.innerHTML = ` 
<h1>You answered ${correctAnswers} out of 5 questions!</h1>
<p>Rank: TBD</p>
`










