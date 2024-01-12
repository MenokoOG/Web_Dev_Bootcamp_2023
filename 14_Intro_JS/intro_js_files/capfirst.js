fullName = prompt("What is your name?");
var firstChar = fullName.slice(0,1);
var upperFirstChar = firstChar.toUpperCase();
var restOfName = fullName.slice(1, fullName.length);
restOfName = restOfName.toLowerCase();
var capitalizefullName = upperFirstChar + restOfName;
alert("Hello, " + capitalizefullName)