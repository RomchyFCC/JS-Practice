// import components
import React from 'react';
import Popup from './Popup';


class Recipes extends React.Component {
  render() {
    return(
      <div id="wrapper">
        
        <div className="utility">
          <button onClick={this.props.togglePopup.bind(this)}>Add Recipe</button>
          {this.props.showPopup && <Popup onAdd={this.props.onAdd.bind(this)} length={this.props.length} closePopup={this.props.togglePopup.bind(this)} />}
          <input placeholder="Search" onChange={this.props.filterList.bind(this)} />
        </div>
        <ul>
        {
          this.props.filtered.map(r => (
            <li key={r.id}>
              <div className="recipe">
                <h3 id={`rec${r.id}`} onClick={this.props.toggleRecipe.bind(this)} >{r.name}</h3>
                <img width="300" height="200" src={r.img} alt={r.name} />
                <p>{r.comments.length} Comments</p>
              </div>
            </li>
            )
          )
        }
        </ul>
      </div>
    )
  }
} 

export default Recipes