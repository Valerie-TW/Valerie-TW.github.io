
$(document).ready(function () {
  $(".click-test").click(function () {
    $(".test1").slideToggle();
  })
});

$(document).ready(function () {
  $(".click-sexual-behavior-y2").click(function () {
    $(".sexaul-behavior2-evidence").slideDown();

  })
});

$(document).ready(function () {
  $(".click-sexual-behavior-y1").click(function () {
    $(".sexaul-behavior2-evidence").slideDown();

  })
});

$(document).ready(function () {
  $(".click-sexual-behavior-none").click(function () {
    $(".sexaul-behavior2-evidence").slideUp();

  })
});

var times_1 = 0;
function change1(btn) {
  btn.style.background = times_1 % 2 == 0 ? 'white' : '#343A40';
  btn.style.color = times_1 % 2 == 0 ? '#343A40' : 'white';
  times_1++;
}






