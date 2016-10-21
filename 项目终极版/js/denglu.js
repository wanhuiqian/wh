$(function(){
			var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
			var str="";
			for(var i=0;i<4;i++){
				for(var k=0;k<arr.length;k++){
					var index=parseInt(Math.random()*arr.length);
				}
				str=str+arr[index];
			}
			
			$(".getfournumber")[0].value=str;
		})
		
		
		
		//------------------------登录方法的转换------
$(function(){
	
					
				
		$(".span1").click(function(){
				$(".div2-21").show();
				$(".div2-22").hide();
				});
		$(".span2").click(function(){
				$(".div2-22").show();
				$(".div2-21").hide()
			});
	})
function test(){
		var userName=$(".input1").val();
		savecookie("userId",userName,90);
	}
$(
	function(){
	  $(".input3").click(
		function(){
			$.post(
				"http://10.35.164.48:8080/myWeb/login.jsp",
				{stuId:"2381623015",userName:$(".input1").val(),userPass:$(".input2").val()},
				function(responseStr,status){
					if(status=="success"){
						if(responseStr.indexOf("true")>-1){
							test();
							location.href="../首页.html";
						}else{
							alert("亲，不好意思，登录失败");
						}
					}else{
						alert.html("系统繁忙");
					}
				}
			);
		}
	  );
	  
	  $(".input1").focus(function(){
		  	$(".input1").val("");
		  });
		 $(".input2").focus(function(){
		  	$(".input2").val("");
		  });
		    
	})

		