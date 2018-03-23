// import components
import React from 'react';
//import Recipe from './Recipe';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import ReactAPI from '../api';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      recipes: ReactAPI.recipes,
      filtered: []
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  onAdd(r) {
    let recipes = this.state.recipes;
    this.setState({
      recipes: recipes.concat(r),
      filtered: recipes.concat(r)
    })
  }
  filterList(e){
    let updatedList = this.state.recipes;
    updatedList = updatedList.filter(r => {
      return r.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({filtered: updatedList});
  }
  componentWillMount(){
    this.setState({filtered: this.state.recipes})
  }
  render() {
    return(
      <div>
        <div className="utility">
          <button onClick={this.togglePopup.bind(this)}>Add Recipe</button>
          {this.state.showPopup ? <Popup onAdd={this.onAdd.bind(this)} length={this.state.recipes.length} closePopup={this.togglePopup.bind(this)} /> : null}
          <input placeholder="Search" onChange={this.filterList.bind(this)} />
        </div>
        <ul>
        {
          this.state.filtered.map(r => (
            <li key={r.id}>
              <div className="recipe">
                <h3>{r.name}</h3>
                <img width="300" height="200" src={r.img} alt={r.name} />
                <p>{r.prepTime}</p>
                <p>{r.comments.length} Comments</p>
                <Link to={`/recipe${r.id}`} >Details</Link>
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