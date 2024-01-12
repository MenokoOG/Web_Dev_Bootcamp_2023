prompt("What is your name?")
prompt("What is your love's name")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

// alert("Your lovescore is " + loveScore + " %");

if(loveScore > 70){
alert("Your lovescore is " + loveScore + " %. You both love yourselves like the way Big Dipper loves Little Dipper");
}

if(loveScore > 30 && loveScore <= 70){
alert("Your lovescore is " + loveScore + " %. Your mid love.");
}

if(loveScore <= 30){
alert("Your lovescore is " + loveScore + " %. You both love yourselves like oil and water.");
}

else {
alert("Your lovescore is " + loveScore + " %");
}
