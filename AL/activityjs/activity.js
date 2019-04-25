// var mySwiper = new Swiper('.swiper-container', {
//     direction: 'vertical', // 垂直切换选项
//     loop: true, // 循环模式选项

//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // 如果需要前进后退按钮
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   }) 

// tab
// 给代表切换项按钮的li注册鼠标进入事件
$('.tab .tab-control li').mouseenter(function () {
  var index = $(this).index();
  // 当前的li增加类名突出显示，其他兄弟移除类名恢复默认样式
  $(this).addClass('active').siblings().removeClass('active');
  // 获取当前li的索引
  // 根据索引找到对应的显示项显示
  $('.tab-content div').eq(index).css('display', 'block').siblings().css('display', 'none');
  // 获取 tabLi
  var tabLi = $('.tabLi');
  $(tabLi).eq(index).show().siblings().hide();
});

/* 二级tab切换 */
$('.tabsale .tabsaleFind').click(function () {
  var index = $(this).index();
  // 获取当前li的索引
  // 根据索引找到对应的显示项显示
  $('.tabsaleChildren').eq(index).show().siblings().hide();
});
$('.tabsale').on('mouseenter', '.tabsaleFind1', function () {
  var index = $(this).index();
  $('.tabsaleChildren1').eq(index).show().siblings().hide();
});

$('.gamekind').mouseenter(function () {
  $('.divTab2Li').eq($(this).index()).removeClass('active2').siblings().addClass('active2');
});


$(' .chanpin2 li').mouseenter(function () {
  var index = $(this).index();
  $('.chanpin2all').eq(index).removeClass('active2').siblings('.chanpin2all').addClass('active2');
});

$('.tabsaleChildren .chanpin22 .chanpin22Li').mouseenter(function () {
  var index = $(this).index();
  $('.tabsaleChildren .chanpin2allss').eq(index).show().siblings('.chanpin2allss').hide();
  console.log(index);
  
});
$('.tabsaleChildren .chanpin23 .chanpin23Li').mouseenter(function () {
  var index = $(this).index();
  $('.tabsaleChildren .chanpin2all-1 li').eq(index).show().siblings('.chanpin2all-1 li').hide();
  console.log(index);
  
});
$(' .chanpin24Liyun').click(function () {
  var index = $(this).index();
  $('.chanpin2allyun').eq(index).css('display','block').siblings('.chanpin2allyun').css('display','none');
  console.log($('.chanpin2allyun').eq(index));
  
});
