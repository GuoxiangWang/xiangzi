$(function(){



<!--���ֿ�������ɾ�������-->
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

<!--���ֿ���������˸����-->







<!--������ͼ�������������-->
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
