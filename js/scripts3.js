function convert (number){
  number = number.split("");
  var digits=[1000,500,100,50,10,5,1];
  var symbols=["M","D","C","L","X","V","I"];
  var result="";
  console.log(number);

  if(number.length===1){
    if()
  };






};








$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = $("#inputNum").val();
    convert(num);
  });
});
