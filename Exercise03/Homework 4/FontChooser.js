class FontChooser extends React.Component {
	constructor(props) {
		super(props);
		var boldness = this.props.bold;
		if (boldness === "true") {
			boldness = true;
		} else {
			boldness = false;
		}
		var min = parseInt(this.props.min);
		var max = parseInt(this.props.max);
		var sizing = parseInt(this.props.size);
		this.state = {hide: true,
									bold: boldness,
									size: sizing,
									color: "black",
									min: min,
									max: max};
  }
  handleBoldness() {
  	this.setState ({bold: !this.state.bold});
  }
  handleClick() {
  	this.setState	({hide: !this.state.hide});
  }
  handleIncrease() {
  	if (this.state.size === this.state.max) {
  		this.setState({color: "red"});
  		return;
  	}
  	
  	this.setState ({size: this.state.size +1, color: "black"});
  	if (this.state.size+1 === this.state.max) {
  		this.setState({color: "red"});
  		return;
  	}
  }
  handleDecrease() {
  	if (this.state.size === this.state.min) {
  		this.setState({color: "red"});
  		return;
  	}
  	this.setState ({size: this.state.size -1, color: "black"});
  	if (this.state.size-1 === this.state.min) {
  		this.setState({color: "red"});
  		return;
  	}
  }
  handleReset() {
  	var defaultSize = parseInt(this.props.size);
  	this.setState ({size: defaultSize, color: "black"});
  }
  render() {
  	var myColor = this.state.color;
  	var weight = this.state.bold ? "bold" : "normal";
  	var size = this.state.size;
		return(
		       <div>
			       <input type="checkbox" id="boldCheckbox" checked={this.state.bold} onClick={this.handleBoldness.bind(this)} hidden={this.state.hide}/>
			       <button id="decreaseButton" onClick={this.handleDecrease.bind(this)} hidden={this.state.hide}>-</button>
			       <span id="fontSizeSpan" onDoubleClick={this.handleReset.bind(this)} style={{color:myColor}} hidden={this.state.hide}>{size}</span>
			       <button id="increaseButton" onClick={this.handleIncrease.bind(this)} hidden={this.state.hide}>+</button>
			       <span min={this.state.min} max={this.state.max} style={{fontWeight:weight, fontSize: size}} id="textSpan" onClick={this.handleClick.bind(this)}>{this.props.text}</span>
		       </div>
		);
  }
}