import React, { Component } from 'react';
import './App.css';
import { Menu } from '../components/menu.js';
import {ContentContainer} from '../components/contentContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentContainer />
        <Menu/>

      </div>
    );
  }
}

export default App;
