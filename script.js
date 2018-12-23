function generateword() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    document.getElementById("businessName").innerHTML = text;

  //return text;
}

console.log(generateword());
