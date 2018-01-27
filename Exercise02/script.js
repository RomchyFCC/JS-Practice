let todoList = {
	todos: [],
	addTodo: function(todo) {
		this.todos.push({
			todoText: todo,
			complete: false
		});
	},
	removeTodo: function(position) {
		this.todos.splice(position, 1);
	},
	changeTodo: function(position, todo) {
		this.todos[position].todoText = todo;
	},
	removeAll: function() {
		this.todos.splice(0, this.todos.length);
	},
	completeTodo: function(position) {
		this.todos[position].complete = !this.todos[position].complete;
		
	},
	completeAll: function() {
		let allTodos = 0;
		let completeTodos = this.todos.length;
		this.todos.forEach(function(element) {
			if (element.complete === true) {
				allTodos++;
			}
		});
		this.todos.forEach(function(element) {
			toggleButton = document.getElementById("toggleButton");
			if (allTodos === completeTodos) {
				element.complete = false;
				toggleButton.textContent = "Complete all!";
			} else {
				element.complete = true;
				toggleButton.textContent = "Uncomplete all!";
			}	
		});
	}
};

let handlers = {
	addTodo: function() {
		addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value="";
		view.displayTodos();
	},
	removeTodo: function(position) {
		todoList.removeTodo(position);
		view.displayTodos();
	},
	removeAll: function() {
		todoList.removeAll();
		view.displayTodos();
	},
	completeAll: function() {
		todoList.completeAll();
		view.displayTodos();
	},
	completeTodo: function(position) {
		todoList.completeTodo(position);
		view.displayTodos();
	},
	editTodo: function(position) {
		todosLi = document.querySelector("[id='" + position + "']");
		text = todosLi.childNodes[1].textContent;
		todosLi.insertBefore(view.createInput(text), todosLi.childNodes[1]);
		todosLi.childNodes[2].textContent = "";
		todosLi.childNodes[1].focus();
	}
};

let view = {
	displayTodos: function() {
		todosUl = document.querySelector("ul");
		todosUl.innerHTML = "";

		let allTodos = 0;
		let completeTodos = todoList.todos.length;
		todoList.todos.forEach(function(element) {
			if (element.complete === true) {
				allTodos++;
			}
		});
		todoList.todos.forEach(function(element) {
			toggleButton = document.getElementById("toggleButton");
			if (allTodos === completeTodos) {
				toggleButton.textContent = "Uncomplete all!";
			} else {
				toggleButton.textContent = "Complete all!";
			}	
		});

		todoList.todos.forEach(function(todo, position) {
			let todoLi = document.createElement("li");
			let todoTextCompletion = "";

			if (todo.complete === true) {
				todoTextCompletion = "(x) " + todo.todoText;
			} else {
				todoTextCompletion = "( ) " + todo.todoText;
			}

			todoLi.id = position;
			todoLi.textContent = todoTextCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todoLi.insertBefore(this.createCompleteButton(), todoLi.childNodes[0]);
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function() {
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.className = "btn deleteButton";
		return deleteButton;
	},
	setUpEventListeners: function() {
		let todosUl = document.querySelector("ul");
		todosUl.addEventListener("click", function(event) {
			if(event.target.className === "btn deleteButton") {
				handlers.removeTodo(parseInt(event.target.parentNode.id));
			}
			if(event.target.className === "btn completeButton") {
				handlers.completeTodo(parseInt(event.target.parentNode.id));
			}
		});
		todosUl.addEventListener("dblclick", function(event) {
			if(event.target.id) {
				handlers.editTodo(parseInt(event.target.id));
			}
		});
		/*todosUl.addEventListener("onfocusout", function(event) {
			TO DO
		})*/
	},
	createCompleteButton: function() {
		let completeButton = document.createElement("button");
		completeButton.textContent = "Complete";
		completeButton.className = "btn completeButton"
		return completeButton;
	},
	createInput: function(text) {
		let createInput = document.createElement("input");
		createInput.id = "changeInput";
		createInput.type = "text";
		createInput.value = text;
		createInput.focus();
		return createInput;
	}
};

view.setUpEventListeners();