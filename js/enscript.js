function turn(userSen){
  console.log(userSen);
  if (userSen.length>72){
    alert("You entered too many letters");
  } else {
    var code = [];
    var v1="";
    var v2="";
    var v3="";
    var v4="";
    var v5="";
    var v6="";
    var v7="";
    var v8="";


    for(var i=0; i<65; i+=8){
      v1 += userSen[i];
      console.log(v1);
    };
    for(var i=1; i<66; i+=8){
      v2 += userSen[i];
      console.log(v2);
    };
    for(var i=2; i<67; i+=8){
      v3 += userSen[i];
      console.log(v3);
    };
    for(var i=3; i<68; i+=8){
      v4 += userSen[i];
      console.log(v4);
    };
    for(var i=4; i<69; i+=8){
      v5 += userSen[i];
      console.log(v5);
    };
    for(var i=5; i<70; i+=8){
      v6 += userSen[i];
      console.log(v6);
    };
    for(var i=6; i<71; i+=8){
      v7 += userSen[i];
      console.log(v7);
    };
    for(var i=7; i<72; i+=8){
      v8 += userSen[i];
      console.log(v8);
    };

    return v1+v2+v3+v4+v5+v6+v7+v8;

  };
};



$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sen = $("#inputSen").val().split(" ").join("").split("");
    var output = turn(sen);
    $("#result").text(output);
  });
});
