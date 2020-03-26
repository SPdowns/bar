$(document).ready(function() {
  var age=parseInt(prompt=("Hi, how old are you?"));

  if (age >= 21) {
    $('drinks').show();
  }
});