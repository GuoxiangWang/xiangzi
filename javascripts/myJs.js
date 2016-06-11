$(function(){



<!--ÒôÀÖ¿ØÖÆÆ÷µÄÉ¾³ýÓëÌí¼Ó-->
$(".icon-music").click(function()
{
if(document.getElementById("musicControl").childNodes.length==5)
{$(this).next().remove();}
else{$(this).after("<audio src='media/bg.mp3' controls='controls' autoplay='autoplay'></audio>")};
})







}
)