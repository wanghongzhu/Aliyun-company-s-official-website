/* 定制需求下拉菜单 */
$('.navCustom').mouseenter(function () {
    $(this).children('.customBtm').stop().slideDown(500)
});
$('.customBtm').mouseleave(function () {
    $(this).stop().slideUp(500)
});
$('.navCustom').mouseleave(function () {
    $(this).find('.customBtm').stop().slideUp(500)
})

/* 买家/卖家下拉菜单 */

$('.bullCentre_one').mouseenter(function () {
    $(this).find('i').text('▲')
    $('.bullBtm').stop().slideDown(0)
});
$('.bullBtm').mouseleave(function () {
    $('.bullCentre_one i').text('▼')
    $(this).stop().slideUp(0)
});
$('.bullCentre').mouseleave(function () {
    $('.bullCentre_one i').text('▼')
    $(this).find('.bullBtm').stop().slideUp(0)
})
$('.seller_two').mouseenter(function () {
    $(this).find('i').text('▲')
    $('.sellerBtm').stop().slideDown(0)
});
$('.sellerBtm').mouseleave(function () {
    $('.seller_two i').text('▼')
    $(this).stop().slideUp(0)
});
$('.seller').mouseleave(function () {
    $('.seller_two i').text('▼')
    $(this).find('.sellerBtm').stop().slideUp(0)
});
/* 卖家/买家下拉菜单结束 */


/*大 侧边栏 */
$('.separate_up_l li').mouseenter(function () {
    var aa = $(this).index();
    console.log(aa)

    $('.separate_up_r li').eq(aa).stop(true, false).css({
            left: 230,
        })
        .siblings().stop(true, false).css({
            left: -950,
        })
});

// $('.separate_up').mouseleave(function () {
//     $('.cloud_sidebar').stop().animate({
//         left: -1180
//     }, 500)
// });
$('.cloud_banner .warper').mouseleave(function () {
    $('.cloud_sidebar').stop().animate({
        left: -1180
    }, 500)
});

/* 轮播图 */
// 定义一个索引 index = 0
var index = 0;
// 封装 向右切换的函数
function Right() {
    // 更改索引
    index++;
    // 判断索引 如果为 8 设置 为 0 
    if (index >= $('.rotation ul li').length) {
        index = 0;
    }
    // 根据索引找到对应的 轮播项显示(淡入) 其他兄弟元素 隐藏(淡出)
    $('.rotation ul li').eq(index).fadeIn(500).siblings().fadeOut(500);
    // 找到小点，切换小点的样式
    $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
}
// 封装切换轮播项函数
function lb() {
    // 根据索引找到对应的 轮播项显示(淡入) 其他兄弟元素 隐藏(淡出)
    $('.rotation ul li').eq(index).fadeIn(500).siblings().fadeOut(500);
    // 找到小点，切换小点的样式
    $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
}

// 获取 一组小点 
$('.controls a').click(function () {
    var that = $(this).index();
    index = that;
    lb();
});
// 开启定时器
var timer = setInterval(function () {
    Right();
}, 2000);
// 鼠标进入 轮播项容器 清除定时器
$('.rotation').mouseenter(function () {
    clearInterval(timer);
});
// 鼠标离开 开启定时器
$('.rotation').mouseleave(function () {
    timer = setInterval(function () {
        Right();
    }, 2000);
});

/* 需求类型侧边栏 */









/* TAB */
$('.client_title li').click(function () {
    var aa = $(this).index();
    console.log(aa)
    $('.client_content li').eq(aa).stop().show().siblings().hide();
})
$('.cloud_client_tab').mouseleave(function () {
    var aa = $(this).index();
    console.log(aa)
    // $('.client_content li').eq(0).stop().show().siblings().hide();
})
/* 回到顶部 */
