class FontChooser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hide: true};
  }
  handleMouseOver() {
  	this.setState	({hide: !this.state.hide});
  }
  render() {
  	// learn to remove attributes
		return(
		       <div>
			       <input type="checkbox" id="boldCheckbox" hidden='true'/>
			       <button id="decreaseButton" hidden='true'>-</button>
			       <span id="fontSizeSpan" hidden='true'>{this.props.size}sadas</span>
			       <button id="increaseButton" hidden='true'>+</button>
			       <span id="textSpan" onMouseOver={this.handleMouseOver.bind(this)}>{this.props.text}</span>
		       </div>
		);
  }
}

