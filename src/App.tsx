import * as React from 'react';
import './App.css';

import Description from './Description';
import Header from './Header';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header name = 'React User'/>
        <Description countBy = { 3 }/>
      </div>
    );
  }
}

export default App;
