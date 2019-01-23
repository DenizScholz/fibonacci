function calcFibonacci (n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return calcFibonacci(n-1) + calcFibonacci(n-2);
  }
}

function initFibo() {
  var n = parseInt(document.getElementById("number").value);
  if (!n) {
    alert("Please make sure you enter a number greater than 0!");
  }
  var startDate = new Date();

  document.getElementById("result").innerHTML = "Fibonacci(" + n + ") = " + calcFibonacci(n);

  var endDate   = new Date();
  var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

  document.getElementById("timetaken").innerHTML = "It took " + seconds + "s to calculate!";

  document.getElementById("result").style.padding = "20px";
  document.getElementById("timetaken").style.padding = "20px";
  document.getElementById("timetaken").style.color = "rgb(255,255,255,0.5)";
}
