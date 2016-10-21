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
$(function(){
		$(".div4-3").hover(function(){
				$(".div4-3 ol").toggle();
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
		$(".div5-1 li").click(function(){
			$(this).click(function(){
					var str=$(this).index();
				$(".div5-1 p img")[0].src="../images/xiangdiv5-"+(str+1)+".jpg";
				});
				
			});
	})


//-------------------------------
$(function(){
		$(".div5-21").hover(function(){
				$(".div5-21 ul").toggle();
			});
		$(".div5-21 ul a").click(function(){
				$(".div5-211")[0].innerHTML=$(this)[0].innerHTML
			})
	})

//-------------------------------
$(function(){
		$(".div5-22 span").eq(1).click(function(){
				$(".div5-22 span").eq(1).addClass("addColor");
				$(".div5-22 span").eq(2).removeClass("addColor");
			});
		$(".div5-22 span").eq(2).click(function(){
				$(".div5-22 span").eq(2).addClass("addColor");
				$(".div5-22 span").eq(1).removeClass("addColor");
		})
	})
$(function(){
		var num=$(".input2").val();
		
		$(".input1").click(function(){
				if(num>1){
						num=Number(num)-1;
					}
				else if(num<=1){
						num=1;
					}
		$(".input2").val(num);
			})
		$(".input3").click(function(){
				num=Number(num)+1;
				$(".input2").val(num);
			});
	})
	
$(function(){
		$(".div6-1 li").click(function(){
				$(this).click(function(){
						$(this).css("borderBottom","none");
						$(this).siblings().css("borderBottom","solid 1px gray")
						var str=$(this).index();
						$(".div6-zong .div6-2").hide();
						$(".div6-zong .div6-2").eq(str).show();
					})
				
			})
	})
	
//======给加入购物车按钮加点击按钮=================
$(function(){
	var userName=checkcookie("userId");//获取用户名
	$(function(){
		if($(".denglu a").text()!=userName){
			$(".denglu a").text(userName);
			};
	})
	savecookie("goodsnum",$(".input2").val(),90);//保存商品数量
		$(".addgoodslist").click(function(){
				$.get("http://10.35.164.48:8080/myWeb/addShoppingCart.jsp",{stuId:"2381623015",userName:userName,goodsId:shangping,goodsCount:$(".input2").val()},
				
					function(responseStr){
					if(responseStr.indexOf("true")>-1){
					location.href="购物车(6).html";
						}else{
						alert.html("加入购物车失败");
						}
					
					}
					)
					});
	})
	var shangping=checkcookie("shangId")
	
$(function(){
//=============后台拿去信息================
	$.get("http://10.35.164.48:8080/myWeb/getGoodsInfo.jsp",
			{stuId:"2381623015",goodsId:shangping},
			function(responseStr,status){
					
						str=eval("("+responseStr+")");
						
				//$(".div5-2").append("<ol><li style='line-height:36px;'><span style='font-size:18px;line-height:36px;color:red;font-weight:bold;'>[多件优惠]</span><span style='font-size:18px;color:black;font-weight:bold;line-height:36px;'></span></li><li style='line-height:33px;font-size:11px;color:#e3393c;'>畅销德美11年 宠界优选好零食</li><li style='margin-top:8px;'><span style='font-size:13px;font-weight:bold;color:#99afd1;line-height:30px;'>市场价：</span><span style='font-size:13px;font-weight:bold;color:black;text-decoration:line-through;line-height:30px;'>￥25.00</span></li> <li ><span style='font-size:13px;font-weight:bold;color:#99afd1;line-height:30px;'>E宠价：</span><span style='font-size:26px;font-weight:bold;color:red;line-height:50px;'>￥"+str.goodsPrice+"</span></li><li style='line-height:65px;font-size:16px;border-bottom:dashed 1px gray;'>正在促销：路斯全场满49元减10元 满99元减20元</li><li style='margin-top:13px;'><span style='font-size:12px;line-height:30px;'>编号：132877</span><span style='font-size:12px;line-height:30px; padding-left:60px;'>已售："+str.goodsByBuyCount+"罐</span></li><li><span style='font-size:12px;line-height:30px;'>赠送：最多5E宠币</span><span style='font-size:12px;line-height:30px;padding-left:40px;'>互动：查看评价（4380） 咨询（293）</span></li> <li style='line-height:45px;'><span style='display:block;width:52px;height:23px;background-color:#ffa200;float:left;margin-right:5px;font-size:13px;line-height:23px;color:white;'>正品溯源</span><span style='display:block;width:52px;height:23px;background-color:#ffa200;float:left;margin-right:5px;font-size:13px;line-height:23px;color:white;'>全球精选</span><span style='display:block;width:52px;height:23px;background-color:#ffa200;float:left;margin-right:5px;font-size:13px;line-height:23px;color:white;'>自营快递</span><span style='display:block;width:52px;height:23px;background-color:#ffa200;float:left;margin-right:5px;font-size:13px;line-height:23px;color:white;'>自营大仓</span></li><li class='div5-21' style='line-height:60px;border-bottom:dashed 1px gray;'><span style='display:block;float:left;width:70px;'>送货至 :</span><span class='div5-211' style='border:solid 1px gray;display:block;float:left;width:110px;height:36px;line-height:36px;margin-top:10px;text-align:center;'>北京</span><ul style='display:none;'>                        <li><span>华北：</span><span><a href='#'>北京</a></span><span><a href='#'>天津</a></span><span><a href='#'>河北</a></span> <span><a href='#'>山西</a></span> <span><a href='#'>内蒙古</a></span></li><li><span>华东：</span><span><a href='#'>上海</a></span><span><a href='#'>江苏</a></span><span><a href='#'>浙江</a></span> <span><a href='#'>安徽</a></span><span> <a href='#'>福建</a></span><span><a href='#'> 山东</a></span></li><li><span>华南：</span><span><a href='#'>广东</a></span><span><a href='#'>广西</a></span><span><a href='#'>海南</a></span></li><li><span>华中：</span><span><a href='#'>江西</a></span><span><a href='#'>河南</a></span><span><a href='#'>湖北</a></span><span> <a href='#'>湖南</a></span></li></ul><li style='clear:both;'class='div5-22'><span style='display:block;float:left;width:70px;text-align:center;'>重量：</span><span style='width:52px;height:27px;display:block;line-height:27px;float:left;border:solid 1px gray;text-align:center;'>200g</span><span style='width:52px;height:27px;display:block;line-height:27px;float:left;border:solid 1px gray;text-align:center;margin-left:10px;'>450g</span></li><li style='clear:both;margin-top:40px;'><span>我要买: </span><input type='button' value='-' style='width:21px;height:36px;' class='input1'/><input type='text' value='1' style='width:51px;height:36px;' class='input2' /><input type='button'  value='+' style='width:21px;height:36px;' class='input3'/></li> <li style='margin-top:50px;margin-left:80px;'><input type='button' value='加入购物车' style='width:192px;height:55px;background-color:#78b300;'class='addgoodslist'/></li></ol>"
					//)
				$(".goodsNameContentWeight").html(str.goodsName+str.goodsContent+str.goodsWeight);
				$(".goodsByBuyCount").html(str.goodsByBuyCount);
				$(".goodsprice").html(str.goodsPrice);
				$(".div5-1 p").append("<img src=../"+str.goodsImg+">");	
					})
					
	}
	)