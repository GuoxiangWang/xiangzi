$(function(){



<!--���ֿ�������ɾ��������-->
$(".icon-music").click(function()
{
if(document.getElementById("musicControl").childNodes.length==4)
{$(this).next().remove();}
else{$(this).after("<audio src='https://raw.githubusercontent.com/GuoxiangWang/xiangzi/gh-pages/media/bg.mp3' controls='controls' autoplay='autoplay'></audio>")};
})


$("#learning .thumbnail").mouseover(function(){
$(this).children("img").css({"height":"10em"});
}).mouseout(function(){
$(this).css({"height":"5em"});
})




}
)