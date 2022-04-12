$(document).ready(function(){
    document.getElementById("div1").onclick= function(){
        var doc = $("#noi_dung").html();
        alert(doc);
    }
    document.getElementById("div2").onclick= function(){
        var b = $("#noi_dung").html("<h2>rất vui được gặp bạn.</h2>");
    }
    document.getElementById("div3").onclick= function(){
        var doc1 = $("#noi_dung").text();
        alert(doc1);
    }
    document.getElementById("div4").onclick= function(){
        var a = $("#noi_dung").text("hẹn gặp lại!");
    }
    document.getElementById("add1").onclick= function(){
        var add1 = $("#noi_dung").append("<h3>nội dung chèn vào sau nội dung đang có</h3> <br>");
    }
    document.getElementById("add2").onclick= function(){
        var add2 = $("#noi_dung").prepend("<h3>nội dung chèn vào trước nội dung đang có </h3><br>");
    }
    document.getElementById("add3").onclick= function(){
        var add3 = $("<h3> nội dung chèn vào sau nội dung đang có </h3><br>").prependTo("#noi_dung");
    }
});