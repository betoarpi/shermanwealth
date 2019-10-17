import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';
import GettingStarted from '../containers/GettingStarted';
import WhoWeServe from '../containers/WhoWeServe';
import ClientApp from '../containers/ClientApp';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/about-us' component={About} />
        <Route exact path='/who-we-are' component={About} />
        <Route exact path='/getting-started' component={GettingStarted} />
        <Route exact path='/who-we-serve' component={WhoWeServe} />
        <Route exact path='/client-app' component={ClientApp} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
