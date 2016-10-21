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

//--------------------------------第三版页签的切换-----------------------------
$(function(){
	$(".dogtitle").on("mouseover",function(){
		$(".petStyle").css("display","block");
	
	});
	$(".dogtitle").on("mouseout",function(){
			$(".petStyle").css("display","none");
		})
	$(".goodstitle").on("mouseover",function(){
		$(".goodslist").show();
		
	});
	
	$(".goodstitle").on("mouseout",function(){
		$(".goodslist").css("display","none");
		
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
	$(".div5-zong img").on("mouseover",function(){
		$(this).addClass("abc");
	});
	$(".div5-zong img").on("mouseout",function(){
		$(this).removeClass("abc");
		});
 })
		
	$(function(){
	$(".div6-zong dl").on("mouseover",function(){
		$(this).addClass("abc");
	});
	$(".div5-zong dl").on("mouseout",function(){
		$(this).removeClass("abc");
		}
		);
	})
 
 $(function(){
	 	$(".div7-zong dt").on("mouseover",function(){
				$(this).css("margin-top","-20px")
			});
		$(".div7-zong dt").on("mouseout",function(){
				$(this).css("margin-top","0px")
			});
	 })