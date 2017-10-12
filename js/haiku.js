export class Haiku{
  constructor(){
    this.syllableCount = 0;
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
    this.syllableCount = 0;
    this.vowelCount(word);
    this.silenceCheck(word);
    this.doubleVowel(word);
    this.doubleConsonant(word);
    return this.syllableCount;
  }

  vowelCount(word) {
    let letters = word.split("");
    let result = letters.reduce(function(accu, letter){
      return letter.match(/[aeiouy]/gi) ? ++accu : accu
    }, 0);
    this.syllableCount += result;
  }


    // let vowels = 0;
    //
    // letters.forEach(function(letter){
    //   if (letter.match(/[aeiouy]/gi)) {
    //     vowels += 1;
    //   }
    // });
    // this.syllableCount += vowels;
  }

  lineCount(line){
    let count = 0;
    let words = line.split(" ");
    let that = this;
    words.forEach(function(word){
      that.syllablesByVowels(word);
      count += that.syllableCount;
    });
    return count;
  }

  silenceCheck(word) {
    let letters = word.split("");
    if (letters[letters.length-2 === "l"] && letters[letters.length-1 === "e"]) {
      this.syllableCount += 0;
    }
    else if (letters[letters.length-1] == "e" && letters[letters.length-2] !== "l") {
      this.syllableCount -= 1;
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
   if (that.syllableCount === 0) {
     consPairArray.map(function(pair){
       if (["sh","th", "ph", "ch", "wh"].includes(pair)){
         that.syllableCount = 1;
       }
     });
    }
  }

  doubleVowel(word) {
    if (word.match(/[aeiouy]{3}/gi)){
      let tripleVowels = word.match(/[aeiouy]{3}/gi);
      word = word.replace(tripleVowels, "");
      this.syllableCount -= 2;
    } else if (word.match(/[aeiouy]{2}/gi)){
      this.syllableCount -= 1;
    }
  }
}
