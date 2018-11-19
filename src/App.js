import React, { Component } from 'react';
import './App.css';
import RenderProps from './RenderProps';
import HOC from './HOC';

const displayNames = {
  RENDER_PROPS: 'Render Props',
  HOC: 'Higher Order Components',
  HOOKS: 'React Hooks'
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'RENDER_PROPS'
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(display) {
    this.setState({
      display
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          <a href="#">
            <li onClick={() => this.updateDisplay('RENDER_PROPS')}>
              {displayNames.RENDER_PROPS}
            </li>
          </a>
          <a href="#">
            <li onClick={() => this.updateDisplay('HOC')}>
              {displayNames.HOC}
            </li>
          </a>
          <a href="#">
            <li onClick={() => this.updateDisplay('HOOKS')}>
              {displayNames.HOOKS}
            </li>
          </a>
        </ul>
        <h1>{displayNames[this.state.display]}</h1>
        {this.state.display === 'RENDER_PROPS' && <RenderProps />}
        {this.state.display === 'HOC' && <HOC />}
        {this.state.display === 'HOOKS' && <p>TODO</p>}

      </div>
    );
  }
}

export default App;
