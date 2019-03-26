$().ready(function(){
  $("h1").click(function(){
    alert("This is a header.");
    alert("SUPER DUPER HEADER");
    var name = prompt("what's your name?");
    alert("hello " + name)
  });

  $("img").click(function(){
    alert("This is a Walrus.");
  });

  $("p").click(function(){
    alert("This is a paragraph");
  });
});
