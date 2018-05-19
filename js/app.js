/**
 * Created by Brainilio on 24-9-2017.
 */
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});
// End of scroll delay script //

function hideloader() {
    document.getElementById("loading").style.display = "none";
}
//end of on start loading screen//

function navigation(){
    var window_top = $(window).scrollTop();
    var div_top = $('.navigation-anchor').offset().top;
    if (window_top > div_top) {
        $('.navigation').css('top', window_top - div_top);
        $('.content').addClass("padding");
    } else {
        $('.navigation').css('top', '0px');
        $('.content').removeClass("padding");
    }

}

//Placed at bottom of functions
