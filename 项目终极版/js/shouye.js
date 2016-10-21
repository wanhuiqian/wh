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


//-----------------------------------------轮播图----------------------------------------------
var ord=0;
function imgchange(){
	ord++;
	if(ord>5){
		ord=1;
	}
	$("#imgId")[0].src="images/"+ord+".jpg";
	$(".div3-2 span").css("backgroundColor","gray");
	$(".div3-2 span:eq("+(ord-1)+")").css("backgroundColor","white");
}
var mysetInterval;
function startChange(){
	 mysetInterval=setInterval("imgchange()",1500);
}
function stopImg(){
	clearInterval(mysetInterval);
}

$(function(){
	$(".div3-2 span").click(
		function(){
			var indexs=$(".div3-2 span").index(this);
		$("#imgId")[0].src="images/"+(indexs+1)+".jpg";
		 $(".div3-2 span").css("backgroundColor","gray");
		 $(".div3-2 span:eq("+indexs+")").css("backgroundColor","white");
		 stopImg();
});
})
//--------------------------------第三版页签的切换-----------------------------
$(function(){
	$(".dogtitle").on("mouseover",function(){
		$(".petStyle").css("display","block");
		$(".goodslist").css("display","none");
	});
	$(".goodstitle").on("mouseover",function(){
		$(".petStyle").css("display","none");
		$(".goodslist").css("display","block");
		
	});
	
})
//---------------第三版竖排页签的切换-------------------------------------
//------------(1)------------------------------
$(function(){
	$(".goodslist-1").on("mouseover",function(){
		$(".goodslist-11").show();
		$(".goodslist-11").css("border","solid 1px green")
		});
	$(".goodslist-1").on("mouseout",function(){
		$(".goodslist-11").hide();
	});

})
//--------------(2)---------------------------
$(function(){
	$(".goodslist-2").on("mouseover",function(){
		$(".goodslist-21").show();
		$(".goodslist-21").css("border","solid 1px green")
		});
	$(".goodslist-2").on("mouseout",function(){
		$(".goodslist-21").hide();
	});

})
//----------------------(3)---------------------

$(function(){
	$(".goodslist-3").on("mouseover",function(){
		$(".goodslist-31").show();
		$(".goodslist-31").css("border","solid 1px green")
		});
	$(".goodslist-3").on("mouseout",function(){
		$(".goodslist-31").hide();
	});

})

//-----------------(4)-------------------
$(function(){
	$(".goodslist-4").on("mouseover",function(){
		$(".goodslist-41").show();
		$(".goodslist-41").css("border","solid 1px green")
		});
	$(".goodslist-4").on("mouseout",function(){
		$(".goodslist-41").hide();
	});

})
//------------------------(5)-----------------------
$(function(){
	$(".goodslist-5").on("mouseover",function(){
		$(".goodslist-51").show();
		$(".goodslist-51").css("border","solid 1px green")
		});
	$(".goodslist-5").on("mouseout",function(){
		$(".goodslist-51").hide();
	});

})

//------------------------------------(6)-----------------------------
$(function(){
	$(".goodslist-6").on("mouseover",function(){
		$(".goodslist-61").show();
		$(".goodslist-61").css("border","solid 1px green")
		});
	$(".goodslist-6").on("mouseout",function(){
		$(".goodslist-61").hide();
	});

})
//---------------------------(7)-------------------------------------
$(function(){
	$(".goodslist-7").on("mouseover",function(){
		$(".goodslist-71").show();
		$(".goodslist-71").css("border","solid 1px green")
		});
	$(".goodslist-7").on("mouseout",function(){
		$(".goodslist-71").hide();
	});

})




//---------------------------------第四板块的动画------------------------------
$(function(){
		setInterval(function(){
				$(".div4-1").slideToggle();
				$(".div4-2").slideToggle();
				$(".div4-3").slideToggle();
				$(".div4-4").slideToggle();
			},3000);
	})




$(function(){
		$(".div3-3 li").on("mouseover",function(){
				$(this).css("margin-left","20px")
			});
		$(".div3-3 li").on("mouseout",function(){
				$(this).css("margin-left","50px")
			});
	})

	
$(function(){
	
		var telephone1=checkcookie("userId");
		
		if($(".denglu a")[0].innerHTML=="[登录]"){
			$(".denglu a").text(telephone1);
		}
			
	$(".div5-1 dl").mouseover(function(){
		$(this).css("box-shadow","3px 3px 3px 3px pink")
	});
	$(".div5-1 dl").mouseout(function(){
		$(this).css("box-shadow","0px 0px 0px 0px pink")
	});
	
})




