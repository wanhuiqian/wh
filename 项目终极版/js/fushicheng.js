$(function(){
	$(".header-21").hover(function(){
		$(".header-22").toggle();
		}
		);
	$(".header-23").hover(function(){
		$(".header-24").toggle();	
	}
	);
})

//--------------------
var ord=0;
function imgchange(){
	ord++;
	if(ord>3){
		ord=1;
	}
	$("#imgId")[0].src="../images/fudiv3-"+ord+".jpg";
	$(".div3-22 span").css("backgroundColor","gray");
	$(".div3-22 span:eq("+(ord-1)+")").css("backgroundColor","white");
}
var mysetInterval;
function startChange1(){
	 mysetInterval=setInterval("imgchange()",2000);
}
function stopImg1(){
	clearInterval(mysetInterval);   
}

$(function(){
	$(".div3-22 span").click(
		function(){
			var str=$(this).index();
			$(".div3-2 img")[0].src="../images/fudiv3-"+(str+1)+".jpg";
			$(".div3-22 span").css("backgroundColor","gray");
			$(".div3-22 span:eq("+str+")").css("backgroundColor","white");
			stopImg();
			imgchange(str);
			});
		

})

$(function(){
		$(".div4-216").mouseover(function(){
				$(".div4-24").css("opacity","1");
				$(".div4-210").css("opacity","1");
				$(".div4-217").css("opacity","1");
				$(".div4-218").css("opacity","1");
				
			});
		$(".div4-216").mouseout(function(){
				$(".div4-24").css("opacity","0.3");
				$(".div4-210").css("opacity","0.3");
				$(".div4-217").css("opacity","0.3");
				$(".div4-218").css("opacity","0.3");
				
			});
			
		$(".div4-23").mouseover(function(){
				$(".div4-21").css("opacity","1");
				$(".div4-22").css("opacity","1");
				$(".div4-29").css("opacity","1");
				$(".div4-215").css("opacity","1");
				
			});
		$(".div4-23").mouseout(function(){
				$(".div4-21").css("opacity","0.3");
				$(".div4-22").css("opacity","0.3");
				$(".div4-29").css("opacity","0.3");
				$(".div4-215").css("opacity","0.3");
				
			});
			
		$(".div4-26").mouseover(function(){
				$(".div4-25").css("opacity","1");
				$(".div4-211").css("opacity","1");
				$(".div4-212").css("opacity","1");
				
				
			});
		$(".div4-26").mouseout(function(){
				$(".div4-25").css("opacity","0.3");
				$(".div4-211").css("opacity","0.3");
				$(".div4-212").css("opacity","0.3");
				
				
			});
		$(".div4-27").mouseover(function(){
				$(".div4-28").css("opacity","1");
				$(".div4-213").css("opacity","1");
				$(".div4-214").css("opacity","1");
				
				
			});
		$(".div4-27").mouseout(function(){
				$(".div4-28").css("opacity","0.3");
				$(".div4-213").css("opacity","0.3");
				$(".div4-214").css("opacity","0.3");
				
				
			});
		$("ol li").mouseover(function(){
				$(this).css("opacity","1");
			})
			
	})
	
$(function(){
		$(".div5-14 dl img").mouseover(function(){
				$(this).css("margin-top","20px");
				var str=$(this).parent().parent().index();
				
				$(".div5-13 img")[0].src="../images/fudiv5-"+(str+1)+".jpg";
				
			});
		$(".div5-14 dl img").mouseout(function(){
				$(this).css("margin-top","0px")
			});
			
	})
$(function(){
		
			
		$(".div5-12 li").click(function(){
				var indexs=$(this).index();
				$(".div5-zong .div5-14").hide();
				$(".div5-zong .div5-14").eq(indexs).show();
		});
	})
	
	
//----------------------------7板块的轮播图-----------------------
	var index=0;
		/*1. 匀速改变图片盒子位置的函数*/
		function startImg(){
			$(".imgDiv").stop().animate({
					left:-(index*1200)+"px"
			},1500);
		}
		/*2. 做图片前进操作的函数*/
   	   function goForward(){
			index++;
			var imgs = $(".imgLi");
			if(index>imgs.length-1){
				index=0;
			}
			startImg();
		}
		/*3. 做图片后退操作的函数*/
		function goBack(){
			index--;
			var imgs = $(".imgLi");
			if(index<0){
				index=imgs.length-1;
			}
			startImg();
		}
		
		/**让图片自动轮播的函数*/
		var myInterval;
		function runImg(){
			myInterval = setInterval(goForward,2000);
		}
		
		/**停止图片运动的函数*/	
		function stopImg(){
			clearInterval(myInterval);
		}
		
		/**页面加载完成要准备的*/
		$(function(){
			var imgs = $(".imgLi");
			runImg();
			$(".leftBut").on("click",goBack);
			$(".rightBut").on("click",goForward);
			$(".imgDiv").hover(stopImg,runImg);
			$(".clearTime").hover(stopImg,runImg);
		});