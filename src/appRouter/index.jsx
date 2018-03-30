import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/AsyncComponent';

// Enabling code splitting in Webpack

const App = asyncComponent(() =>
import('../components/App').then(module => module.default));

const PokemonDetails = asyncComponent(() =>
import('../components/PokemonDetails/PokemonDetails').then(module => module.default));

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/pokemon/" component={PokemonDetails} />
      <Route path="/pokemon/:id" component={PokemonDetails} />
    </Switch>

  </Router>
);

export default AppRouter;

