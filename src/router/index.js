import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Compiller from '../pages/codes/Compiler';
import Practices from '../pages/practica/practicas';
import NotFound from '../pages/NotFound/NotFound';
import Start from '../pages/Start/Start.js';
import Module from '../pages/Module/Module.js';
import comparison from '../pages/Comparison/Comparison.js';
import Practice from '../pages/Practice/Practice.js';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/menu" component={Home} />
        <Route path="/compiler" component={Compiller} />
        <Route path="/modpractice/:modules" component={Practice} />
        <Route path="/practice/:modules" component={Practices} />
        <Route path="/module/:modules" component={Module} />
        <Route path="/comparison/:modules" component={comparison} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
