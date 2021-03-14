
$(document).ready(function () {
  $(".click-test").click(function () {
    $(".test1").slideToggle();
  })
});

// $(document).ready(function () {
//   $(".click-sexual-behavior-y2").click(function () {
//     $(".sexaul-behavior2-envidence").slideDown();

//   })
// });

// $(document).ready(function () {
//   $(".click-sexual-behavior-y1").click(function () {
//     $(".sexaul-behavior2-envidence").slideDown();   
//   })
// });

// $(document).ready(function () {
//   $(".click-sexual-behavior-none").click(function () {
//     $(".sexaul-behavior2-envidence").slideUp();
//     $("input[name='sexaul-behavior']").prop("checked",false);
//     $("input[name='sexaul-envidence']").prop("checked",false);
//   })
// });

// $(document).ready(function () {
//   $(".click-sexaul-behavior-children").click(function () {
//     $(".sexaul-behavior2-envidence").slideUp();
//     $("input[name='sexaul-envidence']").prop("checked",false);
//   })
// });

// $(document).ready(function () {
//   $(".click-no-envidence").click(function () {
//     $("input[name='sexaul-envidence']").prop("checked",false);
//   })
// });

// $(document).ready(function () {
//   $(".click-physical-contact-y").click(function () {
//     $(".physical-contact-envidence").slideDown();   
//   })
// });
// $(document).ready(function () {
//   $(".click-no-phy-envidence").click(function () {
//     $("input[name='physical-contact-envidence']").prop("checked",false);
//   })
// });

// $(document).ready(function () {
//   $(".click-physical-contact-n").click(function () {
//     $(".physical-contact-envidence").slideUp();
//     $("input[name='physical-contact-envidence']").prop("checked",false);
//   })
// });


var times_1 = 0;
function change1(btn) {
  btn.style.background = times_1 % 2 == 0 ? 'white' : '#343A40';
  btn.style.color = times_1 % 2 == 0 ? '#343A40' : 'white';
  times_1++;
}

// defedndant-salary
$(document).ready(function () {
  $(".click-spouse").click(function () {
    $(".spouse-salary-main").slideUp();
    console.log("a");
  })
});






