  var values=[["","I","II","III","IIII","V","VI","VII","VIII","IX","X"],["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C"],["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M"]];

function roman (number){
  console.log(number);
  var result = "";
  var numerals = number.toString().split(" ").reverse();

  for(var i = 0; i < numerals.length; i ++){
    result = values[i][parseInt(numerals[i])] + result;
  }
    return result;
}








$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = parseInt($("#inputNum").val());
    var userInput = roman(num);
  });
});
