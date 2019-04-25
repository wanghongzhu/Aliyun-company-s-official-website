// 第五行云安全  ，当鼠标进入a标签时，对应的页面显示其他兄弟页面不显示；
$('.yun .number1').mouseenter(function () {
    $('.yun .number1').css('font-size', '20px').css('color', '#0fa2de').parent().siblings().find('.yw').css('display', 'block').siblings().css('display', 'none').
    parent().siblings().find('.qiqi').animate({
              bottom: 400
           }, 2000)
});
$('.yun .number1').mouseleave(function () {
    $('.yun .number1').css('font-size', '18px').css('color', 'white')
});


$('.yun .number2').mouseenter(function () {
    $('.yun .number2').css('font-size', '20px').css('color', '#0fa2de').parent().siblings().find('.aq').css('display', 'block').siblings().css('display', 'none')
    .parent().siblings().find('.liu').animate({
        bottom: 390
     }, 2000)

});
$('.yun .number2').mouseleave(function () {
    $('.yun .number2').css('font-size', '18px').css('color', 'white')
});

$('.yun .number3').mouseenter(function () {
    $('.yun .number3').css('font-size', '20px').css('color', '#0fa2de').parent().siblings().find('.wl').css('display', 'block').siblings().css('display', 'none')
    .parent().siblings().find('.wu').animate({
        bottom:380
     }, 2000)

});
$('.yun .number3').mouseleave(function () {
    $('.yun .number3').css('font-size', '18px').css('color', 'white')
});

$('.yun .number4').mouseenter(function () {
    $('.yun .number4').css('font-size', '20px').css('color', '#0fa2de').parent().siblings().find('.yy').css('display', 'block').siblings().css('display', 'none')
    .parent().siblings().find('.si').animate({
        bottom: 370
     }, 2000)

});
$('.yun .number4').mouseleave(function () {
    $('.yun .number4').css('font-size', '18px').css('color', 'white')
});
$('.yun .number5').mouseenter(function () {
    $('.yun .number5').css('font-size', '20px').css('color', '#0fa2de').parent().siblings().find('.zj').css('display', 'block').siblings().css('display', 'none')
    .parent().siblings().find('.san').animate({
        bottom: 360
     }, 2000)

});
$('.yun .number5').mouseleave(function () {
    $('.yun .number5').css('font-size', '18px').css('color', 'white')
});
$('.yun .number6').mouseenter(function () {
    $('.yun .number6').css('font-size', '20px').css('color', '#0fa2de').parent().siblings().find('.ycp').css('display', 'block').siblings().css('display', 'none')
    .parent().siblings().find('.er').animate({
        bottom: 350
     }, 2000)

});
$('.yun .number6').mouseleave(function () {
    $('.yun .number6').css('font-size', '18px').css('color', 'white')
});

$('.yun .number7').mouseenter(function () {
    $('.yun .number7').css('font-size', '20px').css('color', '#0fa2de').parent().siblings().find('.jcss').css('display', 'block').siblings().css('display', 'none')
    .parent().siblings().find('.yi').animate({
        bottom: 340
     }, 2000)

});
$('.yun .number7').mouseleave(function () {
    $('.yun .number7').css('font-size', '18px').css('color', 'white')
});

// $(' .numberss .numberone').mouseenter(function () {
//     var a1 = $(this).index();
//     console.log(a1);
    
//     $('.zjtp .ajtpA').eq(a1).animate({
//         bottom: 400
//     }, 2000)


// });