var ord=0;
function imgchange(){
	ord++;
	if(ord>5){
		ord=1;
	}
	$("#imgId").src="images"+ord+".jpg";
	$("span").css("backgroundColor","gray");
	$("span:eq("+(ord-1)+")").css("backgroundColor","white");
}
var mysetInterval;
function startChange(){
	 mysetInterval=setInterval("imgchange()",1000);
}
function stopImg(){
	clearInterval(mysetInterval);
}
function startAgain(){
	startChange();
}
function test(ord){
	 $("#imgId").src="images"+ord+".jpg";
	
		$("span").css("backgroundColor","gray");
		$("span:eq("+(ord-1)+")").css("backgroundColor","white");
		stopImg();
})
</script>