import { Haiku } from './../js/haiku.js';
// var Haiku = require('./../js/haiku.js').haikuModule;

describe ('Haiku', function(){
  let haiku;
  let poem;
  let line;
  beforeEach(function(){
    haiku = new Haiku()
    poem = "An old silent pond\nA frog jumps into the pond\nsplash! Silence again"
    line = "An old silent pond"
  });

  it('should return false if poem has does not have three lines', function(){
    expect(haiku.lineCheck("An old silent pond")).toEqual(false)
  });

  it('should return true if poem has three lines', function(){
    expect(haiku.lineCheck(poem)).toEqual(true)
  });

  it('should return the number of vowels in a word.', function(){
    haiku.vowelCount("silent")
    expect(haiku.countTotal).toEqual(2)
  });

  it('should return number of silent vowels in word.', function(){
    haiku.syllablesByVowels("silent")
    expect(haiku.countTotal).toEqual(2)
  });

  it('should return number of silent vowels in word.', function(){
    haiku.syllablesByVowels("outer")
    expect(haiku.countTotal).toEqual(2)
  });

  it('should return number of silent vowels in word.', function(){
    haiku.syllablesByVowels("silence")
    expect(haiku.countTotal).toEqual(2)
  });

  it('should return syllable count for a line', function(){
    expect(haiku.lineCount(line)).toEqual(5)
  });

  it('should return number of syllable for words with `th`', function() {
    haiku.doubleConsonant("the")
    expect(haiku.countTotal).toEqual(1)
  });

});
