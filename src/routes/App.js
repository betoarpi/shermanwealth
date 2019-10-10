import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
