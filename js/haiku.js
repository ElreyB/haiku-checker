function Haiku(){

}

Haiku.prototype.lineCheck = function(poem){
  let lines = poem.split("\n");
  return lines.length === 3;
};

exports.haikuModule = Haiku;

// export class Haiku{
//   constructor(){
//   }
//
//   lineCheck(poem){
//     let lines = poem.split("\n");
//     return lines.length === 3;
//   }
// }
