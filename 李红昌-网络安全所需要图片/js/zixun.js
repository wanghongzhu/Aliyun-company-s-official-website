// 鼠标进入咨询界面，box3出现，鼠标离开时界面消失
$('.box2').mouseenter(function(){
    $('.box3').css('display','block');
});
$('.box2').mouseleave(function(){
    $('.box3').css('display','none')
});