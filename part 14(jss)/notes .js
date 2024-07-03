myname="kavita";
//alert(myname);

var name=prompt("what is your name ?");   // a slide asking for information
alert("hello" + name); // give alert 

/*
# let age = 25 ; //block scoped (agar bracket me hai to bracket ke andar access possible hai)
                // reassign kr skte (dynamically typed language(multiple type de skte hai))

#var age = 25;  // function me likha to usme(scope) hi access hoga  but function se bahar global access hoga
                // var ka redeclartion kr skte hai

#const age =25;  // dubara define nhi kr skte hai

*/


// Variables
var info = prompt("write few lines on india ");
var len = info.length;
var remaining = 280 - len; 
alert("you have written " + len +" words ,  remaining words are" + remaining );

alert(prompt("write about ECE").slice(0,100));

var info=prompt("what is your name");

var first = info.slice(0,1);
var remaining = info.slice(1,info.length);
var uppercase= first.toUpperCase();
var lowercase= remaining.toLowerCase();
var all = uppercase + lowercase;

alert("Hello " +all);

// love percent calculTOR
var n1 = prompt("Enter your name ");
var n2 = prompt("Enter their name ");

var love = Math.random();
var percent = Math.floor(love*100) +1;
if(percent >= 75 )
alert("Love between " +n1 +" and "+ n2 +" is " +percent + "% \nyour love is like Romieo & Juliet <3" );

else
  alert("Love between " +n1 +" and "+ n2 +" is " +percent + "% ");var n1 = prompt("Enter your name ");
  var n2 = prompt("Enter their name ");
  
  var love = Math.random();
  var percent = Math.floor(love*100) +1;
  if(percent >= 75 )
  alert("Love between " +n1 +" and "+ n2 +" is " +percent + "% \nyour love is like Romieo & Juliet <3" );
  
  else
    alert("Love between " +n1 +" and "+ n2 +" is " +percent + "% ");

    // leap yr
    function isleapyr(year)
{
    if(year%4 == 0  )
    {
        if(year%100 != 0)
            return "leap year";
        else{
            if(year % 400 == 0)
                return "leap year";
            else
                return "not a leap year";
        }
    }
    else{
        return "not a leap year"
    }
        
}

// to increase number each in array in each insert
var output=[];
var count=1;
function fizzbuzz()
{
    output.push(count );
    count++;
    console.log(output);
}

// to get random element from arrayfunction whosPaying(names) {
    function whosPaying(names){
    //Write your code here.
    var length = names.length;
    var random = Math.floor(Math.random()*length);
    var name= names[random];
    
   var note = name + " is going to buy lunch today!"
   
   return note;
   
   


/******Don't change the code below*******/    
}
var names=["Angela","kavita",'ratna',"ram","harsh"];
whosPaying(names);

//to print  apoem 
var count=1;
while(count<100)
    {
         
    console.log( 100-count+"bottles of beer on the wall, ");console.log(100-count +" bottles of beer\n");
    console.log("Take one down and pass it around, ");console.log( 100-count-1 +" bottles of beer on the wall.");
       count++;
    } // we break the sentence because console.log cannot display  all 
    //  variablel together


// fibbonicci series 
var n=prompt("Enter the size of fibonicci series needed ");
console.log(fibonacciGenerator (n));


function fibonacciGenerator (n)
{var arr=[];
     arr.push(0);
   
    if(n==1)  {
         return arr;   }
    
      arr[1]=1;
         
    if(n==2)    {a
        return arr;    }

    var sum=0;
    if(n>2)
    {
    for(var i=2;i<n;i++)
        {
            var n1=arr[i-1];
            var n2= arr[i-2];
            arr[i]=n1+n2;
        }   
    return arr}
    
}




