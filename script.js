var number = document.querySelector("#number");
var inc1 = document.querySelector("#increment-1");
var dec1 = document.querySelector("#decrement-1");
var inc5 = document.querySelector("#increment-5");
var dec5 = document.querySelector("#decrement-5");
var resetButton = document.querySelector("#reset-button");

function increment1() {
  var x = Number(number.innerText);
    x += 1;
    number.innerText = x;
}

function decrement1() {
  var x = Number(number.innerText);
    x -= 1;
    number.innerText = x;
}

function increment5() {
  var x = Number(number.innerText);
    x += 5;
    number.innerText = x;
}

function decrement5() {
  var x = Number(number.innerText);
    x -= 5;
    number.innerText = x;
}

function reset() {
    number.innerText = 0;
}

inc1.addEventListener("click", increment1);
dec1.addEventListener("click", decrement1);
inc5.addEventListener("click", increment5);
dec5.addEventListener("click", decrement5);
resetButton.addEventListener("click", reset)
