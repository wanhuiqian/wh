$(function(){
	$(".dogtitle").hover(function(){
		$(".petStyle").toggle();
		
	});
	
	$(".goodstitle").hover(function(){
		
		$(".goodslist").toggle();
		
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


$(function(){
		$(".div6-210 span").click(function(){
			$(this).click(function(){
				var str=$(this).index();
				$(".div6-2 .div6-211").hide();
				$(".div6-2 .div6-211").eq(str).show();
		
			});
			
		});
		
	$(".div6-2 img").mouseover(function(){
				$(this).css("margin-top","20px")
			});
	$(".div6-2 img").mouseout(function(){
				$(this).css("margin-top","0px")
			});			
	})




$(function(){
		$(".div7-210 span").click(function(){
			$(this).click(function(){
				var str=$(this).index();
				$(".div7-2 .div7-211").hide();
				$(".div7-2 .div7-211").eq(str).show();
				
			});
			
		});
			
	$(".div7-2 img").mouseover(function(){
				$(this).css("margin-top","20px")
			});
	$(".div7-2 img").mouseout(function(){
				$(this).css("margin-top","0px")
			});			
	})
	
$(function(){
		$(".div8-210 span").click(function(){
			$(this).click(function(){
				var str=$(this).index();
				$(".div8-2 .div8-211").hide();
				$(".div8-2 .div8-211").eq(str).show();
				
			});
			
		});
			
	$(".div8-2 img").mouseover(function(){
				$(this).css("margin-top","20px")
			});
	$(".div8-2 img").mouseout(function(){
				$(this).css("margin-top","0px")
			});			
	})
	

$(function(){
		$(".div9-210 span").click(function(){
			$(this).click(function(){
				var str=$(this).index();
				$(".div9-2 .div9-211").hide();
				$(".div9-2 .div9-211").eq(str).show();
				
			});
			
		});
			
	$(".div9-2 img").mouseover(function(){
				$(this).css("margin-top","20px")
			});
	$(".div9-2 img").mouseout(function(){
				$(this).css("margin-top","0px")
			});			
	})