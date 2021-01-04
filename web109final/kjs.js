$(function(){
    //			函式offset()的作用是返回呼叫者當前的位置
    //			獲取你所要開始固定的位置
                var top1 = $("theory").offset().top;
                $(window).scroll(function(){
    //				動態獲取當前頁面的位置
                    var win_top = $(this).scrollTop();
    //				動態獲取需要固定的div的位置
                    var top = $("theory").offset().top;
    //				把當前頁面位置和要固定div的位置相對比
    //				如果頁面位置大於等於需要固定的div位置說明此時需要固定了，只需要給它新增一個css樣式即可
                    if(win_top >= top){
                        $("theory").addClass("sfixed");   
                        console.log("yes")                   
                    }
                    //把當前頁面位置和要固定div的位置想對比
    //				如果頁面位置小於需要固定的div位置說明此時不需要固定，只需要給它移除之前新增的css樣式即可
                    if(win_top < top1){
                        $("theory").removeClass("sfixed");
                    }
                    

                    	
                });
            });

$(window).scroll(function(){
    // Returns height of browser viewport
    var window_height = $( window ).height();
    
    var window_scrollTop = $(window).scrollTop();
    
    // Returns height of HTML document
    var document_height = $( document ).height();
    
    console.log(window_height);
    console.log(window_scrollTop);
    console.log(document_height);
    
        if(window_height + window_scrollTop == document_height){
        alert('到底部觸發ajax');
        }
    
    });