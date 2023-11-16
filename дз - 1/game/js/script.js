let input = document.getElementById ("input");
let btn = document.getElementById("btn");
let check = document.getElementById("result");
let count = document.getElementById("attempt");


let item = 0;
let randNum = 1 + Math.floor(Math.random() * 20);
let userNum;

btn.onclick = function () {
  userNum = input.value;
  console.log(userNum, randNum);
  if (userNum > randNum) {
    check.textContent = "Не верно";
    item++;
    count.textContent = item;
  } else if (userNum < randNum) {
    check.textContent = "Не верно";
    item++;
    count.textContent = item;
  } else {
    check.textContent = "Верно";
    item++;
    count.textContent = item;
  }
}