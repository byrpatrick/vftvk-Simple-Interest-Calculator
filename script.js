function compute() {
  var principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Type a positive and greater than zero value");
    document.getElementById("principal").focus();
    return false;
  }
  var rate = document.getElementById("rate").value;
  var n_years = document.getElementById("years").value;
  var interest = (principal * rate * n_years) / 100;
  var year = new Date().getFullYear() + parseInt(n_years);
  document.getElementById("result").innerHTML =
    "If you deposit <mark>" +
    principal +
    "</mark>,<br>at an interest rate of <mark>" +
    rate +
    "%</mark>.<br>You will receive an amount of <mark>" +
    interest +
    "</mark>,<br>in the year <mark>" +
    year +
    "</mark><br>";
  return true;
}

function updateRate() {
  var ratevalue = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = ratevalue + "%";
}
