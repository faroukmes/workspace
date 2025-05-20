console.log(document.body);
const hour = new Date().getHours();
/* document.body.bgColor = "blue"; */
document.body.style.color = "black";
document.body.style.textAlign = "center";
const title = document.getElementById('big-text');
title.style.color = "green";
const paragraph = document.querySelector(".paragraph");
paragraph.style.fontSize = "25px";
const changable = document.querySelector(".change");
const button = document.querySelector("#change-color");
button.onclick = function () {
    changable.classList.toggle("change");
}