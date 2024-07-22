document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello World");

  const wordsList = ["apple", "banana", "cherry", "date", "elderberry"];
  const userWord = document.getElementById("response");
  console.log(userWord);
  const button = document.getElementById("submit");
  console.log(button);
  const score = document.getElementById("score");
  let counter = 0;


  button.addEventListener("click", function(event) {
    event.preventDefault();
    for (let i = 0; i < wordsList.length; i++) {
      if (userWord.value === wordsList[i]) {
        console.log("You got it right!");
        counter += 1;
        break;
      }
    }
    score.innerHTML = counter;
  });
});
