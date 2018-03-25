import React from 'react';
import { Route } from 'react-router-dom';
import '../style/App.css';

// import components
import Recipes from './Recipes.js';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Route exact path={'/'} component={Recipes} ></Route>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
