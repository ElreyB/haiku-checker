export class Haiku{
  constructor(){
    this.countTotal = 0;
  }

  inputFilter(input) {
    input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return input;
  }

  lineCheck(poem){
    let lines = poem.split("\n");
    return lines.length === 3;
  }

  syllablesByVowels(word){
    this.countTotal = 0;
    this.vowelCount(word);
    this.silenceCheck(word);
    this.doubleVowel(word);
    this.doubleConsonant(word);
    return this.countTotal;
  }

  vowelCount(word) {
    let letters = word.split("");
    let vowels = 0;

    letters.forEach(function(letter){
      if (letter.match(/[aeiouy]/gi)) {
        vowels += 1;
      }
    });
    this.countTotal += vowels;
  }

  lineCount(line){
    let count = 0;
    let words = line.split(" ");
    let that = this;
    words.forEach(function(word){
      that.syllablesByVowels(word);
      count += that.countTotal;
    });
    return count;
  }

  silenceCheck(word) {
    let letters = word.split("");
    if (letters[letters.length-2 === "l"] && letters[letters.length-1 === "e"]) {
      this.countTotal += 0;
    }
    else if (letters[letters.length-1] == "e" && letters[letters.length-2] !== "l") {
      this.countTotal -= 1;
      letters.pop();
    }
  }

  doubleConsonant(word) {
   let letters = word.split("");
   let consPairArray = [];
   let that = this;

   for(var i = 0; i < letters.length-1; i++){
     if (letters[i].match(/[^aeiou]/gi) && letters[i+1].match(/[^aeiou]/gi)){
       consPairArray.push(letters[i] + letters[i +1]);
     }
   }
   if (that.countTotal === 0) {
     consPairArray.map(function(pair){
       if (["sh","th", "ph", "ch", "wh"].includes(pair)){
         that.countTotal = 1;
       }
     });
    }
  }

  doubleVowel(word) {
    if (word.match(/[aeiouy]{3}/gi)){
      let tripleVowels = word.match(/[aeiouy]{3}/gi);
      word = word.replace(tripleVowels, "");
      this.countTotal -= 2;
    } else if (word.match(/[aeiouy]{2}/gi)){
      this.countTotal -= 1;
    }
  }
}
