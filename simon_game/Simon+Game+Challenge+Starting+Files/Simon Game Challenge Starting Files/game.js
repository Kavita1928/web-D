



var gamepattern = [];
var buttoncolors = ["green","red","yellow","blue"]

function nextsequence()    {
var randomselector = Math.round(Math.random()*3);
return randomselector;
}

var randomchosencolor = buttoncolors[nextsequence()];
gamepattern.push(randomchosencolor);
console.log(randomchosencolor);


var randomID = "#" + randomchosencolor;

$(randomID).