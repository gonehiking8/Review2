$(document).ready(functon() {
  $("form#quest").submit(function(event) {
    event.preventDefault();

    var tally = {
      "t":0, "j":0, "g":0
    };

    var answers = [
      $("#weather").find(":selected").val();
      $("#tourism").find(":selected").val();
      $("#culture").find(":selected").val();
      $("#eating").find(":selected").val();
      $("#exercise").find(":selected").val();
    ];

    for (i in answers) {
      var currentAnswer = answers[i];
      tally[currentAnswer]++;
    }

    if (tally["t"] > tally["j"] && tally["t"] > tally["g"]) {
    $(".thailand").show();

    } else if (tally["j"] > tally["g"] && tally["j"] > tally["t"]) {
    $(".japan").show();

    } else (tally["g"] > tally["t"] && tally["g"] > tally["t"]) {
    $(".greenland").show();
    }
  });
});
