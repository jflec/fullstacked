import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Homepage from './Homepage';
import ChampionPage from './ChampionPage';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/champions/:id" component={ChampionPage} />
      </Switch>
    </HashRouter>
  );
};

export default App;
