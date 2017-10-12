(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku() {
    _classCallCheck(this, Haiku);

    this.countTotal = 0;
  }

  _createClass(Haiku, [{
    key: "inputFilter",
    value: function inputFilter(input) {
      input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      return input;
    }
  }, {
    key: "lineCheck",
    value: function lineCheck(poem) {
      var lines = poem.split("\n");
      return lines.length === 3;
    }
  }, {
    key: "syllablesByVowels",
    value: function syllablesByVowels(word) {
      this.countTotal = 0;
      this.vowelCount(word);
      this.silenceCheck(word);
      this.doubleVowel(word);
      this.doubleConsonant(word);
      return this.countTotal;
    }
  }, {
    key: "vowelCount",
    value: function vowelCount(word) {
      var letters = word.split("");
      var vowels = 0;

      letters.forEach(function (letter) {
        if (letter.match(/[aeiouy]/gi)) {
          vowels += 1;
        }
      });
      this.countTotal += vowels;
    }
  }, {
    key: "lineCount",
    value: function lineCount(line) {
      var count = 0;
      var words = line.split(" ");
      var that = this;
      words.forEach(function (word) {
        that.syllablesByVowels(word);
        count += that.countTotal;
      });
      return count;
    }
  }, {
    key: "silenceCheck",
    value: function silenceCheck(word) {
      var letters = word.split("");
      if (letters[letters.length - 2 === "l"] && letters[letters.length - 1 === "e"]) {
        this.countTotal += 0;
      } else if (letters[letters.length - 1] == "e" && letters[letters.length - 2] !== "l") {
        this.countTotal -= 1;
        letters.pop();
      }
    }
  }, {
    key: "doubleConsonant",
    value: function doubleConsonant(word) {
      var letters = word.split("");
      var consPairArray = [];
      var that = this;

      for (var i = 0; i < letters.length - 1; i++) {
        if (letters[i].match(/[^aeiou]/gi) && letters[i + 1].match(/[^aeiou]/gi)) {
          consPairArray.push(letters[i] + letters[i + 1]);
        }
      }
      if (that.countTotal === 0) {
        consPairArray.map(function (pair) {
          if (["sh", "th", "ph", "ch", "wh"].includes(pair)) {
            that.countTotal = 1;
          }
        });
      }
    }
  }, {
    key: "doubleVowel",
    value: function doubleVowel(word) {
      if (word.match(/[aeiouy]{3}/gi)) {
        var tripleVowels = word.match(/[aeiouy]{3}/gi);
        word = word.replace(tripleVowels, "");
        this.countTotal -= 2;
      } else if (word.match(/[aeiouy]{2}/gi)) {
        this.countTotal -= 1;
      }
    }
  }]);

  return Haiku;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _haiku = require("./../js/haiku.js");

$(document).ready(function () {
  $("#check-poem").submit(function (e) {
    e.preventDefault();

    var poemInput = $("#poem").val();
    var haiku = new _haiku.Haiku();
    var syllCount = [];

    var filteredPoem = haiku.inputFilter(poemInput);

    if (haiku.lineCheck(filteredPoem)) {
      $(".result").text("Your Haiku is three lines long");
    } else {
      $(".result").text("Your Haiku is not three lines long");
    }

    if (haiku.lineCheck(filteredPoem)) {
      var lines = poemInput.split("\n");
      var line1 = haiku.lineCount(lines[0]);
      var line2 = haiku.lineCount(lines[1]);
      var line3 = haiku.lineCount(lines[2]);
      syllCount.push(line1, line2, line3);
    }

    if (syllCount.toString() === [5, 7, 5].toString()) {
      $(".final-result").text("Horray!");
    } else {
      $(".final-result").text("Boooooooooooooo!");
    }
  });
});

},{"./../js/haiku.js":1}]},{},[2]);
