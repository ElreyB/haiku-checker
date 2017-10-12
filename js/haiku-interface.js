import { Haiku } from './../js/haiku.js';

$(document).ready(function(){
  $("#check-poem").submit(function(e){
    e.preventDefault();

    let poemInput = $("#poem").val().toLowerCase();
    let haiku = new Haiku();
    let syllCount = [];

    if (haiku.lineCheck(poemInput)) {
      $(".result").text("Your Haiku is three lines long");
    } else {
      $(".result").text("Your Haiku is not three lines long");
    }

    if (haiku.lineCheck(poemInput)) {
      let lines = poemInput.split("\n");
      let line1 = haiku.lineCount(lines[0]);
      let line2 = haiku.lineCount(lines[1]);
      let line3 = haiku.lineCount(lines[2]);
      syllCount.push(line1, line2, line3);
    }

    if (syllCount.toString() === [5, 7, 5].toString()) {
      $(".final-result").text("Horray!");
    } else {
      $(".final-result").text("Boooooooooooooo!");
    }
  });
});


// An old silent pond
// A frog jumps into the pond
// Splash! Silence again

// I will great the mist
// courteously with a smile
// i can do no more
