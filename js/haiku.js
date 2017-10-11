// function Haiku(){}
//
// Haiku.prototype.lineCheck = function(poem){
//   let lines = poem.split("\n");
//   return lines.length === 3;
// };
//

class Haiku{
  constructor(){
  }

  lineCheck(poem){
    let lines = poem.split("\n");
    return lines.length === 3;
  }

  vowelCount(word) {
    let letters = word.split("");
    let vowels = 0;

    letters.forEach(function(letter){
      if (letter.match(/[aeiou]/gi)) {
        vowels += 1;
      }
    });
    return vowels;
  }
}

exports.haikuModule = Haiku;
