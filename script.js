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
  });
//
//
//THE GAME
//$(".square")[i].attributes.style --> "margin:​ 4px;​ color:​ blue;​"
//or "red;" instead of "blue"
  var squareArray = $(".square");
  var winner;
  var startingPosition = 0;
  var styleOfSquare = squareArray[startingPosition].attributes.style;
  var addThisForColor = "textContent.substr(20, 4)";
  var colorOfstartingPosition = styleOfSquare.textContent.substr(20, 4);
  // var nextToStartingPosition = styleOfSquare.textContent.substr(14, 16) = (startingPosition + 1);
// Row 1
  if ((colorOfstartingPosition === squareArray[startingPosition + 1].attributes.style.addThisForColor) && (colorOfstartingPosition === squareArray[startingPosition + 2].attributes.style.addThisForColor)) {
    alert("Player " + squareArray[startingPosition].html + " wins!");
  }

  //Add this function later!
  //$("#winnerDisplay").html("The winner is " + winner + "!");
});
