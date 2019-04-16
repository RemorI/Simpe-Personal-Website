var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

function aboutMe() {
    scrollToElement('#aboutMe', 600);
}

function portfolio() {
    scrollToElement('#portfolio', 600);
}

function contact() {
    scrollToElement('#contact', 600);
}