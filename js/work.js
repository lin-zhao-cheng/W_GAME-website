// $(document).ready(function(){
//     $('.member-p').click(function(){
//         $('.good-game').css('color','red');
//     });
// });
$(document).ready(function(){

    $(".nav-list-item").hover(function () { //When trigger is hovered...
        $(this).children(".nav-sub").slideDown(200);
    }, function () {
        $(this).children(".nav-sub").slideUp(100);
    });


    // $('.all-game-link').mouseenter(function(){
    //     $(this).addClass('blue');
    // });
    // $('.all-game-link').mouseleave(function(){
    //     $(this).removeClass('blue');
    // });
    // $('.all-game-link').mouseenter(function(){
    //     $(this).addClass('white');
    // });
    // $('.all-game-link').mouseleave(function(){
    //     $(this).removeClass('white');
    // });
});

/*----------*/
$(document).ready(function () {



    $('.a-item-link').mouseenter(function () {
        // Get data attribute values
        var title = $(this).parent('li').data('title');
        // var desc = $(this).parent('li').data('desc');
        if (!$(this).children("div").length) {
            $(this).append('<div class="overlay"></div>');
        }

        // Get the overlay div
        var overlay = $(this).children('.overlay');

        // Add html to overlay
        overlay.html('<h3>' + title + '</h3>');

        // Fade in overlay
        overlay.fadeIn(100);
    });

    // Mouseleave Overlay Effect
    $('.a-item-link').mouseleave(function () {
        // Get the overlay div
        var overlay = $(this).children('.overlay');

        // Fade out overlay
        overlay.fadeOut(100);
    });


});

