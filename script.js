const nextName = document.getElementById("resetButton");

function generateword() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var wordlength = Math.floor(Math.random() * 11) + 5;

  for (var i = 0; i < wordlength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    document.getElementById("businessName").innerHTML = text;
}

//document.getElementById("resetButton").addEventListener("click", generateword);
window.addEventListener("load",generateword)
nextName.addEventListener("click",generateword)
