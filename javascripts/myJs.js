$(function(){



<!--���ֿ�������ɾ�������-->
$(".icon-music").click(function()
{
if(document.getElementById("musicControl").childNodes.length==4)
{$(this).next().remove();}
else{$(this).after("<audio src='media/bg.mp3' controls='controls' autoplay='autoplay'></audio>")};
})







}
)