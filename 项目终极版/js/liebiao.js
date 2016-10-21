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


$(function(){
		$(".div4-2").hover(function(){
				$(".div4-2 ol").toggle();
			});
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

$(function(){
		$(".div5-21 li").mouseover(function(){
				$(this).css("backgroundColor","#53aa5b")
			});
		$(".div5-21 li").mouseout(function(){
				$(this).css("backgroundColor","white")
			});
		$(".div5-21 li").click(function(){
				$(this).css("backgroundColor","#53aa5b")
			});
	})




$(function(){
		$(".div5-22").hover(function(){
				$(".div5-22 .div5-222").toggle();
			});
		$(".div5-222 span a").click(function(){
				$(".div5-221")[0].innerHTML=$(this)[0].innerHTML
			})
	})
//---------------------------------第四板块的动画------------------------------

$(function(){
	$(".div5-23 dd p:even").mouseover(function(){
			$(this).css("backgroundColor","#459d36")
			$(this)[0].innerHTML="收藏";
		});
	
	$(".div5-23 dd p:even").mouseout(function(){
			$(this).css("backgroundColor","white")
			$(this)[0].innerHTML="<img src='../images/shangdiv5-13.gif'>";
		})
		
	$(".div5-23 dd p:odd").mouseover(function(){
			$(this).css("backgroundColor","#459d36")
			$(this)[0].innerHTML="加入购物车";
		});
	
	$(".div5-23 dd p:odd").mouseout(function(){
			$(this).css("backgroundColor","white")
			$(this)[0].innerHTML="<img src='../images/shangdiv5-14.gif'>";
		})
})

//----------------------创建活的商品列表------------------------------

var str;

$(function(){
	$.get("http://10.35.164.48:8080/myWeb/getGoodsList.jsp",
			{stuId:"2381623015"},
			function(responseStr){
					str=eval("("+responseStr+")");
						for(var i=0;i<str.length;i++){
							$(".div5-23").append("<dl style='border:1px solid silver;width:240px;height:420px;'><dt><img src=../"+str[i].goodsImg+" style='height:220px;'/><div style='width:30px;height:30px;border:1px solid gray;margin-left:30px;'></div><ul><li style='line-height:19px;color:#444;margin-top:10px;font-size:13px;width:240px;'>"+str[i].goodsName+str[i].goodsContent+"</li><li style='line-height:19px;font-size:13px;margin-left:30px;font-family:'微软雅黑''>"+str[i].goodsWeight+"</li><li><span style='text-decoration:line-through;margin-left:60px;display:block;float:left;color:gray;line-height:40px;font-weight:bold;font-size:10px;'>￥25.00</span><span style='display:block;float:left;color:red;line-height:40px;font-weight:bold;font-size:18px;'>"+str[i].goodsPrice+"</span></li><li style='line-height:20px;clear:both;'><span style='font-size:11px;font-family:微软雅黑;display:block;margin-left:30px;float:left;color:gray;'>已售"+str[i].goodsByBuyCount+"</span><span style='font-size:11px;font-family:微软雅黑;display:block;margin-left:30px;float:left;color:gray;'>4691人互动</span></li><li style='clear:both;line-height:22px;'><span style='font-size:11px;font-family:微软雅黑;display:block;margin-left:30px;float:left;color:gray;'>东部大仓发货</span></li></ul></dt><dd style='clear:both;'><p><img src='../images/shangdiv5-13.gif'></p><p><a href='购物车(6).html'><img src='../images/shangdiv5-14.gif'></p></a></dd></dl>")
						
					}
});
})
/*$(function(){
	str={
stuId:'186092',
 goodsId:'01001',
goodsName:'李',  
goodsImg:'../images/shangdiv5-12.gif',
goodsPrice:'350.0', 
goodsContent:'这双鞋是专门针对篮球运动的款式',
 goodsColor:'白', 
goodsType:'ln-01', 
goodsWeight:'300.0',
goodsCount:'20', 
goodsByBuyCount:'151',
goodsNote:'这双鞋受到了一致好评，国庆节，为答谢用户，5折优惠'
	}
	$(".div5-23").append("<dl style='border:1px solid silver;width:240px;height:420px;'><dt><img src="+str.goodsImg+"/><div style='width:30px;height:30px;border:1px solid gray;margin-left:30px;'></div><ul><li style='line-height:19px;color:#444;margin-top:10px;font-size:13px;width:240px;'>"+str.goodsName+str.goodsContent+"</li><li style='line-height:19px;font-size:13px;margin-left:30px;font-family:'微软雅黑''>"+str.goodsWeight+"</li><li><span style='text-decoration:line-through;margin-left:60px;display:block;float:left;color:gray;line-height:40px;font-weight:bold;font-size:10px;'>￥25.00</span><span style='display:block;float:left;color:red;line-height:40px;font-weight:bold;font-size:18px;'>"+str.goodsPrice+"</span></li><li style='line-height:20px;clear:both;'><span style='font-size:11px;font-family:微软雅黑;display:block;margin-left:30px;float:left;color:gray;'>已售"+str.goodsByBuyCount+"</span><span style='font-size:11px;font-family:微软雅黑;display:block;margin-left:30px;float:left;color:gray;'>4691人互动</span></li><li style='clear:both;line-height:22px;'><span style='font-size:11px;font-family:微软雅黑;display:block;margin-left:30px;float:left;color:gray;'>东部大仓发货</span></li></ul></dt><dd style='clear:both;'><p><img src='../images/shangdiv5-13.gif'></p><p><a href='购物车(6).html'><img src='../images/shangdiv5-14.gif'></p></a></dd></dl>")
	
	                       
	
	})*/
$(function(){
		
		$(".div5-23 dl").live("click",function(){
				var index=$(".div5-23 dl").index($(this))-7;
				savecookie("xiabiao",index,90)
				savecookie("shangId",str[index].goodsId,30);
				location.href="商品详情10.html";
			});
	})