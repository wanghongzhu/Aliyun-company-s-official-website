
// customer获取宽度
var customer= document.querySelector('.customer');
// content  移动
var logo = document.querySelector('.logo');
// btn-left:点击换图
var anl = document.querySelector('.anl');
// anr:点击换图
var anr = document.querySelector('.anr');
//  controls li :点击换图
// var lis = document.querySelectorAll('.controls li');

// 获取元素宽度
var width = customer.offsetWidth;
console.log(width);

// 定义索引
var index = 0;

// 右按钮
anr.onclick = function () {
    // 再换图之前要看看index是否是0，如果是0，下一张图可鞥是1，直接把content的left的值设置为0;
    if (index == 0) {
        logo.style.left = 0 + 'px';

    }
    // 在index加之前，对应的就是前一个li的index
    lis[index].className = '';
    index++;
    // 计算出移动的距离
    var moveVal = -index * width;

    // 移动元素
    moveElement(logo, moveVal, 100);
    // 判断index的值
    if (index >= 2) {
        index = 0;

    }
    // 修改li的class
    // lis[index].className = 'active';
}
// 左按钮

anl.onclick = function () {
    lis[index].className = '';
    index--;
    if (index < 0) {
        index = 1;
        logo.style.left = -3372 + 'px';
    }
    // 计算移动距离
    var moveVal = -index * width;
    // 移动的元素
    moveElement(logo , moveVal, 100);
    lis[index].className = 'active';
}
for (var i = 0; i < lis.length; i++) {
    lis[i].newIndex = i;
    lis[i].onclick = function () {
        lis[index].className = '';
        index = this.newIndex;
        var moveVal = -index * width;
        moveElement(logo, moveVal, 100);
        lis[index].className = 'active';
    }

}


// 自动轮播
var hh = window.setInterval(function () {
    anr.onclick();
}, 1000);
customer.onmouseenter = function () {
    window.clearInterval(hh);
}
customer.onmouseleave = function () {
    hh = window.setInterval(function () {
        anr.onclick();
    }, 1000);
}
