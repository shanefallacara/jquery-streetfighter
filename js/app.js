$(document).keydown(function(keypressed){
    if (keypressed.keyCode === 88) {
      $(".ryu-ready").hide();
      $(".ryu-still").hide();
      $(".ryu-throwing").hide();
      $(".ryu-splat").hide();
      $(".ryu-cool").show();
      $(".main").addClass('main-x');
    } 
    if (keypressed.keyCode === 83) {
      $(".ryu-ready").hide();
      $(".ryu-still").hide();
      $(".ryu-throwing").hide();
      $(".ryu-cool").hide();
      $(".ryu-splat").show();
      $(".main").addClass('main-x');
    } 
  });
  $(document).keyup(function(){
    $(".ryu-still").show();
    $(".ryu-ready").hide();
    $(".ryu-cool").hide();
    $(".ryu-splat").hide();
    $(".ryu-throwing").hide();
    $(".main").removeClass('main-x');
  });
$(document).ready(function () {
	$('.ryu').mouseenter(function() {
    $(".ryu-ready").show();
   	$('.ryu-still').hide();
    $(".ryu-cool").hide();
    $(".ryu-splat").hide();
    $(".ryu-throwing").hide();
  	})
  .mouseleave (function() {
		$('.ryu-still').show();
    	$('.ryu-ready').hide();
	})
	.mousedown (function() {
		playHadouken();
		$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish () .show() .animate(
    		{'left': '1020px'}, 500,function() {
    		$(this).hide();
    		$(this).css('left', '570px');
    	});	
	})
	.mouseup (function() {
		$('.ryu-ready').show();
    $('.ryu-throwing').hide();
		});
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
