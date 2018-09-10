import React, { Component } from 'react';
import './App.css';
import { Tab } from '../components/tab.js';
import { TabContainer } from '../components/tabContainer.js';
import { RadioButton } from '../components/radioButton.js';
import {MenuHeader} from '../components/MenuHeader';
import {ExContainer} from '../components/exContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ExContainer />
      </div>
    );
  }
}

export default App;
