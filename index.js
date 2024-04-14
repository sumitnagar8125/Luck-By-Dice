//var player1=prompt("Player 1: Name -> ");
//var player2=prompt("Player 2: Name ->");
document.querySelectorAll("p")[0].innerHTML="player1";//change 
document.querySelectorAll("p")[1].innerHTML="player2";//change

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomdiceimg1 ="dice"+randomNumber1+".png";
var randomimgsource1="images/"+ randomdiceimg1;  
var image1=document.querySelectorAll( "img" )[0];  //select
image1.setAttribute("src",randomimgsource1);    //assign

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimg2= "dice"+randomNumber2+".png";
var randomimgsource2="images/"+randomdiceimg2;
var image2=document.querySelectorAll( "img" )[1] ;
image2.setAttribute("src",randomimgsource2) ;

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1"+" Wins!🚩";//change 
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player2"+" Wins!🚩";//change
}
else{
    document.querySelector("h1").innerHTML="match draw 😓";
}