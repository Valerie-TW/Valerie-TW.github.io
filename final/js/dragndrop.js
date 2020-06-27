$(function(){
  $("#delete").droppable({
    accept: "#selected > ul > ul",
    drop: function(event, ui) {

    ui.draggable.remove();

    $(this).css("background-color","");
    // console.log('drop');
      // $(this).append(ui);
    },
    over: function(event, ui) {
    // over droppable        
    // ui.helper
    ui.draggable.css("transform", "scale(0.3)");
    $(this).css("background-color","#990000");
    },
    out: function( event, ui ) {

    ui.draggable.css("transform", "");
    $(this).css("background-color","");
    }
  });

  $("#selected .items").sortable({
    // start: function (event, ui) {
    //   $(this).css("background-image","");
    // },
    over: function(event, ui) {
    $(this).css("background-color","#e6f2ff");
    },
    out: function( event, ui ) {
    $(this).css("background-color","");

    $(this).css("background-image","");
    if(countBlocks()==1){
    $(this).css("background-image","url(./img/hint1.png)");
    }
  }
  });
   
  $("ul[id^='available']").draggable({
      helper: "clone",
      connectToSortable: ".items"
  });
  $("ul[id^='available-logic']").draggable({
      helper: "clone",
      connectToSortable: ".items-logic"
  });
});

function countBlocks(){

   return $("#selected > ul > ul > .list").length;

}



function getBlocks() {
    var i = 0;
    var suffix = new Array();
    $("#selected > ul > ul > .list").each(function(){
       if($(this).children('.form-control').length > 0){
        if($(this).text().replace(/\s/g, '')==="Indexof:"){
          suffix[i] =  "\"index of\":" + $(this).children('.form-control').val();
        }
        else{
       suffix[i] =  $(this).text().toLowerCase().replace(/\s/g, '') + $(this).children('.form-control').val();
       // console.log(suffix[i]);
       }
     }
       else{suffix[i] = $(this).text().toLowerCase().replace(/\s/g, '');}
       i++;
   });
   return suffix;
}

function enable() {

var elements = document.getElementsByClassName("FileType");
var el = document.getElementById("chkFile");

for (var i = 0; i < elements.length; i++) {
  if (el.checked) {
    elements[i].disabled = false;
  } else {
    elements[i].disabled = true;
  }
}
}
