// 页面主体通栏部分轮播图思路：
// 1.     获取 ul 的总宽度， 总长度
// 2，   获取当前可视区域 显示的 li 的个数 以及总宽度
// 3.   点击时将前边可视区域的 li 整体移动五个li的宽度， 
//     每移动一次判断后边剩余 li 的个数， 如果大于等于五个， 
//    继续移动， 如果小于五个将剩余的部分全部显示出来


// 获取 ul 的总宽度， 总长度
var ulW = $('.solution').find('ul').width();
var left = $('.solution').find('ul').offset().left;
console.log(left);

// 获取当前可视区域 显示的 li 的个数 以及总宽度
var lis1 = $('.solution').find('ul').children('li').width();
// li 的个数
var liLength = $('.solution').find('ul').children('li').length;
console.log(liLength);

// 可视区域的宽度
var viewsW = $(document).width();

console.log(lis1);
// 设置一个变量计算点击次数
var once= 0;
// 右按钮点击事件
// var remainder = liLength;
var sum = 5;
$('.solution').on('click', '.list-next', function () {

    
    // 计算当前可视区域有几个li
    var liNum = parseInt(viewsW / lis1);




    
    // 每点击一次加 1 
    // if(once >= liLength){
    //     once = 0;
    // }
    
    
    
    
    // 计算每点击一次移动之后剩余的 li的个数
    // if(liLength - liNum != liLength){
    //     remainder = Math.floor(liLength - once * liNum);
    //     console.log('剩余的'+ remainder);
    // }
    
    

    var le = liNum * lis1;
    
    // 判断 后边的li是否大于五
    if((liLength - sum) >= liNum){
        $('.solution').find('ul').animate({
            left: - le
        },300);
        sum += liNum;
    }else if((liLength - sum) < liNum){
        $('.solution').find('ul').animate({
            left: - (le + (liLength - sum) * lis1)
        },300);
        sum = 5;
    }
});

// 左按钮点击事件
$('.solution').on('click', '.list-prev', function () {
    // console.log('←');


});

