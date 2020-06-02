function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(history) {
  document.getElementById("history-value").innerHTML = history;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(strin) {
  document.getElementById("output-value").innerHTML = getFormattedString(strin);
}
function getFormattedString(strin) {
  var n = Number(strin);
  return n.toLocaleString("en");
}
function getOriginalNumber(strin) {
  return Number(strin.replace(/,/g, ""));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = getOriginalNumber(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(getFormattedString(output));
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      output = getOriginalNumber(getOutput()).toString();
      history = history + output; //history is a string, output is a string
      if (this.id == "=") {
        var result = eval(history);
        printOutput(result);
        printHistory("");
      } else {
        history = history + this.id; //history is a string, output is a string
        printHistory(history);
        printOutput("");
      }
      //}
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = getOriginalNumber(getOutput());
    if (output != NaN) {
      //if output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
