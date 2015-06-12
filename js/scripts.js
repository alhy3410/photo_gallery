
$(document).ready(function(){
  $('.eachPhoto').on('click',function() {
    $(this).width(800);
    $(this).height(600);
});

$('.eachPhoto').mouseleave(function() {
    $(this).width(360);
    $(this).height(270);
  });

});
