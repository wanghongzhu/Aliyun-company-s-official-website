// 当浏览器卷上去的距离大于600px时，显示  然后点击 回到顶部回到顶部

    var v = 600;
    $(window).scroll(function () {
        var v1 = parseFloat($(window).scrollTop());
        if (v1 > v) {
            $('.box').css('display','block');
        } else {
            $('.box').css('display','none');
        }
    });

    $('.box').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);


    });
