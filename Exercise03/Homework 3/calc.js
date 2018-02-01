/*
 * Implement all your JavaScript in this file!
 */
'use strict'
var storage = {
	displayNumber: [],
	numberOne: undefined,
	numberTwo: undefined,
	mode: "",
	lastMode: "",
	calculated: false,
	disable: true
}


var operations = {
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

var handlers = {
	addNumber: function(number) {
		storage.displayNumber.push(number);
	},
	changeToNumber: function(arrayNumber) {
		var number = "";
		for(var i = 0; i < arrayNumber.length; i++) {
			number = number + arrayNumber[i];
		}
		$("#display").val(number);
	}
	
}

var view = {
	setUpEventListener: function() {
		var number1 = $("#button1").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number1.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.disable = false;
			storage.mode = "";
		});
		var number2 = $("#button2").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number2.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number3 = $("#button3").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number3.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number4 = $("#button4").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number4.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number5 = $("#button5").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number5.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number6 = $("#button6").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number6.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number7 = $("#button7").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number7.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number8 = $("#button8").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number8.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number9 = $("#button9").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number9.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var number0 = $("#button0").click(function (){
			if (storage.calculated	=== true) {
				view.clearDisplay();
			}
			handlers.addNumber(number0.val());
			handlers.changeToNumber(storage.displayNumber);
			storage.mode = "";
			storage.disable = false;
		});
		var add = $("#addButton").click(function (){
			storage.disable = true;
			if (storage.calculated === true) {
				$("#display").val(storage.numberOne);
				storage.mode = "a";
				storage.lastMode = "a";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			var result;
			if (storage.mode) {
				storage.mode = "a";
				storage.lastMode = "a";
				return;
			}

			if (storage.lastMode === "d") {

				storage.numberTwo = $("#display").val();
				result = operations.divide(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "s") {

				storage.numberTwo = $("#display").val();
				result = operations.subtract(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "m") {

				storage.numberTwo = $("#display").val();
				result = operations.multiply(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.addition(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				}
			}
			storage.mode = "a";
			storage.lastMode = "a";
			storage.displayNumber = [];
		});
		var subtract = $("#subtractButton").click(function (){
			storage.disable = true;
			if (storage.calculated === true) {
				$("#display").val(storage.numberOne);
				storage.mode = "s";
				storage.lastMode = "s";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			var result;
			if (storage.mode) {
				storage.mode = "s";
				storage.lastMode = "s";
				return;
			}

			if (storage.lastMode === "d") {

				storage.numberTwo = $("#display").val();
				result = operations.divide(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "m") {

				storage.numberTwo = $("#display").val();
				result = operations.multiply(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "a") {

				storage.numberTwo = $("#display").val();
				result = operations.addition(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				}
			}
			storage.mode = "s";
			storage.lastMode = "s";
			storage.displayNumber = [];
		});
		var multiply = $("#multiplyButton").click(function (){
			storage.disable = true;
			if (storage.calculated === true) {
				$("#display").val(storage.numberOne);
				storage.mode = "m";
				storage.lastMode = "m";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			var result;
			if (storage.mode) {
				storage.mode = "m";
				storage.lastMode = "m";
				return;
			}

			if (storage.lastMode === "d") {

				storage.numberTwo = $("#display").val();
				result = operations.divide(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "s") {

				storage.numberTwo = $("#display").val();
				result = operations.subtract(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "a") {

				storage.numberTwo = $("#display").val();
				result = operations.addition(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				}
			}
			storage.mode = "m";
			storage.lastMode = "m";
			storage.displayNumber = [];
		});
		var divide = $("#divideButton").click(function (){
			storage.disable = true;
			if (storage.calculated === true) {
				$("#display").val(storage.numberOne);
				storage.mode = "d";
				storage.lastMode = "d";
				storage.displayNumber = [];
				storage.calculated = false;
				return;
			}
			var result;
			if (storage.mode) {
				storage.mode = "d";
				storage.lastMode = "d";
				return;
			}
			if (storage.lastMode === "m") {

				storage.numberTwo = $("#display").val();
				result = operations.multiply(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "s") {

				storage.numberTwo = $("#display").val();
				result = operations.subtract(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else if (storage.lastMode === "a") {

				storage.numberTwo = $("#display").val();
				result = operations.addition(storage.numberOne,storage.numberTwo);
				$("#display").val(result);
				storage.numberOne = result;

			} else {
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				}
			}
			storage.mode = "d";
			storage.lastMode = "d";
			storage.displayNumber = [];
		});
		var clear = $("#clearButton").click(function (){
			view.clearDisplay();
		});
		var equals = $("#equalsButton").click(function (){
			if (storage.disable === true) {
				return;
			}
			if (storage.lastMode === "m") {
				var result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else if (storage.calculated === true) {
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.multiply(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				}
				storage.mode = "m";
				storage.lastMode = "m";
				storage.displayNumber = [];

			} else if (storage.lastMode === "d") {
				var result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else if(storage.calculated === true){
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.divide(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				}
				storage.mode = "d";
				storage.lastMode = "d";
				storage.displayNumber = [];

			} else if (storage.lastMode === "s") {
				var result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else if(storage.calculated === true){
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.subtract(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				}
				storage.mode = "s";
				storage.lastMode = "s";
				storage.displayNumber = [];

			} else if (storage.lastMode === "a") {
				var result;
				if (storage.numberOne === undefined) {
					storage.numberOne = $("#display").val();
				} else if(storage.calculated === true){
					result = operations.addition(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
					storage.numberOne = result;
				} else {
					storage.numberTwo = $("#display").val();
					result = operations.addition(storage.numberOne,storage.numberTwo);
					$("#display").val(result);
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
		$("#display").val("");
		storage.numberOne = undefined;
		storage.numberTwo = undefined;
		storage.displayNumber = [];
		storage.mode = "";
		storage.lastMode = "";
		storage.calculated = false;
		storage.disable = true
	}
}
view.setUpEventListener();

// I created a new variable to store the result, because this is getting out of hand, try with the new variable from scratch