import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';
import GettingStarted from '../containers/GettingStarted';
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
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
