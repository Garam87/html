const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.querySelector(".result");

function plus() {
    let sum = Number(num1.value) + Number(num2.value);
    result.innerText = "결과값" + sum;

}