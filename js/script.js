document.addEventListener("DOMContentLoaded", function() {

  let wordToGuess = "";
  const word = document.querySelector(".word");
  const start = document.getElementById("start");
  const userWord = document.getElementById("response");
  const message = document.getElementById("message");
  const score = document.getElementById("score");
  let counter = 0;
  let startTime = null;
  let endTime = null;
  const timer = document.getElementById("timer");
  const restart = document.getElementById("restart");

  start.addEventListener("click", function(event) {
    event.preventDefault();
    fetch("https://trouve-mot.fr/api/random")
    .then((response) => response.json())
    .then((data) => {
      word.innerHTML = `<p>${data[0].name}</p>`;
      wordToGuess = data[0].name;
    });
  });

  userWord.addEventListener('focus', function() {
    startTime = new Date();
  });

  userWord.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      endTime = new Date();
      submit(event);
    }
  });

  function submit(event) {
    event.preventDefault();
    if (userWord.value === wordToGuess) {
      message.innerText = "You got it right!";
      let time = (endTime - startTime) / 1000;
      timer.innerText = `Ton temps est de ${time} secondes`;
      counter += 1;
    } else {
      message.innerText = "You got it wrong! Try again";
    }
    score.innerText = counter;
    restart.classList.remove("d-none");
  }

  restart.addEventListener('click', function() {
    startTime = null;
    endTime = null;
    restart.classList.add("d-none");
    timer.innerText = "";
    message.innerText = "";
  });

});
