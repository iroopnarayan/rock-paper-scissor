let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choose");
const msg=document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");
const userSelect=document.querySelector("#user-choice");
const compSelect=document.querySelector("#comp-choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  //generate computer choice
};

const drawGame = () => {
 msg.innerHTML="Game was draw"; 
 console.log("Game was draw.");
msg.style.backgroundColor="aqua";
};

const showWinner=(userWin)=>{
    if(userWin){
        msg.innerHTML="You win!! Next move";
        console.log("You win!")
        usersc.innerText++;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText="you lose!! try again";
        console.log("you lose!");
        compsc.innerText++;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  userSelect.innerText=`You chooses ${userChoice}`;
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);
  compSelect.innerText=`comp. chooses ${compChoice}`;

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choose) => {
  choose.addEventListener("click", () => {
    const userChoice = choose.getAttribute("id");
    playGame(userChoice);
  });
});
