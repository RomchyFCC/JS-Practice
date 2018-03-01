import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo}/>
        )
      })
    }
    return (
      <ul className="Projects">
        {todoItems}

      </ul>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;