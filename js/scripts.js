function roman (number) {
  console.log(number);
  var digits = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1},result = "", i;


  for(i in digits){
      while(number>=digits[i]){
        result += i;
        number -= digits[i];
        console.log(result);
      }
  }
    console.log(result);
};

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = parseInt($("#inputNum").val());
    var userInput = roman(num);
  });
});
