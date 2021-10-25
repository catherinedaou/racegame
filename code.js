onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("button2", "click", function( ) {
  setPosition("image1", getXPosition("image1") - 7, getYPosition("image1"));
});
setPosition("image2", randomNumber(15, 100), 235);
setTimeout(function() {
  if (getXPosition("image1") < getXPosition("image2")) {
    playSound("assets/you won.mp3", false);
    setScreen("screen3");
  } else {
    playSound("assets/you lose.mp3", false);
    setScreen("screen4");
  }
}, 10000);
