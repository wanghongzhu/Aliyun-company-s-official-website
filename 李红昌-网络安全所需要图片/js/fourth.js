// 第四行小图片的轮播图
// 轮播图的js代码
// 获取元素   添加事件   处理程序
// 右按钮轮播图片{无限轮播}
// 左按钮轮播图片{无限轮播}
// 获取元素
// fourth获取宽度
var fourth = document.querySelector('.fourth');
// content  移动
var con = document.querySelector('.con');
// btn-left:点击换图
var bfl = document.querySelector('.bfl');
// btnfr:点击换图
var bfr = document.querySelector('.bfr');


// 获取元素宽度
var width = fourth.offsetWidth;
// 定义索引
var index = 0;

// 右按钮
bfr.onclick = function () {
    index++;
    if (index > 2) {
        index = 1;
    }
    var moveVal = -index * width;
    // 移动元素
    moveElement(con, moveVal, 100);
}
// 左按钮
bfl.onclick = function () {
    // lis[index].className = '';
    index--;
    if (index <= 0) {
        index = 2; 
    }
    // 计算移动距离
    var moveVal = -index * width;
    // 移动的元素
    moveElement(con, moveVal, 100);

}