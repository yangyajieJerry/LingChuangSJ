// 登录部分
$('.indexlist1').click(function(){
  $('.inp').animate({top:'0px'},600);
})
$('.end').click(function(){
  $('.inp').animate({top:'-998px'},600);
})
// 大图滚动
$(function(){
  var imgW=$('.big_con img').width();

  var x=1;//图片下标
  var n=0;//数字下标
  var time=null;
  var fir=$('.big_con img:first').clone();
  var lst=$('.big_con img:last').clone();
  $('.big_con').append(fir);                    //最后添加第一张图，最前面添加最后一张图
  $('.big_con').prepend(lst);                                                                        
  $('.big_inner').scrollLeft($('.big_con img').width());   //初始位置
  $('.big_list li').click(function(){
    clearInterval(time);
    n=$('.big_list li').index(this);
    x=n+1;
    $('.big_list li').eq(n).addClass('select').siblings().removeClass('select');
    $('.big_inner').stop().animate({scrollLeft:imgW*x});
    move();
  })
    $('.right').click(function(){
    clearInterval(time);
    x++;
    if (x>=$('.big_con img').length) {
      x=2;
      $('.big_inner').scrollLeft(imgW);
    };
    n++;
    if (n>=$('.big_list li').length) {
      n=0;
    };
    $('.big_inner').stop().animate({scrollLeft:imgW*x});
    $('.big_list li').eq(n).addClass('select').siblings().removeClass('select');
    // move();
  })

  $('.left').click(function(){
    clearInterval(time);
    x--;
    if (x<0) {
      x=$('.big_con img').length-3;
      $('.big_inner').scrollLeft(imgW*(x+1));
    };
    n--;
    if (n<0) {
      n=$('.big_list li').length-1;
    };
    $('.big_inner').stop().animate({scrollLeft:imgW*x});
    $('.big_list li').eq(n).addClass('select').siblings().removeClass('select');
    move();
  })
  function move(){
    time=setInterval(function(){
      x++;
      if (x>=$('.big_con img').length) {
        x=2;
        $('.big_inner').scrollLeft(imgW);
      };
      n++;
      if (n>=$('.big_list li').length) {
        n=0;
      };
      $('.big_inner').stop().animate({scrollLeft:imgW*x});
      $('.big_list li').eq(n).addClass('select').siblings().removeClass('select');
    },4500)
  }
  move();
})

// 更多案例效果
$('.index_eginner .index_egcon').hover(function(){
  $(this).find('.index_egzhe1').css('display','block');
 $(this).find('.index_egzhe1').animate({opacity:'0.8'},500);
},function(){
    $(this).find('.index_egzhe1').css('display','none');
    $(this).find('.index_egzhe1').animate({opacity:'0'},500);
})
$('.s_index_eginner .s_index_egcon').hover(function(){
  $(this).find('.s_index_egzhe1').css('display','block');
 $(this).find('.s_index_egzhe1').animate({opacity:'0.8'},500);
},function(){
    $(this).find('.s_index_egzhe1').css('display','none');
    $(this).find('.s_index_egzhe1').animate({opacity:'0'},500);
})


// 首页logo滚动
$(function(){
  	var ulw=$('.logo_con ul').width();
 	var x=0;
    $('.logo_right').click(function(){
    	x++;
   		if (x>=$('.logo_con ul').length) {
      		x=0;
     	 	$('.logo_inner').scrollLeft(ulw);
    	};
    	$('.logo_inner').stop().animate({scrollLeft:ulw*x});
  	})
 	$('.logo_lift').click(function(){
    	x--;
   		if (x<0) {
      		x=$('.logo_con ul').length-1;
      		$('.logo_inner').stop().animate({scrollLeft:ulw*x});
    	};
    	$('.logo_inner').stop().animate({scrollLeft:ulw*x});
  	})
})
// 首页logo滚动hover事件
$('.logo_out li').hover(function(){
  $(this).find('.cai').css('zIndex','50');
  $(this).find('img').css('borderColor','#dddddd');
},function(){
  $(this).find('.cai').css('zIndex','-1');
  $(this).find('img').css('borderColor','#EEEEEE');
})

// 底部分享
$('.fenxiang li').hover(function(){
  var m=$('.fenxiang li').index(this)+1;
  $(this).find('img').attr('src','images/smalllogo'+m+'0.png');
  if(m==1){
    $('.ewm2').animate({opacity:'1'},1000);
    $('.ewm2').css('display','block');

  }
},function(){
  var n=$('.fenxiang li').index(this)+1;
  $(this).find('img').attr('src','images/smalllogo'+n+'.png'); 
    if(n==1){
    $('.ewm2').animate({opacity:'0'},1000);
    $('.ewm2').css('display','none');
    
  }
})
// 返回顶部
$('.top li').hover(function(){
  var m=$('.top li').index(this)+1;
  $(this).find('img').attr('src','images/top'+m+'0.jpg');
  if(m==1){
    $('.ewm1').animate({opacity:'1'},1000);
    $('.ewm1').css('display','block');

  }
  if(m==3){
    $(".iphnum").animate({right:'60px'},100);
  }

},function(){
   var n=$('.top li').index(this)+1;
  $(this).find('img').attr('src','images/top'+n+'.jpg'); 
    if(n==1){
    $('.ewm1').animate({opacity:'0'},1000);
    $('.ewm1').css('display','none');
    
  }
  if(n==3){
    $(".iphnum").animate({right:'-79px'},100);
  }
})
$('.backtop').click(function(){
  $('body,html').animate({scrollTop: 0}, 600);
  return false;
})
// tab切换
$.fn.extend({
  Tap:function(){
    var _this=$(this);
    $(_this).find('.tabtit p').click(
      function(){
        var i=$(_this).find('.tabtit p').index(this);
        $(_this).find('.tabtit p').eq(i).addClass('select').siblings().removeClass('select');
        $(_this).find('.tabinner .tabcon').eq(i).addClass('show').siblings().removeClass('show');
      })
  }
})
$('#s_tab1').Tap();
$('#s_tab2').Tap();
// 子页面服务hover事件
$('.service li').hover(function(){
  $(this).find('.cai').css('zIndex','50');
  $(this).find('img').css('borderColor','#dddddd');
},function(){
  $(this).find('.cai').css('zIndex','-1');
  $(this).find('img').css('borderColor','#EEEEEE');
})
// 加入我们招聘部分
$('.ji_cl_bt').click(function(){
  $('.ji_cl_bt img').attr('src','images/jia.png')
  $('.ji_cl_bt').removeClass('ji_show');
  $('.ji_conleft .acd').css('display','none');
  var m=$('.ji_cl_bt').index(this);
  $('.ji_cl_bt img').eq(m).attr('src','images/jian.png')
  $('.ji_cl_bt').eq(m).addClass('ji_show');
  $('.ji_conleft .acd').eq(m).css('display','block');
})
// 案例选择点击事件
// $('.example_bt .rel').toggle(function(){
//     var w=$('.example_bt .rel').index(this);
//      $('.downcon').eq(w).css('display','block');
// },function(){
//     var u=$('.example_bt .rel').index(this);
//     $('.downcon').eq(u).css('display','none');
// })
$('.example_bt .rel').click(function(){
   var w=$('.example_bt .rel').index(this);
   var bb=$('.downcon').eq(w).css('display','none');
  if(bb){
     $('.downcon').eq(w).css('display','block');
  }
})

$(".example_bt .rel").hover(function(){},function(){
  $(this).children(".downcon").stop(true,true).hide();
})


$('.downcon a').click(function(){
    $(this).parent(".downcon").siblings(".wbjs").text($(this).text()); 
     $('.example_bt li').removeClass('eshow');
     $('.example_bt span').removeClass('eshow');
    $(this).parent().siblings('span').addClass('eshow');
})
