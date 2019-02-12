var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);

var messageInterval;
var messageIndex = 0;

function makeid(max) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < max; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function suckMyHairyCock() {
    if(document.getElementById("cuntdickass").value == "" ) {
        alert("woah woah you little smelly, that zip code doesn't exist. Mind reading capabilities will be available in version 2.1!");
        return;
    }


  document.getElementById("cunt").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("cunt").innerHTML = "<div id='leftnut'><div id='rightnut'></div></div><br><div id='message'></div>";
    messageInterval = setInterval(messageLoop,3000);
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
    document.getElementById("cunt").innerHTML = "<p>F u</p>";
  }, 21000);
  setTimeout(function() {
    document.getElementById("cunt").style.opacity = "0";
    document.getElementById("cunt").style.transition = "all .5s ease";
    document.getElementById("cunt").innerHTML = "<p id='finalshit'>Congratulations!<br>You've wasted <br>30 seconds of your time!</p>";
    document.getElementById("cunt").style.opacity = "1";
    confetti.render();
    clearInterval(messageLoop);
  }, 21150);
}

var messages = [
    "Grabbing info from Google api...",
    "Factoring in past snow days...",
    "Consulting the ECASD superindent...",
    "Accounting for significant figures...",
    "",
    ""
];


function messageLoop() {
    document.getElementById("message").innerText = messages[messageIndex];
    document.getElementById("message").style.opacity = "1";

    setTimeout(function() {
        document.getElementById("message").style.opacity = "0";
    },2000);

    messageIndex += 1;
}

document.getElementById("bottomtitty").innerHTML = "Google Weather API Key: "+ makeid(15) +"<br>Sesh ID: " + makeid(7);