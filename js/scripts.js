$(document).ready(function() {
  $("form#quest").submit(function(event) {
    event.preventDefault();

    var japantotal = 0;
    var thailandtotal = 0;
    var greenlandtotal = 0;


    var answers = [
      $("#weather").find(":selected").val(),
      $("#tourism").find(":selected").val(),
      $("#culture").find(":selected").val(),
      $("#eating").find(":selected").val(),
      $("#exercise").find(":selected").val(),
    ];

    for (i in answers) {
      var currentAnswer = answers[i];
      if (currentAnswer == 'j') {
        japantotal++;
      } else if (currentAnswer == 't') {
        thailandtotal++;
      } else if (currentAnswer == 'g') {
        greenlandtotal++;
      }
    }


    if (thailandtotal > japantotal && thailandtotal > greenlandtotal) {
    $(".thailand").show();
    $(".japan").hide();
    $(".greenland").hide();
    window.scrollTo(0,document.body.scrollHeight);


    } else if (japantotal > greenlandtotal && japantotal > thailandtotal) {
    $(".japan").show();
    $(".thailand").hide();
    $(".greenland").hide();
    window.scrollTo(0,document.body.scrollHeight);


  } else if (greenlandtotal > thailandtotal && greenlandtotal > thailandtotal) {
    $(".greenland").show();
    $(".japan").hide();
    $(".thailand").hide();
    window.scrollTo(0,document.body.scrollHeight);


    }
  });
});
