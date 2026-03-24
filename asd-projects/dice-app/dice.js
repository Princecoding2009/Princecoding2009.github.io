$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 75)
    .css("width", 75)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 212.5)
    .css("left", 212.5)
    .appendTo("#die");

  function makeDot(top, left, elementID) {
    $("<div>")
      .css("height", 75)
      .css("width", 75)
      .css("background-color", "black")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .css("border-radius", "50%")
      .appendTo(elementID);
  }

  function rollDie(dieId) {
    $(dieId).empty();
    console.log("clicked");
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
  }
  function handleClick() {
    rollDie("#die");
  }
  $("#die").on("click", handleClick);
});
