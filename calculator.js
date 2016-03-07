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
		var operation;
	if (choice == "addition"){
		operation = " + ";		
		var answer = parsedNumber1 + parsedNumber2;
	} else if(choice == "subtraction"){
		operation = " - ";
		var answer = parsedNumber1 - parsedNumber2;
	} else if(choice == "multiplication"){
		operation = " * ";
		var answer = parsedNumber1 * parsedNumber2;
	} else if(choice == "division"){
		operation = " / ";
		var answer = parsedNumber1 / parsedNumber2;
	}

	var answerAres = document.getElementById("answers");
	answerAres.innerHTML = number1 + operation + number2 + " = " + answer;

}