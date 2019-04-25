$('.map_area1 .dot').mouseenter(function () {
    $('.open_data1').show();
    $('.open_data1 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area1 .dot').mouseleave(function () {
    $('.open_data1 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});





$('.map_area2 .dot').mouseenter(function () {
    $('.open_data2').show();
    $('.open_data2 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area2 .dot').mouseleave(function () {
    $('.open_data2 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});




$('.map_area3 .dot').mouseenter(function () {
    $('.open_data3').show();
    $('.open_data3 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area3 .dot').mouseleave(function () {
    $('.open_data3 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});




$('.map_area4 .dot').mouseenter(function () {
    $('.open_data4').show();
    $('.open_data4 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area4 .dot').mouseleave(function () {
    $('.open_data4 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});



$('.map_area5 .dot').mouseenter(function () {
    $('.open_data5').show();
    $('.open_data5 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area5 .dot').mouseleave(function () {
    $('.open_data5 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});



$('.map_area6 .dot').mouseenter(function () {
    $('.open_data6').show();
    $('.open_data6 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area6 .dot').mouseleave(function () {
    $('.open_data6 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});



$('.map_area7 .dot').mouseenter(function () {
    $('.open_data7').show();
    $('.open_data7 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area7 .dot').mouseleave(function () {
    $('.open_data7 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});



$('.map_area8 .dot').mouseenter(function () {
    $('.open_data8').show();
    $('.open_data8 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area8 .dot').mouseleave(function () {
    $('.open_data8 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});



$('.map_area9 .dot').mouseenter(function () {
    $('.open_data9').show();
    $('.open_data9 a ').find('i').animate({
        width: 100,
        height: 100,
    }, 500);
});
$('.map_area9 .dot').mouseleave(function () {
    $('.open_data9 a ').find('i').animate({
        width: 30,
        height: 100,
    }, 500);
});



$('.map_area10 .dot').mouseenter(function () {
    $('.open_data10').show();
    $('.open_data10 a ').find('i').animate({
        width: 100,
        height: 100,
    }, 500);
});
$('.map_area10 .dot').mouseleave(function () {
    $('.open_data10 a ').find('i').animate({
        width: 30,
        height: 100,
    }, 500);
});



$('.map_area11 .dot').mouseenter(function () {
    $('.open_data11').show();
    $('.open_data11 a ').find('i').animate({
        width: 100,
        height: 100,
    }, 500);
});
$('.map_area11 .dot').mouseleave(function () {
    $('.open_data11 a ').find('i').animate({
        width: 30,
        height: 100,
    }, 500);
});


$('.map_area12 .dot').mouseenter(function () {
    $('.open_data12').show();
    $('.open_data12 a ').find('i').animate({
        width: 100,
        height: 100,
    }, 500);
});
$('.map_area12 .dot').mouseleave(function () {
    $('.open_data12 a ').find('i').animate({
        width: 30,
        height: 100,
    }, 500);
});

$('.region .clerrr').mouseleave(function () {
    $(this).css('display', 'none');
    // $(this).hide();
    
});



$('.map_area3 .dot').mouseenter(function () {
    $('.open_data3').show();
    $('.open_data3 a ').find('i').animate({
        width: 100,
        height: 100
    }, 500);
});
$('.map_area3 .dot').mouseleave(function () {
    $('.open_data3 a ').find('i').animate({
        width: 30,
        height: 100
    }, 500);
});

/* TAB 切换 */


$('.dynamic_map_tab_title li').click(function () {
    var bbb = $(this).index();
    $(this).css(
       {
        'color': '#0d94ca',
        'border-bottom-color': '#0d94ca',
        'border-bottom-width': '4px'
       }
    ).siblings().css({
        'color': '#fff',
        'border-bottom-width': '0px'
    })
    console.log(bbb)
    $('.dynamic_map_tab_cont ul').eq(bbb).stop().show().siblings().hide();
})
$('.dynamic_map_tab_cont .clearfix li').mouseenter(function(){
    $(this).addClass('tab_big').siblings().removeClass('tab_big')
})




/* 全球客户业务 */

$('.golbal_customers li').mouseenter(function () {
    $(this).find('.golbal_btm').stop().animate({
        top: 0
    }, 0)
})
$('.golbal_customers li').mouseleave(function () {
    $(this).find('.golbal_btm').stop().animate({
        top: 120
    }, 0)
})