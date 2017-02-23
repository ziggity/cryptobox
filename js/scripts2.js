function convert(number){
  number = parseInt(number);
  var digits=[1000,500,400,100,90,50,40,10,9,5,4,1];
  var symbols=["M","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var result="";
  for(var i=0; i<=digits.length; i++){
     while(number%digits[i]<number){
     result = result + symbols[i];
     number = number - digits[i] ;
    };
  };
  return result;
};


$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = $("#inputNum").val();
    var romanNums = convert(num);
    $("#result").text(romanNums);
  });
});
