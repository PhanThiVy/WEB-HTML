$(document).ready(function(){
    document.getElementById("delete1").onclick= function(){
        $("#h1").unwrap();
    }
    document.getElementById("delete2").onclick= function(){
        $("#h1").replaceWith("<h3>hi!</h3>");
    }
    document.getElementById("delete3").onclick= function(){
        $(".p").wrap("<div></div>");
    }
    // document.getElementById("delete4").onclick= function(){
    //     $(".p").wrapAll("<div></div>");
    // }
});