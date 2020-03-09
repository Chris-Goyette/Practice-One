/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0 //we set correct to 0 cuz this is the starting point. -me

// 2. Store the rank of a player
let rank; //we declare the variable but not assign anything yet cuz this will change. -me

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

/* THE FOLLOWING COMMENT IS ME 
- We prompt the user a question and store their response in the variable question1 and so on.
- Then need create an if statements in order to keep track of the correct answer
- Then use the "+=" or the "addition assignment operator" to add one to correct answers 
*/
const question1 = prompt("What do I like drinking every morning?"); 
if (question1 === "coffee") {
  correct += 1; 
}
const question2 = prompt("What do I like to eat at the movies?"); 
if (question2 === "popcorn") {
  correct += 1; 
}
const question3 = prompt("What does Taylor and I like to eat for lunch?"); 
if (question3 === "sushi") {
  correct += 1; 
}
const question4 = prompt("What does Taylor and I like to eat on Sundays?"); 
if (question4 === "icecream") {
  correct += 1; 
}
const question5 = prompt("What's my cats name?"); 
if (question5 === "pepper") {
    correct +=1; 
}



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

//The following sets the rank variable based on the number of correct answers -me
if (correct === 5) {
  rank = "Gold"; 
} else if (correct >= 3) {
  rank = "Silver"; 
} else if (correct >= 1) {
  rank = "Bronze"; 
} else {
  rank = "No Rank"; 
} 


// This selects the Main element -me
const main = document.querySelector("main"); 

// The below displays the info on the webpage. -me
main.innerHTML = 
`<h1>You answered ${correct} out of 5 questions!</h1>
<p><strong>Rank:</strong> ${rank}</p>`










