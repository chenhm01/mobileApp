/*侧边栏*/
$(function() {
    var times1 = 1;
    $(".topMnu").click(function() {
        if (times1 == 1) {
            $(".slide_right").animate({ "right": "0" }, 500);
            $(".divBox").animate({ "right": "3rem" }, 500);
            $(".topMnu").attr("src", "images/ico_btn2.png");
            times1 = 2;
        } else if (times1 == 2) {
            $(".slide_right").animate({ "right": "-3rem" }, 500);
            $(".divBox").animate({ "right": "0" }, 500);
            $(".topMnu").attr("src", "images/ico_btn2_hov.png");
            times1 = 1;
        };
    });
});




/*头条跑马灯效果*/
/*li的第一个上划 并加入到列表后面*/
function autoPlay() {
    $(".news_li li:first").slideUp(1000, function() {
        $(this).show().appendTo('.news_li');
    })
}
var timer = setInterval(autoPlay, 2000);

$(".news_li li").hover(
	function() {
    clearInterval(timer);
	}, 
	function() {
    timer = setInterval(autoPlay, 2000);
})




/*优选留学方案点击下拉 出现列表*/
$(function() {
    var time = 1;
    $("#planR").click(function(event) {
        if (time == 1) {
            $("#planR").addClass('turn1');
            $("#planR").removeClass('turn2');
            $(".abroadPlan").animate({ "height": "6rem" }, 500);
            time = 2;
        } else if (time == 2) {
            $("#planR").addClass('turn2');
            $("#planR").removeClass('turn1');
            $(".abroadPlan").animate({ "height": "1rem" }, 500);
            time = 1;
        }
    });
})

/*点击加载更多*/
$(function(){
    var times2=1;
    $("#showMore").click(function(event) {
        if (times2==1) {
            $(".college").animate({"height":"7rem"}, 500);
            $("#showMore a span").html("点击收起更多");
            times2=2;
        }else if (times2==2) {
            $(".college").animate({"height":"3rem"}, 500);
            $("#showMore a span").html("点击加载更多");
            times2=1;
        };
    });
});
/*地区导航栏 选择*/


$(function() {
    // 通过查找 .too 下的li 元素 遍历 循环
    $("#collegeMain .too").find("li").each(function(index) {
        // $(this) 当前选中的元素 鼠标移动
        $(this).click(function() {
            // $(this) 当前选中的元素 增加 on 样式 ，但是 其同胞元素 移除 on 样式
            //$(this).addClass("on").siblings().removeClass("on");
            $("#collegeMain .too").find("li").removeClass("on").eq(index).addClass("on");
            // .slide 通过 eq(index) 选择器 来显示隐藏
            $(".foo .slide").hide().eq(index).show();
        })
    })
})


/*底部导航栏*/
$(function() {
    $(".footerM ul li").click(function() {
        $(this).addClass('red').siblings().removeClass('red');
    });
});
$(function() {
    $(".page a").click(function() {
        $(this).addClass('red').siblings().removeClass('red');
    });
});
/*指纹*/
$(function(){
    var times3=1;
    $(".finger1").click(function(event) {
        if (times3==1) {
            $(".finger1").attr("src","images/ico_btn23.png");
            $(".finger1").siblings(".icon1").animate({"left":"1rem"});
            $(".finger1").siblings(".icon2").animate({"left":"2rem"});
            $(".finger1").siblings(".icon3").animate({"left":"3rem"});
            $(".finger1").siblings(".icon4").animate({"left":"4rem"});
            $(".finger1").siblings(".icon5").animate({"left":"5rem"});
            times3=2;
        }else if (times3==2) {
            $(".finger1").attr("src","images/ico_btn22.png")
            $(".finger1").siblings("a").animate({"left":"0.1rem"});
            times3=1;
        }
        
    });
});
/*点击按钮 缓慢回到顶部*/
$(function(){
    $(".icon5").click(function() {
        $("html,body").animate({ "scrollTop": 0 }, 2000);
    });
})

/*电话*/

function callme(){
    $(".phoneN").show();
    $(".dark").show();
};
 var timerP=setInterval(callme,2000);

$(function(){
    $("#call").click(function(event){
        clearInterval(timerP);
        $(".phoneN").show();
        $(".dark").show();
    });
    $(".phoneClose").click(function(event){
        clearInterval(timerP);
        $(".phoneN").hide();
        $(".dark").hide();
        timerP=setInterval(callme,2000);
    });
    $(".phoneCloseAll").click(function(event){
        clearInterval(timerP);
        $(".phoneN").hide();
        $(".dark").hide();        
    });    
});