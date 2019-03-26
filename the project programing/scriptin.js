$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() < 1200) {
            $("#span-menu-md").show();
            $("#menu-lg").hide();
        } else {
            $("#span-menu-md").hide();
            $("#menu-lg").show();
        }
    });
    if ($(window).width() < 1200) {
        $("#span-menu-md").show();
        $("#menu-lg").hide();
    } else {
        $("#span-menu-md").hide();
        $("#menu-lg").show();
    }
    $("#div-search-tow").hide();
    $("#span-search").click(function(){
        $("#hone").toggle(0)
        $("#div-search-tow").fadeToggle(0)
    })

    $("#close-times").click(function(){
        $("#div-search-tow").fadeOut(0);
        $("#hone").toggle(0)
    })
});