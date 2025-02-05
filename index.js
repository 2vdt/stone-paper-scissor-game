 //declair  a veriable 
let userScore =0;   
let compScore =0;
//acsses class or id
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// Generate computer's choice randomly from "rock", "paper", or "scissors"
const genCompChoice = () => {
  // Create an array of options
  const options = ["rock", "paper", "scissors"];
  // Generate a random index between 0 and 2 (inclusive)
  const randIdx = Math.floor(Math.random() * 3);
  // Return the option at the randomly generated index
  return options[randIdx];
};

// Handle the case of a draw
const drawGame = () => {
  // Update the message to indicate a draw
  msg.innerText = "Game was Draw. Play again.";
  // Set the message background color to a specific color (likely dark blue)
  msg.style.backgroundColor = "#081b31";
};

// Determine the winner and update the score and message
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // Increment the user's score
    userScore++;
    // Update the user's score display
    userScorePara.innerText = userScore;
    // Display a winning message with the user's and computer's choices
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    // Set the message background color to green
    msg.style.backgroundColor = "green";
  } else {
    // Increment the computer's score
    compScore++;
    // Update the computer's score display
    compScorePara.innerText = compScore;
    // Display a losing message with the user's and computer's choices
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    // Set the message background color to red
    msg.style.backgroundColor = "red";
  }
};

// Main game logic
const playGame = (userChoice) => {
  // Generate the computer's choice
  const compChoice = genCompChoice();

  // Check for a draw
  if (userChoice === compChoice) {
    // Call the drawGame function to handle the draw
    drawGame();
  } else {
    // Determine the winner based on the choices
    let userWin = true;
    if (userChoice === "rock") {
      // Rock beats scissors, but loses to paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Paper beats rock, but loses to scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // Scissors beats paper, but loses to rock
      userWin = compChoice === "rock" ? false : true;
    }
    // Call the showWinner function to display the result
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listeners to each choice button
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Get the user's choice from the button's ID
    const userChoice = choice.getAttribute("id");
    // Start the game with the user's choice
    playGame(userChoice);
  });
});