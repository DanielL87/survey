$(document).ready(function(){
  $("#beverage").submit(function(event){
    var beverage = $("#beverage").val();
    $("#output").text(beverage);
    event.preventDefault();
  });
});
