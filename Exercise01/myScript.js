/* 
**
** Just some practice I left in before the actual project!
**
**

var todos = ["item 1", "item 2", "item 3"];

console.log("my todos:", todos);

todos.push("item 4");

console.log(todos);

console.log("successfully added ", todos[3]);

todos.push("item 5");

console.log(todos);

todos[0] = "item 1 updated";

console.log(todos);

todos.splice(0, 1);

todos.splice(2, 1);

console.log(todos);

function sayHiTo(person) {
	console.log("Hi", person);
}

sayHiTo("Romchy");

function displayTodos() {
	console.log("My todos:", todos);
}

displayTodos();

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

addTodo("Next item");

function changeTodo(n, newValue) {
	todos[n] = newValue;
	displayTodos();
}

changeTodo(2, "wow, i changed");

function removeTodo(x) {
	todos.splice(x, 1);
	displayTodos();
}

removeTodo(2);

var romchy = {
	name: "Romchy",
	sayName: function () {
		console.log(this.name);
	}
};

todoList.addTodo("my new item is sick");
todoList.changeTodo(2, "Get out mofo");
todoList.deleteTodo(0);

**
**
*/

let todoList = {
	todos: [],
	/*displayTodos: function () {
		if (this.todos.length === 0) {
			console.log("your to do list is empty!");
		} else {
			console.log("My todos:");
			for (let i = 0; i < this.todos.length; i++){
				if (this.todos[i].completed === true) {
					console.log("(x)" + " " + this.todos[i].todoText);
				} else {
					console.log("( )" + " " + this.todos[i].todoText);
				}
			}
		}
	},*/
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false});
	},
	changeTodo: function (n, todoText) {
		this.todos[n].todoText = todoText;
	},
	deleteTodo: function (x) {
		this.todos.splice(x, 1);
	},
	toggleCompleted: function(position) {
		let todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		let completedTodos = 0;
		let allTodos = this.todos.length;
		
		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});
		/*

		if (completedTodos === allTodos) {
			this.todos.forEach(function(todo) {
				todo.completed = false;
			});

		} else {
			this.todos.forEach(function(todo) {
				todo.completed = true;
			});
		} 

		*/
		this.todos.forEach(function(todo) {
			if(completedTodos === allTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
	}
};

let handlers = {
	/*displayTodos: function() {
		todoList.displayTodos();
	},*/
	addTodo: function() {
		let addTodoTextInput = document.getElementById("addTodoTextInput");
		console.log(addTodoTextInput);
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value="";
		view.displayTodos();
	},
	changeTodo: function() {
		let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		let changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
		changeTodoPositionInput.value="";
		changeTodoTextInput.value="";
		view.displayTodos();
	},
	deleteTodo: function(position) {
		/* let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput"); */
		todoList.deleteTodo(position);
		/* deleteTodoPositionInput.value=""; */
		view.displayTodos();
	},
	toggleCompleted: function() {
		let toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
		todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
		toggleTodoPositionInput.value = "";
		view.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};

let view = {
	displayTodos: function() {
		let todosUl = document.querySelector("ul");
		todosUl.innerHTML = "";
		/*

		for (let i = 0; i < todoList.todos.length; i++) {
			
			let todoLi = document.createElement("li");
			let todo = todoList.todos[i];
			let todoTextWithCompletion = "";

			if (todo.completed === true) {
				todoTextWithCompletion = "(x) " + todo.todoText;
			} else {
				todoTextWithCompletion = "( ) " + todo.todoText;
			}

			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}

		*/
		todoList.todos.forEach(function(todo, position) {
			let todoLi = document.createElement("li");
			let todoTextWithCompletion = "";
			if (todo.completed === true) {
				todoTextWithCompletion = "(x) " + todo.todoText;
			} else {
				todoTextWithCompletion = "( ) " + todo.todoText;
			}

			todoLi.id = position;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function() {
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.className = "deleteButton";
		return deleteButton;
	},
	setUpEventListeners: function() {
		let todosUl = document.querySelector("ul");

		todosUl.addEventListener("click", function(event) {
			if (event.target.className === "deleteButton") {
				handlers.deleteTodo(parseInt(event.target.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();

// let todoLi = document.createElement("li");

// let todosUl = document.querySelector("ul");

// todosUl.appendChild(todoLi)

/* 
**
** let displayTodosButton = document.getElementById("displayTodosButton");
** let toggleAllButton = document.getElementById("toggleAllButton");
**
** displayTodosButton.addEventListener("click", function() {
** 	todoList.displayTodos();
** });
** 
** 
** toggleAllButton.addEventListener("click", function() {
** 	todoList.toggleAll();
** });
*/