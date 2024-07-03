var randomnumber1 = Math.floor(Math.random()*6+1);

var dice1 = "dice"+randomnumber1+".png";
var random = "./images/"+dice1;

var toggle1 = document.querySelectorAll("img")[0];

toggle1.setAttribute("src",random);



var randomnumber2 = Math.floor(Math.random()*6+1);

var dice2 = "dice"+randomnumber2+".png";
var random2 = "./images/"+dice2;

var toggle2 = document.querySelectorAll("img")[1];

toggle2.setAttribute("src",random2);



if(dice1 > dice2)
    {
        document.querySelector("h1").textContent="Player 1 won💞";
    }

else if(dice2 > dice1)
    {
         document.querySelector("h1").textContent="Player 2 won 💞";
    }
else
    {
         document.querySelector("h1").textContent=" Draw!! ";
    }