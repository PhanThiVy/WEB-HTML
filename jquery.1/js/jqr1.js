$(document).ready(function(){
    var a = document.getElementById("button1");
    a.onclick= ChangSize;
});
var CurrentImage=1;
function ChangSize(){
    if (CurrentImage==1){
        $('#photo').addClass("photo2");
        CurrentImage = 2;
    }else if (CurrentImage==2){
        $('#photo').addClass("photo3");
        CurrentImage = 3;
    }else {
        $('#photo').removeClass("photo2").removeClass("photo3");
        CurrentImage = 1;
    }
    var gia_tri = $("#photo").css("width");
alert(gia_tri);
}
