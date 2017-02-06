$(function(){



<!--ÒôÀÖ¿ØÖÆÆ÷µÄÉ¾³ýÓëÌí¼Ó-->
$(".icon-music").click(function()
{
if(document.getElementById("musicControl").childNodes.length==4)
{
	$(this).next().remove();
	clearInterval(int);
	}
else{
	$(this).after("<audio src='https://raw.githubusercontent.com/GuoxiangWang/xiangzi/gh-pages/media/bg.mp3' controls='controls' autoplay='autoplay'></audio>");
	int=self.setInterval("twinkle()",618);
	};
})

<!--ÒôÀÖ¿ØÖÆÆ÷µÄÉÁË¸¶¯»­-->







<!--Èý½£¿ÍÍ¼ÏñÊó±êÐü¸¡¶¯»­-->
$("table img").mouseover(function(){
$(this).css({"width":"100%"});
}).mouseout(function(){
$(this).css({"width":"60%"});
})

}
)

function twinkle(){
	if($("#musicControl").css("visibility")=="visible")
	{
		$("#musicControl").css("visibility","hidden");
	}
	else
		$("#musicControl").css("visibility","visible");
	
}
