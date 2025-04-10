// first create an array that stores the three options that we have
let choices = ["ROCK", "PAPER", "SCISSORS"];

// Find the button that corresponds to the user's choice of rock
const rockButton = document.querySelector("#rock-button");

/*Whenver the user clicks on the Rock button, register the way of 0 
and pass this value to the callback function called check() */
rockButton.addEventListener("click", function chooseRock() {
  check(0);
});

// Find the button that corresponds to the user's choice of paper
const paperButton = document.querySelector("#paper-button");

/*Whenver the user clicks on the Paper button, register the way of 1 
and pass this value to the callback function called check() */
paperButton.addEventListener("click", function choosePaper() {
  check(1);
});

// Find the button that corresponds to the user's choice of scissors
const scissorsButton = document.querySelector("#scissors-button");

/*Whenver the user clicks on the Scissors button, register the way of 2 
and pass this value to the callback function called check() */
scissorsButton.addEventListener("click", function chooseScissors() {
  check(2);
});

/* Check function is the main function that 
 compares the two choices and declares winner */

function check(myChoice) {
  /* Since we are playing with computer and not another human, 
  we need a way to create automatic choice for the computer. 
  To do that, we use the Math.random function.
  The following code will automatically create a choice 
  for computer of value between 0 to 2 each time you run the code.  */
  let computerChoice = Math.floor(Math.random() * 3);

  // Find the element where we can display the selection or user and computer choice
  const sel = document.querySelector("#selection");

  // using innerHTML property we display both choices to the user
  sel.innerHTML = `<p id="my-choice"> Your pick: <span class="${choices[
    myChoice
  ].toLowerCase()}">${choices[myChoice]} </span> </p>
  <p id="computer-choice"> Computer's pick: <span class="${choices[
    computerChoice
  ].toLowerCase()}"> ${choices[computerChoice]}</span></p>`;

  // Find the element where we can display the result
  const res = document.querySelector("#result");

  // if user's choice match with computer's it is a tie
  /* 
  Since rock crushes scissors, scissors cut paper and paper covers rock. 
  So whoever chose the correct option of the two, is the winner. 
  */

  if (choices[myChoice] === choices[computerChoice]) {
    res.innerHTML = `<span class="tie">It's a tie! </span> `;
  } else if (
    (choices[myChoice] === "ROCK" && choices[computerChoice] === "SCISSORS") ||
    (choices[myChoice] === "PAPER" && choices[computerChoice] === "ROCK") ||
    (choices[myChoice] === "SCISSORS" && choices[computerChoice] === "PAPER")
  ) {
    res.innerHTML = `<span class="win">You win! </span> `;
  } else {
    res.innerHTML = `<span class="loose">You loose! </span> `;
  }
}
