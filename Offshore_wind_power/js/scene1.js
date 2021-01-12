//scene1 js
$(window).scroll(function () {
    var win_top = $(this).scrollTop();
    //console.log(win_top);
    if (win_top >= 520 && win_top < 4200) {
        $('#shipID').css("opacity", 1);
        $('#shipID').attr("data-aos", "fade-up");
        $('#shipID').attr("data-aos-duration", "700");

    } else {
        $('#shipID').css("opacity", 0);
    }
    if (win_top >= 600 && win_top < 2100) {
        $('#happyID').css("opacity", 1);
        $('#happyID').attr("data-aos", "fade-up");
        $('#happyID').attr("data-aos-duration", "700");
    } else {
        $('#happyID').css("opacity", 0);
    }
    if (win_top >= 1550 && win_top <= 3250) {
        $('#fishID').css("opacity", 1);
        $('#fishID').attr("data-aos", "fade-up");
        $('#fishID').attr("data-aos-duration", "700");
    } else {
        $('#fishID').css("opacity", 0);
    }

    if (win_top >= 2100 && win_top < 4200) {
        $('#powerID').css("opacity", 1);
    } else {
        $('#powerID').css("opacity", 0);
    }

    if (win_top >= 2100 && win_top <= 3080) {
        $('#powerID').attr("data-aos", "fade-up");
        $('#powerID').attr("data-aos-duration", "700");

        var moveamount = (win_top / 50);
        $('#powerID').css("right", 130 - moveamount + "%");
    }

    if (win_top >= 2100 && win_top < 4200) {
        $('#power2ID').css("opacity", 1);
    } else {
        $('#power2ID').css("opacity", 0);
    }

    if (win_top >= 2100 && win_top <= 3080) {
        $('#power2ID').attr("data-aos", "fade-up");
        $('#power2ID').attr("data-aos-duration", "700");
        var moveamount = (win_top / 80);
        $('#power2ID').css("right", 120 - moveamount + "%");
    }

    if (win_top >= 2100 && win_top < 3700) {
        $('#sadID').css("opacity", 1);
        $('#sadID').attr("data-aos", "fade-up");
        $('#sadID').attr("data-aos-duration", "700");
    } else {
        $('#sadID').css("opacity", 0);
    }
    if (win_top >= 3700 && win_top < 4200) {
        $('#angryID').css("opacity", 1);
        $('#angryID').attr("data-aos", "fade-up");
        $('#angryID').attr("data-aos-duration", "700");
    } else {
        $('#angryID').css("opacity", 0);
    }
    if (win_top > 4200) {
        $('#waveID').css("opacity", 0);
        $('#sunID').css("opacity", 0);
        $('#birdID').css("opacity", 0);
    } else {
        $('#waveID').css("opacity", 1);
        $('#sunID').css("opacity", 1);
        $('#birdID').css("opacity", 1);
    }
    //消去場景一
    if(win_top >= 5300){
        $('#waveID').css("display","none");
        $('#sunID').css("display","none");
        $('#birdID').css("display","none");
        $('#shipID').css("display","none");
        $('#happyID').css("display","none");
        $('#fishID').css("display","none");
        $('#powerID').css("display","none");
        $('#power2ID').css("display","none");
        $('#sadID').css("display","none");
        $('#angryID').css("display","none");
    }else{
        $('#waveID').css("display","block");
        $('#sunID').css("display","block");
        $('#birdID').css("display","block");
        $('#shipID').css("display","block");
        $('#happyID').css("display","inline-block");
        $('#fishID').css("display","block");
        $('#powerID').css("display","block");
        $('#power2ID').css("display","block");
        $('#sadID').css("display","block");
        $('#angryID').css("display","block");
    }

});

$(window).scroll(function () {
    var win2_top = $(this).scrollTop() - $('#scene1ID').height();
    var win2 = $(this).scrollTop();
    //背景rwd
    var win_high = window.screen.height;
    $('#bg2ID').css("height", win_high);
    $('#gmID').css("bottom",win_high*0.3);
    $('#gs1ID').css("bottom",win_high*0.4);
    $('#gs2ID').css("bottom",win_high*0.4);
    $('#gs3ID').css("bottom",win_high*0.4);
    $('#gs4ID').css("bottom",win_high*0.4);
    $('#developerID').css("bottom",win_high*0.1);
    /*250滑過來*/
    if (win2_top >= 300 && win2_top <= 1100) {
        $('#fisherID').attr("data-aos", "fade-up");
        $('#fisherID').attr("data-aos-duration", "700");
        var moveamount = (win2_top / 35);
        $('#fisherID').css("left", 90 - moveamount + "%");

        $('#gmID').attr("data-aos", "fade-up");
        $('#gmID').attr("data-aos-duration", "700");
        var moveamount = (win2_top / 40);
        $('#gmID').css("right", 90 - moveamount + "%");
    }
    if (win2_top > 300 && win2_top < 9300) {
        $('#fisherID').css("opacity", 1);
    } else {
        $('#fisherID').css("opacity", 0);
    }

    if (win2_top > 300 && win2_top <= 5300) {
        $('#gmID').css("opacity", 1);
    } else {
        $('#gmID').css("opacity", 0);
    }

    if (win2_top > 5400 && win2_top < 9300) {
        $('#developerID').css("opacity", 1);
    } else {
        $('#developerID').css("opacity", 0);
    }
    /*轉場縮小*/


    /*對話框-與政府*/
    if (win2_top > 1200 && win2_top < 1800) {
        $('#protestID').css("opacity", 1);
        $('#protestID').attr("data-aos", "zoom-in-left");
        $('#protestID').attr("data-aos-duration", "300");
    } else {
        $('#protestID').css("opacity", 0);
    }
    /*f1 1600-3000*/
    if (win2_top > 1600 && win2_top < 3000) {
        $('#fs1ID').css("display", "block");
    } else {
        $('#fs1ID').css("display", "none");
    }
    if (win2_top > 1800 && win2_top < 2800) {
        $('#fs1ID').css("opacity", 1);
        $('#fs1ID').attr("data-aos", "fade-right");
        $('#fs1ID').attr("data-aos-duration", "1000");
    } else {
        $('#fs1ID').css("opacity", 0);
    }
    /*f2 3600-5000*/
    if (win2_top > 3600 && win2_top < 5000) {
        $('#fs2ID').css("display", "block");
    } else {
        $('#fs2ID').css("display", "none");
    }
    if (win2_top > 3800 && win2_top < 4800) {
        $('#fs2ID').css("opacity", 1);
        $('#fs2ID').attr("data-aos", "fade-right");
        $('#fs2ID').attr("data-aos-duration", "1000");
    } else {
        $('#fs2ID').css("opacity", 0);
    }

    /*g1 1800-3100*/
    if (win2_top > 1800 && win2_top < 3100) {
        $('#gs1ID').css("display", "block");
    } else {
        $('#gs1ID').css("display", "none");
    }
    if (win2_top > 2000 && win2_top < 2800) {
        $('#gs1ID').css("opacity", 1);
        $('#gs1ID').attr("data-aos", "fade-right");
        $('#gs1ID').attr("data-aos-duration", "1000");
    } else {
        $('#gs1ID').css("opacity", 0);
    }
    /*g2 3800-5200*/
    if (win2_top > 3800 && win2_top < 5200) {
        $('#gs2ID').css("display", "block");
    } else {
        $('#gs2ID').css("display", "none");
    }
    if (win2_top > 4000 && win2_top < 4800) {
        $('#gs2ID').css("opacity", 1);
        $('#gs2ID').attr("data-aos", "fade-right");
        $('#gs2ID').attr("data-aos-duration", "1000");
    } else {
        $('#gs2ID').css("opacity", 0);
    }

    /*對話框-與開發商 5400之後出現*/
    /*g3 5600-7000*/
    if (win2_top > 5600 && win2_top < 7000) {
        $('#gs3ID').css("display", "block");
    } else {
        $('#gs3ID').css("display", "none");
    }
    if (win2_top > 5800 && win2_top < 6800) {
        $('#gs3ID').css("opacity", 1);
        $('#gs3ID').attr("data-aos", "fade-right");
        $('#gs3ID').attr("data-aos-duration", "1000");
    } else {
        $('#gs3ID').css("opacity", 0);
    }

    /*g4 8100-9500*/
    if (win2_top > 8100 && win2_top < 9500) {
        $('#gs4ID').css("display", "block");
    } else {
        $('#gs4ID').css("display", "none");
    }
    if (win2_top > 8300 && win2_top < 9300) {
        $('#gs4ID').css("opacity", 1);
        $('#gs4ID').attr("data-aos", "fade-right");
        $('#gs4ID').attr("data-aos-duration", "1000");
    } else {
        $('#gs4ID').css("opacity", 0);
    }

    /*f3 5800-7200*/
    if (win2_top > 5800 && win2_top < 7200) {
        $('#fs3ID').css("display", "block");
    } else {
        $('#fs3ID').css("display", "none");
    }
    if (win2_top > 6000 && win2_top < 7000) {
        $('#fs3ID').css("opacity", 1);
        $('#fs3ID').attr("data-aos", "fade-right");
        $('#fs3ID').attr("data-aos-duration", "1000");
    } else {
        $('#fs3ID').css("opacity", 0);
    }

    /*f4 7800-9200*/
    if (win2_top > 7800 && win2_top < 9300) {
        $('#fs4ID').css("display", "block");
    } else {
        $('#fs4ID').css("display", "none");
    }
    if (win2_top > 8000 && win2_top < 9300) {
        $('#fs4ID').css("opacity", 1);
        $('#fs4ID').attr("data-aos", "fade-right");
        $('#fs4ID').attr("data-aos-duration", "1000");
    } else {
        $('#fs4ID').css("opacity", 0);
    }

    //隱藏場景二
    if(win2_top > 9300){
        $('#bg2ID').css("display","none");
        $('#fisherID').css("display","none");
        $('#gmID').css("display","none");
        $('#protestID').css("display","none");
        $('#developerID').css("display","none");
    }else{
        $('#bg2ID').css("display","block");
        $('#fisherID').css("display","block");
        $('#gmID').css("display","block");
        $('#protestID').css("display","block");
        $('#developerID').css("display","block");
    }
});

$(window).scroll(function () {
    var win3_top = $(this).scrollTop() - $('#scene2ID').height() - $('#scene1ID').height();

    var win_high = window.screen.height;
    $('#fb_divID').css("height", win_high);
    //照片縮放
    if (win3_top >= 250) {
        $('#pictureID').css("opacity", 1);
        $('#pictureID').attr("data-aos", "fade-up");
        $('#pictureID').attr("data-aos-duration", "700");
        var moveamount = (win3_top / 35);
        var moveamount_t = (win3_top / 100);
        if(moveamount_t < 20){
            $('#pictureID').css("top", moveamount_t + "%");
        }
        if(moveamount < 83){
            $('#pictureID').css("width", 100 - moveamount + "%");
        }else{
            $('#pictureID').css("opacity", 0);
        };
    }else{
        $('#pictureID').css("opacity", 0);
    }
    if (win3_top > 250) {
        $('#fb_divID').css("display", "flex");
    } else {
        $('#fb_divID').css("display", "none");
    }
    if (win3_top >= 300 && win3_top < 8800) {
        $('#fb_divID').css("opacity", 1);
    } else {
        var moveamount_o = (win3_top / 10000);
        $('#fb_divID').css("opacity", 1-moveamount_o);
    }
    //test


    if(win3_top <= 2200){
        $('#fbID').css("display", "block");
        $('#fbID2').css("display", "none");
    }else{
        $('#fbID').css("display", "none");
        $('#fbID2').css("display", "block");
    }

    
    if (win3_top >2200) {
        $('#fbID2').css("opacity", 1);
    } else {
        $('#fbID2').css("opacity", 0);
    }
    //comment
    if(win3_top >= 3400){
        $('#cm1ID').css("opacity", 1);
    }else{
        $('#cm1ID').css("opacity", 0);
    }
    if(win3_top >= 3800){
        $('#cm2ID').css("opacity", 1);
    }else{
        $('#cm2ID').css("opacity", 0);
    }

    if(win3_top >= 4200){
        $('#cm3ID').css("opacity", 1);
    }else{
        $('#cm3ID').css("opacity", 0);
    }

    if(win3_top >= 4600){
        $('#cm4ID').css("opacity", 1);
    }else{
        $('#cm4ID').css("opacity", 0);
    }

    if(win3_top >= 5000){
        $('#cm5ID').css("opacity", 1);
    }else{
        $('#cm5ID').css("opacity", 0);
    }

    if(win3_top >= 5600){
        $('#cm6ID').css("opacity", 1);
    }else{
        $('#cm6ID').css("opacity", 0);
    }

    if(win3_top >= 6200){
        $('#cm7ID').css("opacity", 1);
    }else{
        $('#cm7ID').css("opacity", 0);
    }

    if(0<win3_top >= 6600){
        $('#cm8ID').css("opacity", 1);
    }else{
        $('#cm8ID').css("opacity", 0);
    }

    if(win3_top >= 7000){
        $('#cm9ID').css("opacity", 1);
    }else{
        $('#cm9ID').css("opacity", 0);
    }

    if(win3_top >= 7400){
        $('#cm10ID').css("opacity", 1);
    }else{
        $('#cm10ID').css("opacity", 0);
    }

    if(win3_top >= 7800){
        $('#cm11ID').css("opacity", 1);
    }else{
        $('#cm11ID').css("opacity", 0);
    }

    if(win3_top>= 8200){
        $('#cm12ID').css("opacity", 1);
    }else{
        $('#cm12ID').css("opacity", 0);
    }
    //隱藏場景三
    if(win3_top > 10000){
        $('#cm1ID').css("display","none");
        $('#cm2ID').css("display","none");
        $('#cm3ID').css("display","none");
        $('#cm4ID').css("display","none");
        $('#cm5ID').css("display","none");
        $('#cm6ID').css("display","none");
        $('#cm7ID').css("display","none");
        $('#cm8ID').css("display","none");
        $('#cm9ID').css("display","none");
        $('#cm10ID').css("display","none");
        $('#cm11ID').css("display","none");
        $('#cm12ID').css("display","none");
        $('#pictureID').css("display","none");
    }else{
        $('#cm1ID').css("display","block");
        $('#cm2ID').css("display","block");
        $('#cm3ID').css("display","block");
        $('#cm4ID').css("display","block");
        $('#cm5ID').css("display","block");
        $('#cm6ID').css("display","block");
        $('#cm7ID').css("display","block");
        $('#cm8ID').css("display","block");
        $('#cm9ID').css("display","block");
        $('#cm10ID').css("display","block");
        $('#cm11ID').css("display","block");
        $('#cm12ID').css("display","block");
        $('#pictureID').css("display","block");
    }
});

//增加部分
$(window).scroll(function(){
    var fin_top =  $(this).scrollTop()-$('#scene1ID').height()-$('#scene2ID').height()-$('#scene3ID').height()-$('#scene4ID').height()-$('#parttwohigh').height();
    console.log(fin_top);

    if(fin_top >= 0 && fin_top <4800){
        $('#peopleID').css("display", "block");
    }else{
        $('#peopleID').css("display", "none");
    }
    if(fin_top >= 300 && fin_top <5000){
      $('#peo1ID').css("opacity",1);
      $('#peo1ID').attr("data-aos", "fade-right");
      $('#peo1ID').attr("data-aos-duration", "500");
    }else{
        $('#peo1ID').css("opacity",0);
    }

    if(fin_top >= 1000 && fin_top <5000){
        $('#peo2ID').css("opacity",1);
        $('#peo2ID').attr("data-aos", "fade-right");
        $('#peo2ID').attr("data-aos-duration", "500");
      }else{
          $('#peo2ID').css("opacity",0);
      }

      if(fin_top >= 1700 && fin_top <5000){
        $('#peo3ID').css("opacity",1);
        $('#peo3ID').attr("data-aos", "fade-right");
        $('#peo3ID').attr("data-aos-duration", "500");
      }else{
          $('#peo3ID').css("opacity",0);
      }

      if(fin_top >= 2500 && fin_top <5000){
        $('#peo4ID').css("opacity",1);
        $('#peo4ID').attr("data-aos", "fade-right");
        $('#peo4ID').attr("data-aos-duration", "500");
      }else{
          $('#peo4ID').css("opacity",0);
      }
      
  })
 