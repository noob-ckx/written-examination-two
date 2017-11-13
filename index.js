/*---------------------
| 作者：ckx
| 思路：
|		1.创建div显示底层数据 Model
|		2.创建svg加载显示图形 View
| 		3.创建js控制点击事件  Controller	
| 说明：
|		1.由于使用pointer-events: none;属性，所以对IE较低版本浏览器不兼容
-----------------------*/

function insert(x,y){  
	var svgObject = document.getElementById('main');
	var rect = document.getElementById('back');
	var rectObj = document.createElementNS("http://www.w3.org/2000/svg","rect");  
	if(rectObj){
		rectObj.setAttribute("x",x);
		rectObj.setAttribute("y",y);
		rectObj.setAttribute("width",40);  
		rectObj.setAttribute("height",40);  
		rectObj.setAttribute("style","fill:white;");  
		svgObject.appendChild(rectObj);  
	}
}
function click(evt){
	let x = evt.clientX;
	let y = evt.clientY;
	insert(x-20,y-20);
}

