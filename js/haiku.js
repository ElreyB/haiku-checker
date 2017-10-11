export class Haiku{
  constructor(){
    this.countTotal = 0
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
    this.countTotal += vowels;
  }

  silenceCheck(word) {
    let letters = word.split("");
    if (letters[letters.length-1] == "e") {
      this.countTotal -= 1;
      letters.pop();
    }
  }

  doubleVowel(word) {
    let letters = word.split("");

    for(var i = 0; i < letters.length; i++){
      if (letters[i].match(/[aeiou]/gi) && letters[i+1].match(/[aeiou]/gi)){
        this.countTotal -= 1;
      }
    }
  }
}
