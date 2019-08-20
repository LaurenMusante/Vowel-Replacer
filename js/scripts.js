$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var string = $("#inputOne").val();
    // var arr = ["a","e","i","o","u"]
    var stringSplit = string.split('');

    for (var i=0; i<string.length; i++){
        if(stringSplit[i] === "a" || stringSplit[i] ===  "e" || stringSplit[i] ===  "i" || stringSplit[i] === "o" || stringSplit[i] ===  "u"){
        stringSplit[i] = "-"

        }
        else{
          console.log(string)

        }
        console.log(stringSplit)
    }
  });
});
