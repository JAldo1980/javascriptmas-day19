import JSConfetti from "js-confetti";
const word = "santa";
const wordArr = word.split("");
const wordDisplay = document.getElementById("word-display");
document.addEventListener("submit", handleGuess);

function renderSpaces() {
  const wordHtml = wordArr.map(() => {
    return `<span class="letter">-</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}
renderSpaces();

function renderGuess(arr) {
  const wordHtml = arr.map((letter) => {
    const guessColor = letter === "-" ? "red" : "green";
    return `<span class="letter ${guessColor}">${letter}</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}

function handleGuess(e) {
  e.preventDefault();

  let currentState = [];
  let input = document.getElementById("user-input");
  let guess = input.value.toLowerCase();
  if (!guess.trim()) return;
  const guessArr = guess.split("");
  guessArr.forEach((letter, index) => {
    if (letter === word[index]) {
      currentState.push(letter);
    } else {
      currentState.push("-");
    }
  });

  renderGuess(currentState);
  checkWin(guess);
  input.value = "";
}

function checkWin(guess) {
  if (word === guess) {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["❄️", "🎄", "🎅"],
      emojiSize: 50,
      confettiNumber: 60,
      confettiRadius: 6,
    });
    jsConfetti.addConfetti();
  }
}
