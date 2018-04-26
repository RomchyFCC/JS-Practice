import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

function Topic({ match }) {
  return <h3>{match.params.topicId}</h3>
}

export default function Topics ({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Comps</Link>
        </li>
        <li>
          <Link to={`${match.url}/propsvstate`}>PVS</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.path}/:topicId`} component={Topic} />
      {/* <Route path={`${match.path}/:topicId`} render={() => {
        return <Topic anypropwewant='nice' />
      }} /> */}
      <Route exact path={match.path} render={() => {
        return <h3>Select a topic</h3>
      }} />
    </div>
  );
}
