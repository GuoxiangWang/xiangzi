$(function(){
	var item="outline***box-shadow***border-radius***overflow-x***overflow-y ***font-variant ***content ***counter-increment***counter-reset***list-style-type***list-style-image ***list-style-position***clip ***cursor***letter-spacing***direction***line-height***text-transform***text-shadow***word-wrap***word-break***white-space***";
	var mean="轮廓线不会占据空间，也不一定是矩形。***向框添加一个或多个阴影。***允许您为元素添加圆角边框***规定是否对内容的左/右边缘进行裁剪***规定是否对内容的上/下边缘进行裁剪 ***小型大写字体的字母字体尺寸更小***与:before 及 :after 伪元素配合，来插入生成内容。***设置某个选取器每次出现的计数器增量。***设置某个选择器出现次数的计数器的值。***设置列表项标记的类型。***使用图像来替换列表项的标记。***设置在何处放置列表项标记。***剪裁绝对定位元素。***规定要显示的光标的类型（形状）***设置字符间距***属性规定文本的方向 / 书写方向。***设置行间的距离（行高）。***控制文本的大小写。***向文本设置阴影。***允许长单词或 URL 地址换行到下一行。***规定自动换行的处理方法。***设置如何处理元素内的空白。***";
	var example='outline:#00FF00 dotted thick;***box-shadow: 10px 10px 5px #888888;***border-radius:25px;***overflow-x:hidden;***overflow-y:scroll;***font-variant:small-caps;***content: " (" attr(href) ")";***counter-increment:section;***counter-reset:section;***list-style-type:circle;***list-style-image:url("/i/arrow.gif");***list-style-position:inside;***clip:rect(0px,60px,200px,0px);***span.help {cursor:help;}***h1 {letter-spacing:2px}***direction: rtl***p.small {line-height:90%}***h2 {text-transform:capitalize}***text-shadow: 5px 5px 5px #FF0000;***p.test {word-wrap:break-word;}***p.test {word-break:break-all;}***white-space: nowrap***'
	var itemArr=item.split("***");
	var exampleArr=example.split("***");
	var meanArr=mean.split("***");
	
	$("#mainContent button:eq(0)").click(function(){
		var randomNum=Math.floor(Math.random()*itemArr.length);
		randomIndex=(randomNum==itemArr.length?itemArr.length-1:randomNum);
		$("#mainContent p:eq(0)").text(itemArr[randomIndex]);
		$("#mainContent p:eq(1)").text("");
		$("#mainContent p:eq(2)").text("");
		
	});
	
	$("#mainContent button:eq(1)").click(function(){
		$("#mainContent p:eq(1)").text(meanArr[randomIndex]);
	});
	
	$("#mainContent button:eq(2)").click(function(){
		$("#mainContent p:eq(2)").text(exampleArr[randomIndex]);
	});
})