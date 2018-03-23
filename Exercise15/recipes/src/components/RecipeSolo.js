import React from 'react';
import RecipeAPI from '../api';
import Header from './Header';

import { Link } from 'react-router-dom';


const RecipeSolo = props => {
  const recipe = RecipeAPI.get(parseInt(props.match.params.id, 10))
  if (!recipe) {
    return <div>If you created your own recipe, it doesn't exist because this is a front end practice project!</div>
  }
  return(
    <div>
      <Header />
      <Link to={'/'}>Home</Link>
      <img width="300" height="200" src={recipe.img} alt={recipe.name} />
      <div>
        <p>Name: {recipe.name}</p>
        <p>PrepTime: {recipe.prepTime}</p>
      </div>
      <div>
        <p>Preparation:</p>
        <p>{recipe.preparation}</p>
      </div>
      <div>
        <p>Comments</p>
        <ul>
          {
            recipe.comments.map((r, index) => (
              
              <li key={index}>
                <div className="comment">
                  <h3>{r.commenterName}</h3>
                  <p>{r.comment}</p>
                </div>
              </li>
              )
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default RecipeSolo;