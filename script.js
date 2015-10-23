$(document).ready(function() {
  console.log("jQuery working");

  for (var i = 0; i < 9; i++) {
    $("#rules").after($('<div />', {
      "class": "square",
      "html": "?",
    }));
    console.log("I'm making the board!");
  };
  var squareArray = $(".square");
  squareArray.css("margin", "4px");
  var clickCounter = 0;
  $(".square").on("click", function(evt) {
      evt.preventDefault();
      clickCounter = clickCounter + 1;
      if (clickCounter === 1) {
        $(this).html("X");
        $(this).css("color", "red");
      };
      if (clickCounter === 2) {
        $(this).html("O");
        $(this).css("color", "blue");
      };
      if (clickCounter > 2) {
        clickCounter = 0;
      };
      if (clickCounter === 0) {
        $(this).html("?");
      };
      var squareArray = $(".square");
      //Winning Row 1
      if ((squareArray[0].html === squareArray[1].html) && (squareArray[1].html === squareArray[3].html)) {
        var winner = squareArray[0].innerHTML;
        //The winner annoucement is now working...
        // if (winner != "?") {alert("Player " + winner + " wins!")};
      };
    })
    //Add this function later!
    //$("#winnerDisplay").html("The winner is " + winner + "!");
});
