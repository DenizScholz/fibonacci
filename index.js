function calcFibonacci (n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return calcFibonacci(n-1) + calcFibonacci(n-2);
  }

  console.log(result)

}

function initFibo() {
  var n = parseInt(document.getElementById("number").value);
  document.getElementById("result").innerHTML = "F(" + n + ") = " + calcFibonacci(n);

}
