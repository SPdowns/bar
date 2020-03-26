$(document).ready(function() {
  var age=parseInt(prompt("Hi, how old are you?"));

  if (age >= 21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});