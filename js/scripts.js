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

  $("button#purple").click(function(){
    $("body").removeClass();
    $("body").addClass("purple-background");
  });

  $("button#blue").click(function(){
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#pink").click(function(){
    $("body").removeClass();
    $("body").addClass("pink-background");
  });
});
