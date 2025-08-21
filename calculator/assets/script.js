
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultDiv = document.getElementById("result");


const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multBtn = document.getElementById("multBtn");
const divideBtn = document.getElementById("divideBtn");


function calculate(operation) {
  let n1 = parseFloat(num1.value);
  let n2 = parseFloat(num2.value);
  let result = "";

  if (isNaN(n1) || isNaN(n2)) {
    result = "Zəhmət olmasa ədəd daxil edin!";
  } else {
    switch(operation) {
      case "plus":
        result = n1 + n2;
        break;
      case "minus":
        result = n1 - n2;
        break;
      case "mult":
        result = n1 * n2;
        break;
      case "divide":
        result = (n2 !== 0) ? (n1 / n2) : "Sıfıra bölmək olmaz!";
        break;
    }
  }

  resultDiv.innerText = "Nəticə: " + result;
}

// Event-lər
plusBtn.addEventListener("click", () => calculate("plus"));
minusBtn.addEventListener("click", () => calculate("minus"));
multBtn.addEventListener("click", () => calculate("mult"));
divideBtn.addEventListener("click", () => calculate("divide"));
