console.log("Your index.js file is loaded correctly!");


$(document).ready(function(){
  $("#navigation p").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "white");
  });
});