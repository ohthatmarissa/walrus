$().ready(function(){
  $("#hider").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("#slider").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $("#fader").click(function(){
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  })
});
