$(function(){
			var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
			var str="";
			for(var i=0;i<4;i++){
				for(var k=0;k<arr.length;k++){
					var index=parseInt(Math.random()*arr.length);
				}
				str=str+arr[index];
			}
			
			$(".input3")[0].value=str;
		});
//----------------------验证用户名是否存在-------------------------------------

function checkuserName(){
	if(!input71()){
		return false;
	}
	
	//2、服务器端验证
	if(!yinput7()){
		return istrue;
	}
	return true;
}
//-------------------------------邮箱验证-----------------------------------------
function input11(){
		
			var  rebutes1=/^\w+@\w+(\.(net|com|cn))$/;
			var str1=$(".input1")[0].value;
			if(rebutes1.test(str1)==true){
				$(".span1")[0].innerHTML="<font color='green'>√</font>";
				return true;
		}else{
				$(".span1")[0].innerHTML="<font color='#ff6f4a'>请输入正确的邮箱</font>";
				
				return false;
		}
	
}
	
//--------------------------------------验证码验证-----------------------------------
function input21(){
	
			
			
			var str2=$(".input2")[0].value;
			if(str2.length>4){
					$(".span2")[0].innerHTML="<font color='#ff6f4a'>请输入四位验证码</font>";
					
				}
			else if(str2==$(".input3")[0].value){
						$(".span2")[0].innerHTML="<font color='green'>√</font>";
							return true;
					}
					else if(str2!=$(".input3")[0].value){
							$(".span2")[0].innerHTML="<font color='#ff6f4a'>验证码输入错误</font>";
							$(".input2").css("borderColor","#ff6f4a");
							return false;
						}
						
						
						
			
}	
		
	function yanzinput4(){
					var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
			var str="";
			for(var i=0;i<4;i++){
				for(var k=0;k<arr.length;k++){
					var index=parseInt(Math.random()*arr.length);
				}
				str=str+arr[index];
			}
			
			$(".input3")[0].value=str;
			}		
//-----------------------------------------用户名验证------------------------------------
function input71(){
			var str3=$(".input7").val();
			if(str3.length==0){
					$(".span4")[0].innerHTML="<font color='#ff6f4a'>用户名不能为空</font>";
				
						return false;
				}else{
						$(".span4")[0].innerHTML="<font color='green'>√</font>";
						return true;
						
				}
			
			
}
//-------------------------------密码验证-------------------------------------
function input81(){
		
			var resbutes2=/^[\da-zA-Z]{8,20}$/;
			var str4=$(".input8")[0].value;
			if(resbutes2.test(str4)==true){
					$(".span5")[0].innerHTML="<font color='green'>√</font>";
					
					$(".span5").show();
					return true;
				}else{
					$(".span5")[0].innerHTML="<font color='#ff6f4a'>请输入8-20位密码</font>";
					
					return false;
		
	}	
	}
//------------------------密码的再次验证----------------------------
function input91(){
			var str6=$(".input8")[0].value;
			var str5=$(".input9")[0].value;
			if(str5==str6){
			$(".span6")[0].innerHTML="<font color='green'>√</font>";
				return true;
					$(".span6").show();
				}else{
					$(".span6")[0].innerHTML="<font color='#ff6f4a'>两次输入的密码不同，请重新输入</font>";
					
					return false;
					}
		

}
		
		

var istrue= false;
function yinput7(){
		$.get(
				"http://10.35.164.48:8080/myWeb/checkUser.jsp",
				{stuId:"2381623015",userName:$(".input7").val()},
				function(responseStr,status){
					if(status=="success"){
						if(responseStr.indexOf("0")>-1){
							$(".span4").html("用户名可以注册");
							$(".span4").show();
						istrue=true;
						}else{
							$(".span4").html("该用户名已经被使用，请更换用户名");
						istrue=false;
						}
					}else{
						$(".span4").html("系统繁忙");
					}
				}
			);
			
}



	
	 //注册
window.onload=function(){

$(".input9").blur(input91);

$(".input9").focus(function(){
			$(".span6").show();
			$(".input9").val("");
			});
			
$(".input8").blur(input81);
$(".input8").focus(function(){
			$(".span5").show();
			$(".input8").val("");
			});
	
$(".input7").focus(function(){
				$(".span4").show();
			});
$(".input7").blur(input71); 
$(".input4").click(yanzinput4);
$(".input2").blur(input21);
$(".input2").focus(function(){
				$(".span2").show();
				$(".input2").val("");
			});
$(".input1").blur(input11);			
$(".input1").focus(function(){
				$(".span1").show();
				$(".input1").val("");
			});

$(".input7").blur(yinput7);
$(".input11").click(function(){
	if(checkuserName() && input11() && input21()&&  input71() && input81() && input91()){
			$.post(
				"http://10.35.164.48:8080/myWeb/reg.jsp",
				{stuId:"2381623015",userName:$(".input7").val(),userPass:$(".input8").val(),userEmail:$(".input1").val()},
				
				function(responseStr,status){
					if(status=="success"){
						if(responseStr.indexOf("true")>-1){
							location.href="登录页面.html";
						}else{
							alert("亲，不好意思，注册失败");
						}
					}else{
						alert.html("系统繁忙");
					}
				}
			);
		
		}
}
		
		
	  );
	  }