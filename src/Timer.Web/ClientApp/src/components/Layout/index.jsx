import React, { Component } from 'react';

import { NavMenu } from './NavMenu/NavMenu'
import { Footer } from './Footer/Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className="flex flex-col h-screen">
        <NavMenu />
        <main className="flex flex-grow justify-center p-3">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
