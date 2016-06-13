$(function(){



<!--ÒôÀÖ¿ØÖÆÆ÷µÄÉ¾³ýÓëÌí¼Ó-->
$(".icon-music").click(function()
{
if(document.getElementById("musicControl").childNodes.length==4)
{$(this).next().remove();}
else{$(this).after("<audio src='https://raw.githubusercontent.com/GuoxiangWang/xiangzi/gh-pages/media/bg.mp3' controls='controls' autoplay='autoplay'></audio>")};
})


$("#learning img").mouseover(function(){
console.log("It worked");
$(this).css({"height":"10em"});
}).mouseout(function(){
console.log("It left");
$(this).css({"height":"5em"});
})




}
)