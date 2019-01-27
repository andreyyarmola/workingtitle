const nextName = document.getElementById("resetButton");

function generateword() {
  var text = "";
  //var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var consonants = "BCDFGHJKLMNPRSTVWXZ";
  var vowels = "AEIOU"
  var wordlength = Math.floor(Math.random() * 4) + 2;

  for (var i = 0; i < wordlength; i++)
    //text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += consonants.charAt(Math.floor(Math.random() * consonants.length)) +
    vowels.charAt(Math.floor(Math.random() * vowels.length));
    document.getElementById("businessName").innerHTML = text;
}

//document.getElementById("resetButton").addEventListener("click", generateword);
window.addEventListener("load",generateword)
nextName.addEventListener("click",generateword)
