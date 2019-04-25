$(function () {
    // 头部导航搜索框
    $('.headNavOne-right').on('mouseenter', '#searchBox', function () {
        $(this).css('border', '1px solid #00c1de').stop().animate({
            width: 290,
            height: 50,
            right: 100,
        }, 300);
    });
    $('.headNavOne-right').on('mouseleave', '#searchBox', function () {
        $(this).css('border', 'none').stop().animate({
            width: 200,
            height: 50,
            right: 0,
        }, 300);
    });

    /* 头部导航语言栏显示隐藏 */
    $('.headNavOne-right').on('mouseenter', '.language', function () {
        // 此处层级问题 清除层级
        $('.head .list-box-row').css('z-index', 1);
        $(this).find('.icon-icon1').hide().siblings().show().parent().parent().find('.language-bot').show();
    });
    $('.headNavOne-right').mouseleave(function () {
        // 此处层级问题 清除层级
        $('.head .list-box-row').css('z-index', 1);
        $(this).find('.icon-icon1').show().siblings().hide();
        $(this).find('.language-bot').hide();
    });
    $('.headNavOne-right').on('mouseleave', '.language-bo', function () {
        // 此处层级问题 清除层级
        $('.head .list-box-row').css('z-index', 3);
        $(this).find('.icon-icon1').show().siblings().hide();
        $(this).find('.language-bot').hide();
    });


    /* 一级导航栏左上角侧边栏效果 */
    // 获取 .img
    $('.img').mouseenter(function () {
        $('.headSidebar').stop().animate({
            'left': 0,
            'z-index': 5
        }, 300);
    });
    $('.img').mouseleave(function () {
        $('.headSidebar').stop().animate({
            'left': -200,
            'z-index': 5
        }, 300);
    });

    /* 一级导航栏左上角侧边栏 */
    $('.headSidebar>ul .liTab').mouseenter(function () {
        var index = $(this).index();
        $('.head .list-box-row').css('z-index', 1);
        var taxonsUl = $('.taxonsUl');
        $(taxonsUl).eq(index).show().siblings().hide();
    });
    $('.taxonsUls').mouseleave(function () {
        $('.head .list-box-row').css('z-index', 3);
        $('.taxonsUl').hide();
    });

    $('.taxonsUl1').on('mouseenter', '.taxonsUlFindLi', function () {
        var index = $(this).index();
        $('.taxonsUlFindItem').eq(index).show().siblings().hide();
        console.log($('.taxonsUlFindItem'));

    });

    // 二级导航 tab切换
    // 获取 liItems 
    $('.head-nav-two>ul>li').mouseenter(function () {
        var index = $(this).index();
        var tabItem = $('.head-nav-two .items ').children('.items-ali');
        // 获取  .head .list-box-row
        $('.head .list-box-row').css('z-index', 1);
        $('.head-nav-two .items ').show();
        $(tabItem).eq(index).fadeIn(50).siblings().fadeOut(100);
    });
    $('.head-nav-two .items').mouseleave(function () {
        $('.head .list-box-row').css('z-index', 3);
        $('.head-nav-two .items ').hide();
        $('.head-nav-two .items ').children('.items-ali').hide();
    });


    // 二级导航 产品栏切换
    $('.itemsAli').find('.BigLi').mouseenter(function () {
        var index = $(this).index();
        $(this).css('border', 'none');
        // 设置背景颜色
        $(this).css({
            'background': '#fff',
            'color': '#00b8db',
            'border': 'none'
        }).siblings().css({
            'background': '#00b8db',
            'color': '#fff',
            'border': '1px solid #ccc'
        });
        var itemsAliRights = $('.itemsAliRight').children('.itemsAli-right');
        // 获取  .head .list-box-row
        $('.head .list-box-row').css('z-index', 1);
        //   设置显示隐藏
        $(itemsAliRights).eq(index).fadeIn(50).siblings().fadeOut(100);
    });
    $('.itemsAli').find('.BigLi').mouseleave(function () {
        var idnex = $(this).index();
        // 获取  .head .list-box-row
        $('.head .list-box-row').css('z-index', 1);
        //   设置显示隐藏
        var itemsAliRights = $('.itemsAliRight').children('.itemsAli-right');
    });




    /*  海纳百川，精选全球的高品质软件与服务 */


    /* 网页主体通栏轮播项鼠标进入事件 */
    /* 通栏轮播项特效 */
    // var datas = ['tl1.2.png', 'tonglan.png', 'tonglan1.png', 'tonglan3.png', 'tonglan4.png', 'tonglan5.png', 'tonglan6.png', 'tonglan7.png', 'tonglan8.png', 'tonglan9.png', 'tonglan10.png', ]
    // var path = './images/';
    // // 更换img的src
    // var imgs = document.querySelectorAll('.forecolors .imgImg');
    // for (var i = 0; i < imgs.length; i++) {
    //     imgs[i].index = i;
    //     console.log(datas[i]);
        
    //     $(imgs[i].index).attr('src', path + datas[i]);
    // }
    // $()

    $('.solution ul li .forecolors').mouseenter(function () {
        $(this)
            .css({
                'background': '#0cb4ce',
                'transition': 'all .3s cubic-bezier(.4, 0, .2, 1)',
            })
            .find('.forecolor')
            .css({
                'transition': '.5s',
                'transform': 'translateY(-80px)',
                'opacity': 1,
            })
            .find('.icons')
            .css('display', 'none')
            .next()
            .next()
            .css({
                'display': 'block',
            });
    

        $(this)
            .parent()
            .siblings()
            .find('.forecolors')
            .css({
                'background': '#000',
                'opacity': .7,
                'transition': 'all .3s cubic-bezier(.4, 0, .2, 1)',
            })
            .find('.forecolor')
            .css({
                // 'transition': '.5s',
                'transform': 'translateY(0px)',
                // 'opacity': 1,
            })
            .find('.icons')
            .css('display', 'block')
            .next()
            .next('.forecolor-active')
            .css({
                'display': 'none',
            });
    });
    $('.forecolors').mouseleave(function () {
        $(this)
            .css({
                'background': '#000',
                'opacity': .7,
                'transition': 'all .2s cubic-bezier(.4, 0, .2, 1)',
            })
            .find('.forecolor')
            .css({
                // 'transition': '.5s',
                'transform': 'translateY(0px)',
                // 'opacity': 1,
            })
            .find('.icons')
            .css('display', 'block')
            .next()
            .next('.forecolor-active')
            .css({
                'display': 'none',
            });

    });

    







    // 回到顶部
    $(window).scroll(function () {
        // 获取 卷上去的距离
        var scllTop = $(this).scrollTop();
        if (scllTop > 750) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });
    $('.top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 200)
    });


    // 固定定位咨询建议
    $('.suggest').find('.consu').mouseenter(function () {
        $(this).next().fadeIn(200);
    });
    // 点击删除隐藏
    $('.closes').click(function () {
        $(this).parent().parent().fadeOut(200);
    });
    // 离开隐藏
    $('.suggest').mouseleave(function () {
        $('.suggest').find('.consu').next().fadeOut(200);
    });

});