import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RecipeSolo from './RecipeSolo';
import App from './App';

class Main extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path={'/'} component={App} ></Route>
        <Route path={'/recipe:id'} component={RecipeSolo} ></Route>
      </Switch>
    )
  }
}

export default Main;