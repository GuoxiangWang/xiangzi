$(function(){



<!--ÒôÀÖ¿ØÖÆÆ÷µÄÉ¾³ýÓëÌí¼Ó-->
$(".icon-music").click(function()
{
if(document.getElementById("musicControl").childNodes.length==4)
{$(this).next().remove();}
else{$(this).after("<audio src='https://raw.githubusercontent.com/GuoxiangWang/xiangzi/gh-pages/media/bg.mp3' controls='controls' autoplay='autoplay'></audio>")};
})

<!--ÒôÀÖ¿ØÖÆÆ÷µÄÉÁË¸¶¯»­-->



var int=self.setInterval("twinkle()",618)



<!--Èý½£¿ÍÍ¼ÏñÊó±êÐü¸¡¶¯»­-->
$("#learning .thumbnail").mouseover(function(){
$(this).find("img").css({"height":"10em"});
}).mouseout(function(){
$(this).find("img").css({"height":"5em"});
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
