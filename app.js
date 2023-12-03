const btnRules = document.querySelector(".rulesButton");
const btnClose = document.querySelector(".close-btn");
const Rules = document.querySelector(".rules");

// Show/Hide Rules
btnRules.addEventListener("click", () => {
  Rules.classList.toggle("show-rules");
});
btnClose.addEventListener("click", () => {
  Rules.classList.toggle("show-rules");
});

const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissor",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissor",
  },
];
const choiceButtons = document.querySelectorAll(".buttons");
const gameDiv = document.querySelector(".mid");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");

const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");

const playAgainBtn = document.querySelector(".play-again");

const scoreNumber1 = document.querySelector(".computerScore");
const scoreNumber2 = document.querySelector(".yourScore");
let myScore = 0;
let compScore = 0;

// Game Logic
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}

function displayResults(results) {
  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
        <choice class="${results[idx].name}">
          <img src="${results[idx].name}.svg" alt="${results[idx].name}" />
        </choice>
      `;
    }, idx * 500);
  });

  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userWins) {
      resultText.innerText = "YOU WIN, AGAINST PC";
      resultDivs[0].classList.toggle("winner");
      mScore();
    } else if (aiWins) {
      resultText.innerText = "YOU LOSE, AGAINST PC";
      resultDivs[1].classList.toggle("winner");
      cScore();
    } else {
      resultText.innerText = "TIE UP";
    }
    // resultWinner.classList.toggle("hidden");
    // resultsDiv.classList.toggle("show-winner");
  }, 500);
}

function cScore() {
  compScore += 1;
  scoreNumber1.innerText = compScore;
}

function mScore() {
  myScore += 1;
  scoreNumber2.innerText = myScore;
}

function isWinner(results) {
  return results[0].beats === results[1].name;
}

playAgainBtn.addEventListener("click", () => {
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");

  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  resultText.innerText = "";
});
