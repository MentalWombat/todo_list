// check off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on span to delete todo
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

// append new todo by clicking enter
$("input[type='text'").keypress(function(e){
  if(e.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li>" + todoText + "<span class=\"fas fa-trash-alt\"></span></li>");
  }
});

// toggle input field by clicking on plus
$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
});