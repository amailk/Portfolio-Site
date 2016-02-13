$(document).ready(function () {

    $("#header").hover(function () {
        $("#header").attr("src", "images/header-color.jpg");
    }, function () {
        $("#header").attr("src", "images/header-bw.jpg");
    });
});
