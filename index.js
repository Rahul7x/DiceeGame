var randomNum1 = Math.floor (Math.random() * 6) + 1;
var randomNum2 = Math.floor (Math.random() * 6) + 1;

var image1 = "./images/dice" + randomNum1 + ".png"
var image2 = "./images/dice" + randomNum2 + ".png"

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = " 🏁 Player 1 Wins!" ;
} 
else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🏁 " ;
} 
else {
    document.querySelector("h1").textContent = "It's a Draw, Refresh Again for a Winner" ;
}
