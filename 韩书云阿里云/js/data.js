// 第一个轮播图

// 1：先自动轮播
(function () {
    var index = -1;
    var lunbox = document.querySelector('.banner');
    var lunb = document.querySelectorAll('.lunbo1');
    var timer = window.setInterval(function () {
        // 获取轮播项的的宽度，(可视区域的宽度/一张图的宽度)
        var ku = parseInt(lunb[0].getBoundingClientRect().width);
        index++;
        // index等于每个轮播项的下标
        lunbox.style.marginLeft = -(index * ku) + 'px'
        // 判断是否到最后一张图，如果是跳回第一张
        if (index >= lunb.length - 1) {
            index = -1
        };
        $('.banner-six li').eq(index).css('backgroundColor', 'blue').siblings().css('backgroundColor', '#ccc');

    }, 1200)
})()

// // 2 点小横线切换图片 
// var index=0;
//      $('.banner-six li').click(function(){
//      $('.lunbo1').eq(index).fadeOut(500);
//      $('.banner-six li').eq(index).removeClass('active');
//      index=$(this).index();
//      $('.lunbo1').eq(index).fadeIn(500);
//      $('.banner-six li').eq(index).addClass('active');
//      clearInterval(timer);
//     })
// 定义索引
var index = 0;
// 获取图片的宽度
var w = $('.banner-one').width();
// 给li加事件
$('.banner-six li').click(function () {
    // 获取索引并赋值给index
    index = $(this).index();
    // 计算需要移动的宽度
    var v = -index * w;
    // 设置每张图片移动的距离
    $('.banner').animate({
        marginLeft: v
    }, 500)
    // .animate.css('marginLeft',v);
    $('.banner-six li').eq(index).css('backgroundColor', 'blue').siblings().css('backgroundColor', '#ccc');

});


// <!-- 数据更智能 业务才更智能 -->
$('.x_4 li').click(function () {
    var index = $(this).index();
    $('.x_9Items').eq(index).css('display', 'block').siblings().css('display', 'none');
    $('.x_5-a-1').css('display', 'none');
    $('.x_9').css('display', 'block');
    $('.x_8-a-0').css('display', 'none');

})
$('.x_5 li').click(function () {
    var index = $(this).index();
    $('.x_5-a-1').eq(index).css('display', 'block').siblings().css('display', 'none');
    $('.x_9Items').css('display', 'none');
    $('.x_9').css('display', 'none');
    $('.x_8-a-0').css('display', 'none');
});
$('.x_7 li').click(function () {
    var index = $(this).index();
    $('.x_8-a-0').eq(index).css('display', 'block').siblings().css('display', 'none');
    $('.x_9Items').css('display', 'none');
    $('.x_9').css('display', 'none');
    $('.x_5-a-1').css('display', 'none');
});

// 更多行业、更多场景的AI解决方案
$(' .zxc_2  li').mouseenter(function () {
    $(this).find('div').stop().animate({
        top: 222
    }, 500)
    $('.aiz').css('display', 'block')
    $('.aii').css('display', 'block')
});
$(' .zxc_2 li').mouseleave(function () {
    $(this).find('div').stop().animate({
        top: 350
    }, 500)

});
$(' .zxc ').mouseleave(function () {
    $('.aiz').css('display', 'none');
    $('.aii').css('display', 'none');
});




// 更多行业、更多场景的AI解决方案轮播图
// 左按钮
var index = 0;
var aiw = $('.zxc_2').width();
$('.aiz').click(function () {
    if (index == 0) {
        $('.zxc_2 ul').css('marginLeft', '-2948px');
    }
    index--;
    console.log(index);
    if (index < 0) {
        index = 1;
    }
    var iiw = -index * aiw;
    $('.zxc_2 ul').stop().animate({
        marginLeft: iiw
    }, 500);
});
// 右按钮
$('.aii').click(function () {
    if (index == 2) {
        $('.zxc_2 ul').css('marginLeft', '0px');
    }
    index++;
    console.log(index);
    if (index >= 3) {
        index = 1;
    }
    var iiw = -index * aiw;
    $('.zxc_2 ul').stop().animate({
        marginLeft: iiw
    }, 500);
});





// 产品加油站轮播图
// 右按钮

var index1 = 0;
var nnn = $('.cpjyz-2-2').width();

function fn() {
    index1++;
    if (index1 >= 2) {
        var mm = $('.cpjyz-3').off('click', fn)
    }
    var ww = -index1 * nnn;
    $('.cpjyz-2-2 ul').stop().animate({
        marginLeft: ww
    }, 500);
    $('.cpjyz-4 li').eq(index1).css('backgroundColor', 'skyblue').siblings().css('backgroundColor', '#ccc');
    if (index1 == 1) {
        $('.cpjyz-2-1 ').click(fv);
    }
}
$('.cpjyz-3').on('click', fn);
// 左按钮
function fv() {
    console.log($('.cpjyz-2-1 '))
    index1--;
    if (index1 <= 0) {
        $('.cpjyz-2-1').off('click', fv)
    }
    var ww = -index1 * nnn;
    $('.cpjyz-2-2 ul').stop().animate({
        marginLeft: ww
    }, 500);
    $('.cpjyz-4 li').eq(index1).css('backgroundColor', 'skyblue').siblings().css('backgroundColor', '#ccc');
    if (index1 == 1) {
        $('.cpjyz-3').on('click', fn);

    }
}

// $('.cpjyz-2-1 img').click(function(){
//     index --; 
//     var ww = -index*nnn;
//     console.log(ww);
//     $('.cpjyz-2-2 ul').stop().animate({
//         marginLeft:ww
//     },500);
//     $('.cpjyz-4 li').eq(index).css('backgroundColor', 'skyblue').siblings().css('backgroundColor', '#ccc');
// });
// 小点
$('.cpjyz-4 li').click(function () {
    index = $(this).index()
    var ww = -index * nnn;
    console.log(index)
    $('.cpjyz-2-2 ul').stop().animate({
        marginLeft: ww
    }, 500)
    $('.cpjyz-4 li').eq(index).css('backgroundColor', 'skyblue').siblings().css('backgroundColor', '#ccc');
})