var player1 = "./images/dice" + ((Math.floor(Math.random()*6))+1) + ".png";
var player2 = "./images/dice" + ((Math.floor(Math.random()*6))+1) + ".png";

document.querySelector(".img1").setAttribute("src", player1);
document.querySelector(".img2").setAttribute("src", player2);

if (player1>player2) {
    document.querySelector("h1").textContent = "Player 1 Wins!" ;
} else if (player2>player1) {
    document.querySelector("h1").textContent = "Player 2 Wins!" ;
} else {
    document.querySelector("h1").textContent = "It's a Draw, Refresh me Again for a Winner" ;
}