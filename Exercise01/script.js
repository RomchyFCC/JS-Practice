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

var todoList = {
	todos: ["item 1", "item 2", "item 3"],
	displayTodos: function () {
		console.log("My todos:", this.todos);
	},
	addTodo: function (todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function (n, newValue) {
		this.todos[n] = newValue;
		this.displayTodos();
	},
	deleteTodo: function (x) {
		this.todos.splice(x, 1);
		this.displayTodos();
	}
};

todoList.addTodo("my new item is sick");
todoList.changeTodo(2, "Get out mofo");
todoList.deleteTodo(0);