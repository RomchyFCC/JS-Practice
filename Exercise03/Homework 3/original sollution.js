/*
 * Implement all your JavaScript in this file!
 * This sollution wasn't good because i used lets instead of vars...... -.-
 */

let storage = {
	displayNumber: [],
	numberOne: undefined,
	numberTwo: undefined,
	mode: "",
	lastMode: "",
	calculated: false
}


let operations = {
	multiply: function(number1, number2) {
		return number1 * number2;
	},
	divide: function(number1, number2) {
		return number1 / number2;
	},
	addition: function(number1, number2) {
		return parseInt(number1) + parseInt(number2);
	},
	subtract: function(number1, number2) {
		return parseInt(number1) - parseInt(number2);
	}
}

let handlers = {
	addNumber: function(number) {
		storage.displayNumber.push(number);
	},
	changeToNumber: function(arrayNumber) {
		let number = "";
		for(let i = 0; i < arrayNumber.length; i++) {
			number = number + arrayNumber[i];
		}
		$("#display").attr("placeholder", number);
	}
	
}

let view = {
	setUpEventListener: function() {
		let number1 = $("#button1").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number1.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number2 = $("#button2").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number2.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number3 = $("#button3").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number3.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number4 = $("#button4").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number4.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number5 = $("#button5").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number5.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number6 = $("#button6").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number6.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number7 = $("#button7").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number7.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number8 = $("#button8").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number8.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number9 = $("#button9").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number9.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let number0 = $("#button0").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number0.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
		});
		let add = $("#addButton").click(function (){
			if (storage.calculated === true) {
				$("#display").attr("placeholder", storage.numberOne);
				storage.mode = "a";
				storage.lastMode = "a";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			let result;
			if (storage.mode) {
				storage.mode = "a";
				storage.lastMode = "a";
				return;
			}

			if (storage.lastMode === "d") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.divide(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "s") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.subtract(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "m") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.multiply(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.addition(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
			}
			storage.mode = "a";
			storage.lastMode = "a";
			storage.displayNumber = [];
		});
		let subtract = $("#subtractButton").click(function (){
			if (storage.calculated === true) {
				$("#display").attr("placeholder", storage.numberOne);
				storage.mode = "s";
				storage.lastMode = "s";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			let result;
			if (storage.mode) {
				storage.mode = "s";
				storage.lastMode = "s";
				return;
			}

			if (storage.lastMode === "d") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.divide(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "m") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.multiply(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "a") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.addition(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
			}
			storage.mode = "s";
			storage.lastMode = "s";
			storage.displayNumber = [];
		});
		let multiply = $("#multiplyButton").click(function (){
			if (storage.calculated === true) {
				$("#display").attr("placeholder", storage.numberOne);
				storage.mode = "m";
				storage.lastMode = "m";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			let result;
			if (storage.mode) {
				storage.mode = "m";
				storage.lastMode = "m";
				return;
			}

			if (storage.lastMode === "d") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.divide(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "s") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.subtract(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "a") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.addition(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
			}
			storage.mode = "m";
			storage.lastMode = "m";
			storage.displayNumber = [];
		});
		let divide = $("#divideButton").click(function (){
			if (storage.calculated === true) {
				$("#display").attr("placeholder", storage.numberOne);
				storage.mode = "d";
				storage.lastMode = "d";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			let result;
			if (storage.mode) {
				storage.mode = "d";
				storage.lastMode = "d";
				return;
			}
			if (storage.lastMode === "m") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.multiply(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "s") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.subtract(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else if (storage.lastMode === "a") {

				storage.numberTwo = $("#display").attr("placeholder");
				result = operations.addition(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
			}
			storage.mode = "d";
			storage.lastMode = "d";
			storage.displayNumber = [];
		});
		let clear = $("#clearButton").click(function (){
			view.clearDisplay();
		});
		let equals = $("#equalsButton").click(function (){
			if (storage.lastMode === "m") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else if (storage.calculated === true) {
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
				storage.mode = "m";
				storage.lastMode = "m";
				storage.displayNumber = [];

			} else if (storage.lastMode === "d") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else if(storage.calculated === true){
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
				storage.mode = "d";
				storage.lastMode = "d";
				storage.displayNumber = [];

			} else if (storage.lastMode === "s") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else if(storage.calculated === true){
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
				storage.mode = "s";
				storage.lastMode = "s";
				storage.displayNumber = [];

			} else if (storage.lastMode === "a") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
				} else if(storage.calculated === true){
					result = operations.addition(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.addition(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
				storage.mode = "a";
				storage.lastMode = "a";
				storage.displayNumber = [];
			}
			storage.calculated = true;
			storage.mode = "";
			storage.displayNumber = [];
		});		
	},
	clearDisplay: function() {
		$("#display").attr("placeholder", "");
		storage.numberOne = undefined;
		storage.numberTwo = undefined;
		storage.displayNumber = [];
		storage.mode = "";
		storage.lastMode = "";
		storage.calculated = false;
	}
}
view.setUpEventListener();

// I created a new variable to store the result, because this is getting out of hand, try with the new variable from scratch