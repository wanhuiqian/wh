function savecookie(key,value,daycount){
          var d=new Date();
		  d.setDate(d.getDate()+daycount);
          document.cookie=key+"="+value+";expires="+d.toGMTString();
 }
 function checkcookie(key){
	 var str=document.cookie;
	 var arr=str.split("; ");
	 for(var i=0;i<arr.length;i++){
		 if(arr[i].indexOf(key+"=")==0){
			 return decodeURIComponent(arr[i].substring((key+"=").length));
		}
	}	
	return "";
}
function movecookie(key){
	 savecookie("abc",key,-2);
	
}	