
import './App.css';
import React from 'react'
import ColoredBlock from './ColoredBlock';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <header><h1>Welcome</h1></header>
        <div className="main-content">
          <ColoredBlock></ColoredBlock>
        </div>
      </div>
    );
  }
}

export default App;

