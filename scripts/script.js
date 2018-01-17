var number = 0;

$(document).ready(function () {
    setInterval(doStuff, 1000);
});

function doStuff() {
    $('.hero').css('background', 'url(images/hero' + number++ + '.jpg)');
    var num = number - 1;
    if ($('bullets .bullet:nth-child(' + num + ')').hasClass("active", function () {

        })) {

    }
    $('.bullets .bullet:nth-child(' + num + ')').toggleClass("active");
    if (number >= 1) {
        number = 1;
    }
}