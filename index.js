var random_no = Math.floor(Math.random()*6)+1;
var randonDiceImage = "images/" + "dice" + random_no + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randonDiceImage);

var random_no_2 = Math.floor(Math.random()*6)+1;
var randonDiceImage_2 = "images/" + "dice" + random_no_2+ ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randonDiceImage_2);

if(random_no > random_no_2){
  document.querySelector(".container h1").innerHTML="Player 1 won";
}
else if(random_no < random_no_2){
    document.querySelector(".container h1").innerHTML="Player 2 won";
}
else{
  document.querySelector(".container h1").innerHTML="Draw";
}
