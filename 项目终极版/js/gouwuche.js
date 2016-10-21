$(function(){
		$(".location").hover(function(){
				$(".location ul").toggle();
			});
	})
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
		$(".div3-12").hover(function(){
				$(".div3-12 ul").toggle();
			})
		$(".div3-12 ul span a").click(function(){
				var str=$(this)[0].innerHTML;
				$(".div3-121")[0].innerHTML=str;
				$(".locationname")[0].innerHTML=str;
			})
	})
//-----------------全选和反选--------------------------------
$(function(){

	$(".div4-2 .selectAll").click(function(){
		var str=$(".div4-1 .select1")
		if($(".div4-2 .selectAll")[0].checked){
		  for(var i=0;i<str.length;i++){
			str[i].checked=true;
		  }
		}else{
			 for(var i=0;i<str.length;i++){
			str[i].checked=false;
		}
		}
	});
})



$(function(){ 
	
	$(".jian").live("click",function(){
			var num=Number($(this).next().val());
			if(num<=1){//点减号商品数量减少
				num=1;
			}else{
				num=num-1;
				
			}
		var price=$(this).parent().next().children()[0].innerHTML;//获得单价
			$(this).parent().next().children()[1].innerHTML=(num*Number(price)).toFixed(2);//每件商品后面价格和
		$(this).next().val(num);
		var str=$(".div4-1 tr");
	var prices=0;
	for(var k=0;k<str.length;k++){
	 prices=prices+Number(str[k].children[4].children[1].innerHTML);//每一行的最后一列
		
	}
		$(".allPrices")[0].innerHTML=prices;
		
	});
	$(".add").live("click",function(){//点加号数量增加
	
			var num=$(this).prev().val();
				
			num=Number(num)+1;
			$(this).prev().val(num);
		var price=$(this).parent().next().children()[0].innerHTML;//获得单价
			$(this).parent().next().children()[1].innerHTML=(num*Number(price)).toFixed(2);//点击加号以后商品后面的价格和
	
	var str=$(".div4-1 tr");
	var prices=0;
	for(var k=0;k<str.length;k++){
	 prices=prices+Number(str[k].children[4].children[1].innerHTML);//每一行的最后一列
		
	}
		$(".allPrices")[0].innerHTML=prices.toFixed(1);
		
	});
	//求所有购物车的商品和
	
		
	$(".removetr").live("click",function(){//点击删除商品就会被删除
		 if(confirm("确定要删除吗？")){
		       $(this).parent().parent().remove();
			   		var str=$(".div4-1 tr");
	var prices=0;
	for(var k=0;k<str.length;k++){
	 prices=prices+Number(str[k].children[4].children[1].innerHTML);//每一行的最后一列
		
	}
		$(".allPrices")[0].innerHTML=prices.toFixed(1);
		
				}
		
		});
		
	$(".removeall").live("click",function(){
		if(confirm("确定要删除全部商品吗？")){
	        $(".div4-1 tr").remove();
			$(".div4-21").show();
			$(".allPrices").text(0);
				}
		
		
		
	})
})
var userName=checkcookie("userId");
var goodsnum=checkcookie("goodsnum");
var index=checkcookie("xiabiao");
$(function(){
		if($(".denglu a").text()!=userName){
			$(".denglu a").text(userName);
			};
	})
	
	
//-----------------------------从后台获取商品并添加------------------------------------
$(function(){
	$.get("http://10.35.164.48:8080/myWeb/getShoppingCart.jsp",
		{stuId:"2381623015",userName:userName},
		function(responseStr){
				var str=eval("("+responseStr+")");
				$(".div4-1 .t").append("<tr><td style='width:40px;height:110px;text-align:center;'><input type='checkbox' class='select1'></td><td style='width:110px;height:110px;'><img src=../"+str[index].goodsImg+" style='width:70px;hieght'></td><td style='width:500px;height:110px;text-align:center;line-height:110px;'>"+str[index].goodsContent+"</td> <td style='width:140px;height:110px;text-align:center;line-height:110px;'><input type='button' value='-' style='width:30px;height:30px;' class='jian'><input type='text' value='1' style='width:50px;height:30px;' class='num'><input type='button' value='+' style='width:30px;height:30px;' class='add'></td><td style='width:220px;height:110px;text-align:center;line-height:110px;'>单价：￥<span class='trprises' style='margin-right:30px;'>"+str[index].goodsPrice+"</span>总价：￥<span>"+str[index].goodsPrice+"</span></td><td><span class='removetr'>[删除]</span></td></tr>")
					$(".num").val(goodsnum);
				})
})
