$(document).ready(function(){

    $(".nav-list-item").hover(function () { //When trigger is hovered...
        $(this).children(".nav-sub").slideDown(200);
    }, function () {
        $(this).children(".nav-sub").slideUp(100);
    });
});