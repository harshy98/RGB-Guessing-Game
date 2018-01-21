var colors=generateRandomColor(6);

var squares=document.querySelectorAll(".square");
var picked=pickColor();
var colordisplay=document.getElementById("colordisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("select");
	hardbtn.classList.remove("select");
	colors=generateRandomColor(3);
	picked=pickColor();
	colordisplay.textContent=picked;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("select");
	easybtn.classList.remove("select");
	colors=generateRandomColor(6);
	picked=pickColor();
	colordisplay.textContent=picked;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

resetButton.addEventListener("click",function(){
	colors=generateRandomColor(6);
	picked=pickColor();
	colordisplay.textContent=picked;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
});
colordisplay.textContent=picked;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		
		var clicked=this.style.backgroundColor;
		if(clicked==picked)
		{
			message.textContent="Correct";
			resetButton.textContent="Play Again?";
			changeColor(clicked);
			h1.style.backgroundColor=clicked;
		}
		else
		{
			this.style.backgroundColor= "#232323";
			message.textContent="Try Again!"
		}
	});
}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}