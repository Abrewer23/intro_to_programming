// Calculator Program
// 4 Operations addition, subtraction,
// multiplication, and division
// You will need a function for each one
// You need a menu so user can select an
// operation
// input

// var choice = prompt("What operation", "addition");
var handleClick = function(){
	console.log(window.event);
	var choice = window.event.target.id;
	console.log(choice)
	var number1 = document.getElementById("firstNum").value;
		var number2 = document.getElementById("secondNum").value;
		var parsedNumber1 = parseFloat(number1);
		var parsedNumber2 = parseFloat(number2);
	if (choice == "addition"){		
		var answer = parsedNumber1 + parsedNumber2;
		// Write info to the screen
		//alert("The answer is " + answer);
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
	} else if(choice == "subtraction"){
		var answer = parsedNumber1 - parsedNumber2;
		// Write info to the screen
		//alert("The answer is " + answer);
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
	} else if(choice == "multiplication"){
		var answer = parsedNumber1 * parsedNumber2;
		// Write info to the screen
		//alert("The answer is " + answer);
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
	} else if(choice == "division"){
		var answer = parsedNumber1 / parsedNumber2;
		// Write info to the screen
		//alert("The answer is " + answer);
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
	}
}