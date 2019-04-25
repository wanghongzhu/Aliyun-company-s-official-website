/* 5个 */
$('.topp').mouseenter(function () {
    $(this).css({
        'background-position-y': -1407,
    });
})
$('.topp').mouseleave(function () {
    $(this).css({
        'background-position-y': 0,
    });
})
/* 下面六个 */
$('.structure_img').mouseenter(function () {
    $(this).css({
        'background-position-y': -1407,
    });
})
$('.structure_img').mouseleave(function () {
    $(this).css({
        'background-position-y': 0,
    });
})
var flag = true;
$('.brain_banner_middle a').click(function () {
    if (flag) {
        $('.brain_vi').stop().show(500)
        flag = false;
    } else {
        $(this)[0].pause();
        $(this).stop().hide(500);
        flag = true;
    }
})
// var bVideo = document.querySelector('.brain_video');
// bVideo.onclick = function () {
//     this.paused;
//     this.style.display = 'none';
// }
// $('.brain_video').click(function () {
//     $(this)[0].pause();
//     $(this).stop().hide(500);
// })