    // 封装动画
    // element：要移动的元素
    // targetVal要移动的距离
    // speed 每次挪动的距离
    // 定义全局变量
    var dsq;

    function moveElement(element, targetVal, speed) {
        // 再启动定时器前要把上面的一个定时器清除
        window.clearInterval(dsq);
        // 反复性定时器
        dsq =window.setInterval(function(){
            // 获取div前左边的距离
            var leftVal=element.offsetLeft;
            // 判断是否到到达最大距离
            if(leftVal==targetVal){
                window.clearInterval(dsq);
                return;

            }
            if(Math.abs(leftVal-leftVal)<speed){
                // 不够诺一次的时候，直接把元素设置到目标地址
                element.style.left=targetVal+'px';
            } else{
                // 够挪，目标距离如果大于左端距离正方向，如果目标距离小于左端距离反方向
                if(targetVal-leftVal>0){
                    leftVal=leftVal+speed;

                }else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                    leftVal=leftVal-speed;                                                     
                }
           element.style.left=leftVal+'px';

            }

        },100);



    }