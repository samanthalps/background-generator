// FUNCTION DECLARATION 
// function name() {} 
/*function sayHelo() {
	console.log("Hello");
}

sayHelo();*/

// FUNCTION EXPRESSION 
// var a = function name() {} 
/*var sayBye = function() { //Anonymous Function:no function name
	console.log("Bye");
}

sayBye();*/

// Argument: content inside the ()
/*function sing(song) {
	console.log(song);
}

sing("Doooooo");
sing("Reeeeee");
sing("Miiiiii");
sing("Faaaaaa");
sing("Soooooo");
sing("Laaaaaa");
sing("Diiiiii");
sing("Doooooo");

function multiply(a, b) {
	if (a > 10 || b > 10) {
		return "that's too hard";
	} else {
		return a*b;
	}
}

multiply(5, 10);*/

// EXERCISE 5 
/*var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}


function checkDriveAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}



var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge2();


function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}*/


// DATA STRUCTURE 
// Array = a way to organize informatin 
/*var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];

*/


// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
	username: "lala",
	password: "secret"
};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
	{
		username: "lulu",
		password: "123"
	}

];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// Create a function to get to know username or password correct or not. 
function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);
