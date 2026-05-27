'use strict';

//declaring Varibale
const diceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const newGame = document.querySelector('.btn--new');

//instant changing values
document.querySelector('.player--0 .score').textContent = 0;
document.querySelector('.player--1 .score').textContent = 0;

diceImg.classList.add("hidden");

let playerMainScore = document.querySelector('.player--active .score');

let currentScore = 0;
let playerCscore = document.querySelector(
  '.player--active .current .current-score',
);
let playing = true;

//roll dice event
diceBtn.addEventListener('click', function () {
  if (playing) {
    //selecting active player
    const player = document.querySelector('.player--active');
    console.log(player);
    playerMainScore = document.querySelector('.player--active .score');
    playerCscore = document.querySelector(
      '.player--active .current .current-score',
    );

    //generating random number
    let randomNum = Math.floor(Math.random() * 6 + 1);
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${randomNum}.png`;

    //when randomnum === 1 and if not
    if (randomNum === 1) {
      currentScore = 0;
      playerCscore.textContent = currentScore;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    } else {
      currentScore += randomNum;
      playerCscore.textContent = currentScore;
    }
  }
});

//hold btn event
holdBtn.addEventListener('click', function () {
  if (playing) {
    let mainScore = Number(playerMainScore.textContent);
    mainScore += currentScore;
    playerMainScore.textContent = mainScore;
    currentScore = 0;
    playerCscore.textContent = currentScore;

    if (mainScore >= 30) {
      document.querySelector(".player--active").classList.add("player--winner");
      diceImg.classList.add("hidden");
      playing = false;
    } else {
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

newGame.addEventListener('click', function () {
  playing = true;
  document.querySelector('.player--0 .score').textContent = '0';
  document.querySelector('.player--1 .score').textContent = '0';
  document.querySelector('.player--0 .current-score').textContent = '0';
  document.querySelector('.player--1 .current-score').textContent = '0';
  document.querySelector(".player--active").classList.remove("player--winner");
  if (!player0.classList.contains('.player--active')) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
});
