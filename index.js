function calcFibonacci (n) {

  /*

  this is recursive implementation --> bad!

  if (n == 1 || n == 2) {
    return 1;
  } else {
    return calcFibonacci(n-1) + calcFibonacci(n-2);
  }
  */

  if (n == 1 || n == 2) {
    return 1;
  } else {
    var pre = 1;
    var prepre = 1;
    actual = 2;
    for (i = 3; i < n; i++) {
      prepre = pre;
      pre = actual;
      actual = pre + prepre;
    }
    return actual;
  }
}

function initFibo() {
  var n = parseInt(document.getElementById("number").value);
  document.getElementById("number").value = "";
  if (!n) {
    alert("Please make sure you enter a number greater than 0!");
    return;
  }
  var startDate = new Date();

  document.getElementById("result").innerHTML = "Fibonacci(" + n + ") = " + calcFibonacci(n);

  var endDate   = new Date();
  var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

  document.getElementById("timetaken").innerHTML = "It took " + seconds + " seconds to calculate!";

  document.getElementById("result").style.padding = "20px";
  document.getElementById("timetaken").style.padding = "20px";
  document.getElementById("timetaken").style.color = "rgb(255,255,255,0.5)";
}

// Get the input field
var input = document.getElementById("number");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});
