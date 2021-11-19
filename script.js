document.querySelector(".between").textContent = "Between 1 and 30";
document.querySelector("h1").textContent = "Correctly Guess My Number!";
document.querySelector(".again").textContent = "Try Again";

document.querySelector(".again").style.display = "none";
let secretNumber = Math.trunc(Math.random() * 30) + 1;

// const randomColor = Math.floor(Math.random() * 16777215)
//   .toString(16)
//   .padStart(6, "0");
let score = 10;
// let higherScore = 0;

const displayMessage = function (message) {
  document.querySelector("message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct ! You guessed it";
    document.querySelector(".body").style.backgroundColor = "#60b347";
    document.querySelector(".again").style.display = "block";
    document.querySelector(".number").textContent = secretNumber;
    
  } else {
    document.querySelector(".message").textContent = "Oops Try Again!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
