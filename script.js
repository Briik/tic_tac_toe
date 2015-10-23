$(document).ready(function() {
  console.log("jQuery working...");
  var placeholder = "_";
  for (var i = 0; i < 9; i++) {
    $("#rules").after($('<div />', {
      "class": "square",
      "html": placeholder,
    }));
    console.log("I'm making the board!");
  };
  var squareArray = $(".square");
  squareArray.css("margin", "4px");
  var clickCounter = null;
  $(".square").on("click", function(evt) {
    evt.preventDefault();
    clickCounter = clickCounter + 1;
    if (clickCounter === 1) {
      $(this).html("X");
      $(this).css("color", "red");
      $("#rules").html("Current player: O");
    };
    if (clickCounter === 2) {
      $(this).html("O");
      $(this).css("color", "blue");
      $("#rules").html("Current player: X");
    };
    if (clickCounter > 2) {
      clickCounter = 0;
    };
    if (clickCounter === 0) {
      clickCounter = 1;
      $(this).html("X");
      $(this).css("color", "red");
      $("#rules").html("Current player: O");
    };
    TheGame();
  });
  var numWins = 0;
  // var Xwins = 0;
  // var YWins = 0;
  function logWin() {
    console.log("The game is complete");
    numWins++;
    console.log("numWins: " + numWins);
    setTimeout(function() {
      window.location.reload();
    }, 5000);
    $("#rules").html("Resetting in 5 seconds...");
    return numWins++;
  };

  function TheGame() {
    console.log("The game is running");
    var squareArray = $(".square");
    var startingPosition = 0;
    var rowOneStart = squareArray[startingPosition].textContent;
    var startingPositionRow2 = startingPosition + 3;
    var rowTwoStart = squareArray[startingPositionRow2].textContent;
    var startingPositionRow3 = startingPositionRow2 + 3;
    var rowThreeStart = squareArray[startingPositionRow3].textContent;
    var colomnTwoStart = squareArray[1].textContent;
    var colomnThreeStart = squareArray[2].textContent;
    //Starting with Rows...
    if ((rowOneStart != placeholder) && (rowOneStart === squareArray[startingPosition + 1].textContent) && (rowOneStart === squareArray[startingPosition + 2].textContent)) {
      alert("Player " + rowOneStart + " wins!");
      logWin();
    };
    if ((rowTwoStart != placeholder) && (rowTwoStart === squareArray[startingPositionRow2 + 1].textContent) && (rowTwoStart === squareArray[startingPositionRow2 + 2].textContent)) {
      alert("Player " + rowTwoStart + " wins!");
      logWin();
    };
    if ((rowThreeStart != placeholder) && (rowThreeStart === squareArray[startingPositionRow3 + 1].textContent) && (rowThreeStart === squareArray[startingPositionRow3 + 2].textContent)) {
      alert("Player " + rowThreeStart + " wins!");
      logWin();
    };
    //Now starting Colomns...
    if ((rowOneStart != placeholder) && (rowOneStart === rowTwoStart) && (rowOneStart === rowThreeStart)) {
      alert("Player " + rowOneStart + " wins!");
      logWin();
    };
    if ((colomnTwoStart != placeholder) && (colomnTwoStart === squareArray[startingPositionRow2 + 1].textContent) && (colomnTwoStart === squareArray[startingPositionRow3 + 1].textContent)) {
      alert("Player " + colomnTwoStart + " wins!");
      logWin();
    };
    if ((colomnThreeStart != placeholder) && (colomnThreeStart === squareArray[startingPositionRow2 + 2].textContent) && (colomnThreeStart === squareArray[startingPositionRow3 + 2].textContent)) {
      alert("Player " + colomnThreeStart + " wins!");
      logWin();
    };
    //Now the Diagonals...
    if ((rowOneStart != placeholder) && (rowOneStart === squareArray[startingPositionRow2 + 1].textContent) && (rowOneStart === squareArray[startingPositionRow3 + 2].textContent)) {
      alert("Player " + rowOneStart + " wins!");
      logWin();
    };
    if ((colomnThreeStart != placeholder) && (colomnThreeStart === squareArray[startingPositionRow2 + 1].textContent) && (colomnThreeStart === rowThreeStart)) {
      alert("Player " + colomnThreeStart + " wins!");
      logWin();
    };
  }
  // function randomMove(){
  //
  // }
});
