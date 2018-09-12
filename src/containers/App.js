import React, { Component } from 'react';
import './App.css';
import { Tab } from '../components/tab.js';
import { TabContainer } from '../components/tabContainer.js';
import { RadioButton } from '../components/radioButton.js';
import { Menu } from '../components/menu.js';
import { MenuToggle } from '../components/menuToggle.js';
import {MenuHeader} from '../components/MenuHeader';
import {ExContainer} from '../components/exContainer';
import {ContentContainer} from '../components/contentContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Gallery Amazing Fantastico</h1>
        <Menu/>
        <ContentContainer />

      </div>
    );
  }
}

export default App;
