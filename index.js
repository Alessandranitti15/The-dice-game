
var randomNumber1 = Math.floor(Math.random()*6+1);

var randomNumber2 = Math.floor(Math.random()*6+1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}

var randomImg = "dice" + randomNumber1 + ".png";

var randomImg2 = "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImg);

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImg2);
