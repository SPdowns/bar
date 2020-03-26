$(document).ready(function() {
  var over21=confirm("Are you over 21?"));

  if (over21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});