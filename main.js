var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);

function suckMyHairyCock() {
  document.getElementById("cunt").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("cunt").innerHTML = "<div id='leftnut'><div id='rightnut'></div></div>";
    document.getElementById("cunt").style.opacity = "1";
  }, 500);
  setTimeout(function() {
    document.getElementById("rightnut").style.width = 300 * .99 + "px";
  }, 750);
  setTimeout(function() {
    document.getElementById("rightnut").style.transition = "none";
    document.getElementById("rightnut").style.width = "300px";
  }, 20000);
  setTimeout(function() {
    document.getElementById("cunt").style.opacity = "0";
  }, 20500);
  setTimeout(function() {
    document.getElementById("cunt").style.transition = "none";
    document.getElementById("cunt").style.opacity = "1";
    document.getElementById("cunt").innerHTML = "<p>Fuck you</p>";
  }, 21000);
  setTimeout(function() {
    document.getElementById("cunt").style.opacity = "0";
    document.getElementById("cunt").style.transition = "all .5s ease";
    document.getElementById("cunt").innerHTML = "<p id='finalshit'>Congratulations!<br>You've wasted <br>30 seconds of your time!</p>";
    document.getElementById("cunt").style.opacity = "1";
    confetti.render();
  }, 21150);
}