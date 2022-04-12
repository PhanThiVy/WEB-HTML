$(document).ready(function(e){
    set_up_event();
});
// cài đặt sự kiên 
function set_up_event(){
// show
    $("#show").click(function(){
        $("#image").slideDown(500, function(){
            alert("đã show");
        });
    });
    $("#hide").click(function(){
        $("#image").slideUp(500);
    });
    $("#change").click(function(){
        $("#image").slideToggle(500);
    });
    $("#ft").change(function(){
        var x = parseFloat($(this).val());
        $("#image").fadeTo(500, x);
    });
}