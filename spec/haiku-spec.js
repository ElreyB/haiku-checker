// import { Haiku } from './../js/haiku.js';
var Haiku = require('./../js/haiku.js').haikuModule;


describe ('Haiku', function(){
  let haiku;
  let poem;

  beforeEach(function(){
    haiku = new Haiku()
    poem = "An old silent pond\nA frog jumps into the pond\nsplash! Silence again"
  });

  it('should return false if poem has does not have three lines', function(){
    expect(haiku.lineCheck("An old silent pond")).toEqual(false)
  });

  it('should return true if poem has three lines', function(){
    expect(haiku.lineCheck(poem)).toEqual(true)
  });

});