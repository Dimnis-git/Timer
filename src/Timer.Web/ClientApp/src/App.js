import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout/index.jsx';
import { Home } from './pages/Home/index.jsx';

import './assets/styles/app.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
