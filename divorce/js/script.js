
    $(document).ready(function(){
      $(".click-test").click(function(){
        $(".test1").slideToggle();
      })
    });



var times_1 = 0;
function change1(btn) {
    btn.style.background = times_1 % 2 == 0 ? 'white' : '#343A40';
    btn.style.color = times_1 % 2 == 0 ? '#343A40' : 'white';
    times_1++;
}

var times_2 = 0;
function change2(btn) {
    btn.style.background = times_2 % 2 == 0 ? 'white' : '#343A40';
    btn.style.color = times_2 % 2 == 0 ? '#343A40' : 'white';
    times_2++;
}

var times_3 = 0;
function change3(btn) {
    btn.style.background = times_3 % 2 == 0 ? 'white' : '#343A40';
    btn.style.color = times_3 % 2 == 0 ? '#343A40' : 'white';
    times_3++;
}






