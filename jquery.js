$(document).ready(function(){
   
    $("#clients").mouseenter(function(){
        $("#form2").fadeIn(500);
    });
    $("#services").mouseenter(function(){
        $("#form1").fadeIn(500);
    });
});
$(document).ready(function(){
       $("#clients").mouseleave(function(){
        $("#form2").fadeOut(500);
    });
   $("#services").mouseleave(function(){
        $("#form1").fadeOut(500);
    });
  $(".contacts").mouseover(function(){
    $("#form3").slideDown("slow");
  });
   $(".contacts").mouseleave(function(){
    $("#form3").slideUp("slow");
  });
});