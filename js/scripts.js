$(document).ready(function() {
  $("form#quest").submit(function(event) {
    event.preventDefault();

    var tally = {
      "t":0, "j":0, "g":0
    };

    var answers = [
      $("#weather").find(":selected").val(),
      $("#tourism").find(":selected").val(),
      $("#culture").find(":selected").val(),
      $("#eating").find(":selected").val(),
      $("#exercise").find(":selected").val(),
    ];

    for (i in answers) {
      var currentAnswer = answers[i];
      tally[currentAnswer]++;
    }

    if (tally["t"] > tally["j"] && tally["t"] > tally["g"]) {
    $(".thailand").show();
    $(".japan").hide();
    $(".greenland").hide();
    window.scrollTo(0,document.body.scrollHeight);


    } else if (tally["j"] > tally["g"] && tally["j"] > tally["t"]) {
    $(".japan").show();
    $(".thailand").hide();
    $(".greenland").hide();
    window.scrollTo(0,document.body.scrollHeight);


    } else if (tally["g"] > tally["t"] && tally["g"] > tally["t"]) {
    $(".greenland").show();
    $(".japan").hide();
    $(".thailand").hide();
    window.scrollTo(0,document.body.scrollHeight);


    }
  });
});
