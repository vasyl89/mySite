function myFunction() {
    var x1 = document.getElementById("input_1").value;
    var operation= document.getElementById("input_2").value;
    var x2 = document.getElementById("input_3").value;
    var result = document.getElementById("input_4");
if (operation == "*") {
  result.value = x1 * x2;
} else if (operation == "+") {
  result.value = Number(x1) + Number(x2);
} else if (operation == "-") {
  result.value = x1 - x2;
} else if (operation == "/") {
  result.value = x1 / x2;
} else {
  alert("You have entered unsupported operation.");
  result.value = "undefined";
}
}