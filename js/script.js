'use strict'
$(function () {

    $('.main__slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        asNavFor: '.main__big-slider',
    });
    $('.main__big-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        asNavFor: '.main__slider',
        touchTreshod: 7,
        centerMode: true
    });

});