
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

$(window).on('keydown', function(event) {
  if (event.key == 'c' || (event.key == 'C')) {
    $("#cAudio").get(0).play();
  } else if (event.key == 'd' || (event.key == 'D')) {
    $("#dAudio").get(0).play();
  } else if (event.key == 'e' || (event.key == 'E')) {
    $("#eAudio").get(0).play();
  } else if (event.key == 'f' || (event.key == 'F')) {
    $("#fAudio").get(0).play();
  } else if (event.key == 'g' || (event.key == 'G')) {
    $("#gAudio").get(0).play();
  } else if (event.key == 'a' || (event.key == 'A')) {
    $("#aAudio").get(0).play();
  } else if (event.key == 'b' || (event.key == 'B')) {
    $("#bAudio").get(0).play();
  }
  });
});
