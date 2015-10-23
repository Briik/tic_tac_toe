$(document).ready(function() {
  console.log("jQuery working...");

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
      $(this).css("color", "white");
    };
    TheGame();
  });

function TheGame(){
//
//
//THE GAME
//$(".square")[i].attributes.style --> "margin:​ 4px;​ color:​ blue;​"
//or "red;" instead of "blue"
//
//The square text has no style color before being clicked.
  console.log("The game is running");
  var squareArray = $(".square");
  // var winner;
  var startingPosition = 0;
  var rowOneStart = squareArray[startingPosition].textContent;
  var startingPositionRow2 = startingPosition + 3;
  var rowTwoStart = squareArray[startingPositionRow2].textContent;
  var startingPositionRow3 = startingPositionRow2 + 3;
  var rowThreeStart = squareArray[startingPositionRow3].textContent;
  // var styleOfSquare = squareArray[startingPosition].attributes.style;
  // var addThisForColor = '.textContent.substr(20, 4)';
  // var colorOfstartingPosition = styleOfSquare.textContent.substr(20, 4);
  // var nextToStartingPosition = styleOfSquare.textContent.substr(14, 16) = (startingPosition + 1);
// Row 1
  // if ((colorOfstartingPosition === true) && (colorOfstartingPosition === squareArray[startingPosition + 1].attributes.style.textContent.substr(20, 4)) && (colorOfstartingPosition === squareArray[startingPosition + 2].attributes.style.textContent.substr(20, 4))) {
  if ((rowOneStart === squareArray[startingPosition + 1].textContent) && (rowOneStart === squareArray[startingPosition + 2].textContent)) {
    alert("Player " + rowOneStart + " wins!");
    console.log("The game is complete");
  };
  if ((rowTwoStart === squareArray[startingPositionRow2 + 1].textContent) && (rowTwoStart === squareArray[startingPositionRow2 + 2].textContent)) {
    alert("Player " + rowTwoStart + " wins!");
    console.log("The game is complete");
  };
  if ((rowThreeStart === squareArray[startingPositionRow3 + 1].textContent) && (rowThreeStart === squareArray[startingPositionRow3 + 2].textContent)) {
    alert("Player " + rowThreeStart + " wins!");
    console.log("The game is complete");
  };
  //Add this function later!
  //$("#winnerDisplay").html("The winner is " + winner + "!");
}
});
