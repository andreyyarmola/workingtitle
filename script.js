const nextName = document.getElementById("resetButton");

var languages = [generatewordtype1, generatesyllable, generatewordtype2];

function generatewordtype1() {
  var text1 = "";
  var consonants = "BCDFGHJKLMNPRSTVWXZ";
  var vowels = "AEIOU"
  var word1length = Math.floor(Math.random() * 3) + 2;

  for (var i = 0; i < word1length; i++)
    //text += possible.charAt(Math.floor(Math.random() * possible.length));
    text1 += consonants.charAt(Math.floor(Math.random() * consonants.length)) +
    vowels.charAt(Math.floor(Math.random() * vowels.length));
    return text1;
}

function generatesyllable() {
  var syllable = "";
  var possiblesyllablestart = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z",
                    "CR", "BR", "DR", "FR", "GR", "PR", "SR", "TR", "VR", "WR", "CHR", "SHR",
                    "CH", "PH", "SH", "TH", "WH", "SW",
                    //"A", "E", "I", "O", "U"
                  ];
  var syllablestart = possiblesyllablestart[Math.floor(Math.random() * possiblesyllablestart.length)];

  var vowelmiddle = ["A", "E", "I", "O", "U", "EE", "EA", "OO", "OU", "AU"];
  var syllablemiddle = vowelmiddle[Math.floor(Math.random() * vowelmiddle.length)];

  var consonantend = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z",
                    "CK", "RK", "LK", "NK", "SK", "RF", "LF", "NG", "FT", "LT", "NT", "RT", "ST", "TT", "XT",
                    "CH", "PH", "SH", "TH", "LL", "SS", "TT", "FF", "ND", "RD", "LD", "ND",
                    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
                  ];
  var syllableend = consonantend[Math.floor(Math.random() * consonantend.length)];
    syllable = syllablestart + syllablemiddle + syllableend;
    return syllable;
}

function generatewordtype2() {
  var text2 = "";
  var word2length = Math.floor(Math.random() * 2) + 1;
  for (var i = 0; i < word2length; i++)
  text2 += generatesyllable();
  return text2;

}
function generateword() {
  var word;
  word = languages[Math.floor(Math.random() * languages.length)]();
  document.getElementById("businessName").innerHTML = word;
}

//document.getElementById("resetButton").addEventListener("click", generateword);
window.addEventListener("load",generateword);
nextName.addEventListener("click",generateword);
addEventListener("keydown",generateword);
