import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Route } from 'react-router';
import Home from '../pages/Home/Home.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import Start from '../pages/Start/Start.jsx';
import Module from '../pages/Module/Module.jsx';
import comparison from '../pages/Comparison/Comparison.jsx';
import Practice from '../pages/Practice/Practice.jsx';
import Helper from '../pages/IndexHelper/ChildrenHelper.jsx';


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/menu" component={Home} />
        <Route path="/modpractice1/:modules" component={Practice} />
        <Route path="/modpractice2/:modules" component={Practice} />
        <Route path="/module/:modules" component={Module} />
        <Route path="/comparison/:modules" component={comparison} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
