
$(document).ready( function() {

  $('.instrument').on('click', 'button', function(event) {
    if ($(this).hasClass('note c')) {
      $("#cAudio").get(0).play();
    } else if ($(this).hasClass('note d')) {
      $("#dAudio").get(0).play();
    } else if ($(this).hasClass('note e')) {
      $("#eAudio").get(0).play();
    } else if ($(this).hasClass('note f')) {
      $("#fAudio").get(0).play();
    } else if ($(this).hasClass('note g')) {
      $("#gAudio").get(0).play();
    } else if ($(this).hasClass('note a')) {
      $("#aAudio").get(0).play();
    } else {
      $("#bAudio").get(0).play();
    }
  });
});
