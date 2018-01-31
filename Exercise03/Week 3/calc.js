/*
 * Implement all your JavaScript in this file!
 */

let storage = {
	displayNumber: [],
	numberOne: undefined,
	numberTwo: undefined,
	result: undefined,
	mode: ""
}


let operations = {
	multiply: function(number1, number2) {
		return number1 * number2;
	},
	divide: function(number1, number2) {
		return number1 / number2;
	},
	addition: function(number1, number2) {
		return number1 + number2;
	},
	subtract: function(number1, number2) {
		return number1 - number2;
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
	},
	changeMode: function(mode) {
		storage.mode = mode;
	},
	
}

let view = {
	setUpEventListener: function() {
		let number1 = $("#button1").click(function (){
			handlers.addNumber(number1.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number2 = $("#button2").click(function (){
			handlers.addNumber(number2.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number3 = $("#button3").click(function (){
			handlers.addNumber(number3.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number4 = $("#button4").click(function (){
			handlers.addNumber(number4.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number5 = $("#button5").click(function (){
			handlers.addNumber(number5.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number6 = $("#button6").click(function (){
			handlers.addNumber(number6.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number7 = $("#button7").click(function (){
			handlers.addNumber(number7.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number8 = $("#button8").click(function (){
			handlers.addNumber(number8.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number9 = $("#button9").click(function (){
			handlers.addNumber(number9.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let number0 = $("#button0").click(function (){
			handlers.addNumber(number0.val());
			handlers.changeToNumber(storage.displayNumber);
		});
		let add = $("#addButton").click(function (){
			let result;
			if (storage.numberOne === undefined) {
				storage.numberOne = parseInt($("#display").attr("placeholder"));
				$("#display").attr("placeholder", "");
			} else if (storage.numberTwo === undefined) {
				storage.numberTwo = parseInt($("#display").attr("placeholder"));
				if (storage.mode) {
					result = operations.addition(parseInt(storage.numberOne), parseInt(storage.numberTwo));
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				}
			} else {
				result = operations.addition(parseInt(storage.numberOne), parseInt(storage.numberTwo));
				$("#display").attr("placeholder", result);
				storage.numberOne = parseInt(result);
			}
			handlers.changeMode("a");
			storage.displayNumber = [];
		});
		let subtract = $("#subtractButton").click(function (){
			let result;
			if (storage.numberOne === undefined) {
				storage.numberOne = $("#display").attr("placeholder");
				$("#display").attr("placeholder", "");
			} else if (storage.numberTwo === undefined) {
				storage.numberTwo = $("#display").attr("placeholder");
				if (storage.mode) {
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				}
			} else {
				result = operations.subtract(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = parseInt(result);
			}
			handlers.changeMode("s");
			storage.displayNumber = [];
		});
		let multiply = $("#multiplyButton").click(function (){
			let result;
			if (storage.numberOne === undefined) {
				storage.numberOne = $("#display").attr("placeholder");
				$("#display").attr("placeholder", "");
			} else if (storage.numberTwo === undefined) {
				storage.numberTwo = $("#display").attr("placeholder");
				if (storage.mode) {
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				}
			} else {
				result = operations.multiply(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = parseInt(result);
			}
			handlers.changeMode("m");
			storage.displayNumber = [];
		});
		let divide = $("#divideButton").click(function (){
			let result;
			if (storage.numberOne === undefined) {
				storage.numberOne = $("#display").attr("placeholder");
				$("#display").attr("placeholder", "");
			} else if (storage.numberTwo === undefined) {
				storage.numberTwo = $("#display").attr("placeholder");
				if (storage.mode) {
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				}
			} else {
				result = operations.divide(storage.numberOne,storage.numberTwo);
				$("#display").attr("placeholder", result);
				storage.numberOne = parseInt(result);
			}
			handlers.changeMode("d");
			storage.displayNumber = [];
		});
		let clear = $("#clearButton").click(function (){
			view.clearDisplay();
		});
		let equals = $("#equalsButton").click(function (){
			if (!storage.mode) {
				if (storage.numberOne === undefined) {
					storage.numberOne = parseInt($("#display").attr("placeholder"));
					$("#display").attr("placeholder", storage.One);
				}
				storage.displayNumber = [];
			}
			if (storage.mode === "m") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = parseInt($("#display").attr("placeholder"));
					$("#display").attr("placeholder", storage.One);
				} else if (storage.numberTwo === undefined) {
					storage.numberTwo = parseInt($("#display").attr("placeholder"));
					result = operations.multiply(parseInt(storage.numberOne),parseInt(storage.numberTwo));
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				} else {
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				}
			} else if (storage.mode === "d") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
					$("#display").attr("placeholder", storage.One);
				} else if (storage.numberTwo === undefined) {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				} else {
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
			} else if (storage.mode === "s") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").attr("placeholder");
					$("#display").attr("placeholder", storage.One);
				} else if (storage.numberTwo === undefined) {
					storage.numberTwo = $("#display").attr("placeholder");
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				} else {
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").attr("placeholder", result);
					storage.numberOne = result;
				}
			} else if (storage.mode === "a") {
				let result;
				if (storage.numberOne === undefined) {
					storage.numberOne = parseInt($("#display").attr("placeholder"));
					$("#display").attr("placeholder", storage.One);
				} else if (storage.numberTwo === undefined) {
					storage.numberTwo = parseInt($("#display").attr("placeholder"));
					result = operations.addition(parseInt(storage.numberOne),parseInt(storage.numberTwo));
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				} else {
					result = operations.addition(parseInt(storage.numberOne),parseInt(storage.numberTwo));
					$("#display").attr("placeholder", result);
					storage.numberOne = parseInt(result);
				}
			}
			storage.displayNumber = [];
		});		
	},
	clearDisplay: function() {
		$("#display").attr("placeholder", "");
		storage.number1 = undefined;
		storage.number2 = undefined;
		storage.displayNumber = [];
		storage.mode = "";
		result = undefined;
	}
}
view.setUpEventListener();

// I created a new variable to store the result, because this is getting out of hand, try with the new variable from scratch