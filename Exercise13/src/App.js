import React from 'react';

/* class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "this is super text"
    }
  }
  update(e) {
    this.setState({
      txt: e.target.value,
    })
  }
  render() {
    let txt = this.state.txt;
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1 className="JSX" >{txt}</h1>
        <b>{txt}</b>
      </div>
    )
    
  }
} */

/* App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
} */

/* App.defaulProps = {
  txt: "this is the default txt"
} */

//const App = () => <h1>Hi</h1>

/* class App extends React.Component {
  render() {
    return <Button>I <Heart /> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
} */

/* class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentEvent: '---',
    }
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      currentEvent: e.type
    })
  }
  render() {
    return (
      <div>
        <textarea 
          cols="30" 
          onKeyPress={this.update}
          onClick={this.update}
          onTouch={this.update}
          rows="10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
} */
class App extends React.Component {
  /* constructor(){
    super();
    this.state={
      a: ''
    }
  }
  update(e) {
    this.setState({
      a: this.refs.a.value,
      b: this.refs.b.value
    })
  }
  render(){
    return (
      <div>
        <input ref="a" type="text" onChange={this.update.bind(this)}/>{this.state.a}
        <hr/>
        <input ref="b" type="text" onChange={this.update.bind(this)}/>{this.state.b}
      </div>
    )
  } */
  /* constructor(){
    super();
    this.state = {
      items: []
    }
  }
  
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(({results: items}) => this.setState({items}))
  }
  
  render() {
    let items = this.state.items;
    return (
      <div>
        {items.map(item => <h4>{item.name}</h4>)}
      </div>
    )
  } */
  /* constructor(){
    super();
    this.state = {
      input: '// add your jsx here ',
      output: '',
      err: '',
    }
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, {presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    }
    catch(err) {
      this.setState({err: err.message})
    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
        <textarea onChange={this.update.bind(this)} defaultValue={this.state.input} /></div>
        <pre>
          {this.state.output}
        </pre>
      </div>
    )
  } */
render() {
  return (
    <Buttons>
      <button value="A">A</button>
      <button value="B">B</button>
      <button value="C">C</button>
    </Buttons>
  )
}
}
  class Buttons extends React.Component {
    constructor() {
      super();
      this.state = {
        selected: 'none',
      }
    }
    selectItem(selected) {
      this.setState({selected})
    }
    render() {
      let fn = child => React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      })
      let items = React.Children.map(this.props.children, fn);
      return (
        <div>
          <h2>Youu have selected: {this.state.selected}</h2>
          {items}
        </div>
      )
    }
  }

export default App