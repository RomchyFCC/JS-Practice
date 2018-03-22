var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Link} from 'react-router';

// module requirements
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');
require('./css/index.css');

var App = React.createClass({
  render: function() {
    return(
      <Router history={browserHistory} >
        <Route path={'/'} component={TodoComponent} ></Route>
        <Route path={'/about'} component={About} ></Route>
      </Router>
    )
  }
})

//Create component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['asdas', 'asdsadas ', 'as das asd as0', 'as sad ads d d d']
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      )
    }.bind(this))
    return (
      <span id="todo-list">
        <Link to={'/about'} >About</Link>
        <p>Blah blah blah...</p>
        <p>{this.state.age}</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.onAdd} />
      </span>
    );
  }, // render

  // custom fun
  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  onAdd: function(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    
    this.setState({
      todos: updatedTodos
    });
  },

  // lifecylce funcs
  
  componentWillMount: function() {
    console.log('CWM');
  },
  componentDidMount: function() {
    console.log('CDM');
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log('CWU', nextState, nextProps)
  }
  
  
});

// put component into html page
ReactDOM.render(
  <App />,
  document.getElementById('todo-wrapper')
)