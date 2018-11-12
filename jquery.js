$(document).ready(function(){
   
    $("#clients").mouseenter(function(){
        $("#form2").fadeIn(500);
    });
    $("#services").mouseenter(function(){
        $("#form1").fadeIn(500);
    });
 
});
$(document).ready(function(){
       $("#form2").mouseleave(function(){
        $("#form2").fadeOut(500);
    });
   $("#form1").mouseleave(function(){
        $("#form1").fadeOut(500);
    });
  
});