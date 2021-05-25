console.log("Connected");

var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var player3 = document.querySelector("#player3");
var numInput = document.querySelector("input");
var h2 = document.querySelector("h2");
var upTo = document.querySelector("#upTo");
var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var span3 = document.querySelector("#span3");
var reset = document.querySelector("#reset");
var gameOver = false;
var winningScore = 5;

player1.addEventListener("click", function(){
	if(!gameOver){
		console.log("Player 1 Clicked");
		player1Score++;
		span1.textContent = player1Score;
		console.log(player1Score);
	}
	if(player1Score === winningScore){
		span1.classList.add("winner");
		console.log(player1Score);
		span1.textContent = player1Score;
		console.log("The game is over");
		gameOver = true;
		alert("Player 1 Wins");
	} 
});

player2.addEventListener("click", function(){
	if(!gameOver){
		console.log("Player 2 Clicked");
		player2Score++;
		span2.textContent = player2Score;
		console.log(player2Score);
	}
	if(player2Score === winningScore){
		span2.classList.add("winner");
		console.log(player2Score);
		span2.textContent = player2Score;
		console.log("The game is over");
		gameOver = true;
		alert("Player 2 Wins");
	} 
});
player3.addEventListener("click", function(){
	if(!gameOver){
		console.log("Player 3 Clicked");
		player3Score++;
		span3.textContent = player3Score;
		console.log(player3Score);
	}
	if(player3Score === winningScore){
		span3.classList.add("winner");
		console.log(player3Score);
		span3.textContent = player3Score;
		console.log("The game is over");
		gameOver = true;
		alert("Player 3 Wins");
	} 
});

reset.addEventListener("click", function(){
		console.log("Reset Clicked");
		player1Score = 0;
		span1.textContent = player1Score;
		player2Score = 0;
		span2.textContent = player2Score;
		player3Score = 0;
		span3.textContent = player3Score;
		span1.classList.remove("winner");
		span2.classList.remove("winner");
		span3.classList.remove("winner");
		gameOver = false;
});

numInput.addEventListener("change", function(){
	console.log("The input has changed");
	console.log(numInput.value);
	upTo.textContent = numInput.value;
		player1Score = 0;
		span1.textContent = player1Score;
		player2Score = 0;
		span2.textContent = player2Score;
		player3Score = 0;
		span3.textContent = player3Score;
	winningScore = Number(numInput.value);
	
});










