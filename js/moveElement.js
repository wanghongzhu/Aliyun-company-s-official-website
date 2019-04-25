// 封装动画
/*
	
	element：要移动的元素
	targetVal：要移动的距离
	speed：每次挪动距离

 */
var dsq;
function moveElement (element,targetVal,speed) {

	// 在启动定时器前要把上面的一个定时器清除
	window.clearInterval(dsq);

	// 反复性定时器
	dsq = window.setInterval(function () {

		// 获取div当前左边的距离
		var leftVal = element.offsetLeft;
		// 判断是否到大目的距离
		if (leftVal == targetVal) {
			window.clearInterval(dsq);
			return;
		}

		if (Math.abs(targetVal - leftVal) < speed) {
			//不够挪的时候，直接把元素设置到目标地址
			element.style.left = targetVal + 'px';
		}else{
			// 够挪
			// 挪动10
			// 目标距离如果大于左端距离正方向，如果目标距离小于左端距离反方向
			if (targetVal - leftVal > 0) {
				leftVal = leftVal + speed;
			}else{
				leftVal = leftVal - speed;
			}

			// 赋值给div的left的值
			element.style.left = leftVal + 'px';
		}


	},100);

}