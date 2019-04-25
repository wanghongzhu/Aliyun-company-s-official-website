

// 获取元素
// bannerCenter获取宽度
var bannerCenter = document.getElementById('bannerCenter');
// content  移动
var content = document.querySelector('.content');
// btn-left:点击换图
var btnLeft = document.querySelector('.btn-left');
// btnRight:点击换图
var btnRight = document.querySelector('.btn-right');
//  controls li :点击换图
var lis = document.querySelectorAll('.controls li');

// 获取元素宽度
var width = bannerCenter.offsetWidth;


// 定义索引
var index = 0;

// 右按钮
btnRight.onclick = function () {
    // 再换图之前要看看index是否是0，如果是0，下一张图可鞥是1，直接把content的left的值设置为0;
    if (index == 0) {
        content.style.left = 0 + 'px';

    }
    // 在index加之前，对应的就是前一个li的index
    lis[index].className = '';
    index++;
    // 计算出移动的距离
    var moveVal = -index * width;

    // 移动元素
    moveElement(content, moveVal, 100);
    // 判断index的值
    if (index >= 2) {
        index = 0;

    }
    // 修改li的class
    lis[index].className = 'active';
}
// 左按钮

btnLeft.onclick = function () {
    lis[index].className = '';
    index--;
    if (index < 0) {
        index = 1;
        content.style.left = -3372 + 'px';
    }
    // 计算移动距离
    var moveVal = -index * width;
    // 移动的元素
    moveElement(content, moveVal, 100);
    lis[index].className = 'active';
}

// 点击小点点
for (var i = 0; i < lis.length; i++) {
    lis[i].newIndex = i;
    lis[i].onclick = function () {
        lis[index].className = '';
        index = this.newIndex;
        var moveVal = -index * width;
        moveElement(content, moveVal, 100);
        lis[index].className = 'active';
    }

}

