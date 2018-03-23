import React from 'react';

import { Link } from 'react-router-dom';

class Recipe extends React.Component {
  render() {
    return (
      <li>
        <div className="recipe">
          <h3>{this.props.name}</h3>
          <img src={this.props.img} />
          <p>{this.props.prepTime}</p>
          <Link to={`/${this.props.id}`} >Details</Link>
        </div>
      </li>
    )
  }
}

export default Recipe