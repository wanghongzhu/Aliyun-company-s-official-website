//获取ul宽度
var ulW = $('.solution ul').width();
//获取li的总个数
var lis = $('.solution ul li').length;
//获取每个li的宽度
var liW = $('.solution ul li').width();
//获取div的宽度
var divW = $('.solution').width();

var num = 0;
$('.list-next').click(function () {
    console.log(lis);


    //可视区域li的个数
    var liViewNum = Math.ceil(divW / liW);
    //可视区域li个数的宽度
    // var liViewWidth = (liViewNum + num) * liW;


    //剩余li个数
    var surLi = lis - liViewNum;

    // 如果剩余li的个数大于可视区域li的个数
    if (surLi > liViewNum) {
        $('.solution').find('ul').animate({
            left: -((liViewNum - 1) * liW)
        }, 3000);

    } else if (surLi <= liViewNum) {
        for (var i = 0; i < liViewNum; i++) {
            var li = $('<li></li>').html('<div class="bg"><img src="./images/lunbo/TB16hkwLXXXXXX6XXXXXXXXXXXX-576-840.jpg" alt=""></div><div class="forecolors"><div class="forecolor"><img src="./images/TB11NbtLXXXXXXQXVXXXXXXXXXX-144-144.png" alt=""><div class="iconfont icon-hengxian"></div><h4>医疗解决方案</h4><div class="forecolor-active"><p>根据网站不同发展阶段，为网站类用户提供最佳上云方案，有效降低运维难度和整体IT成本</p><span>查看详情</span></div></div></div>');
            console.log($('.solution ul').append(li));
        }
        $('.solution').find('ul').animate({
            left: -(surLi * liW - liW / 2)
            // left: -(surLi * liW)
        }, 500);
        

    }

    // console.log(surLi,liViewNum,num);
});
$('.list-prev').click(function () {
    console.log(lis);


    //可视区域li的个数
    var liViewNum = Math.ceil(divW / liW);
    //可视区域li个数的宽度
    // var liViewWidth = (liViewNum + num) * liW;


    //剩余li个数
    var surLi = lis - liViewNum;

    // 如果剩余li的个数大于可视区域li的个数
    if (surLi > liViewNum) {
        $('.solution').find('ul').animate({
            left: ((liViewNum - 1) * liW)
        }, 3000);

    } else if (surLi <= liViewNum) {
        for (var i = 0; i < liViewNum; i++) {
            var li = $('<li></li>').html('<div class="bg"><img src="./images/lunbo/TB16hkwLXXXXXX6XXXXXXXXXXXX-576-840.jpg" alt=""></div><div class="forecolors"><div class="forecolor"><img src="./images/TB11NbtLXXXXXXQXVXXXXXXXXXX-144-144.png" alt=""><div class="iconfont icon-hengxian"></div><h4>医疗解决方案</h4><div class="forecolor-active"><p>根据网站不同发展阶段，为网站类用户提供最佳上云方案，有效降低运维难度和整体IT成本</p><span>查看详情</span></div></div></div>');
            console.log($('.solution ul').append(li));
        }
        $('.solution').find('ul').animate({
            left: (surLi * liW - liW / 2)
            // left: -(surLi * liW)
        }, 500);
        

    }

    // console.log(surLi,liViewNum,num);
});