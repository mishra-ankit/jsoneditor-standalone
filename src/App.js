import React, { Component } from 'react';

import JSONEditorReact from './JSONEditorReact';
import './App.css';

const schema = {
  title: 'Example Schema'
};

const json = {
  'array': [1, 2, 3],
  'boolean': true,
  'null': null,
  'number': 'four',
  'object': {'a': 'b', 'c': 'd'},
  'string': 'Hello World'
};

const modes = ['tree', 'form', 'view', 'code', 'text'];

class App extends Component {
  state = {
    schema,
    text: JSON.stringify(json, null, 2),
    mode: 'tree'
  };

  render() {
    return (
      <div className="app">
        <div className="contents">
          {/* <div className="mode">
            mode: <select value={this.state.mode} onChange={this.onModeChangeSelect}>
              {
                modes.map(mode => <option key={mode} value={mode}>{mode}</option>)
              }
            </select>
          </div> */}
          <JSONEditorReact
              schema={this.state.schema}
              text={this.state.text}
              mode={modes[3]}
              // modes={modes}
              indentation={4}
              onChangeText={this.onChangeText}
              onModeChange={this.onModeChange}
          />
          <JSONEditorReact
              schema={this.state.schema}
              text={this.state.text}
              mode={modes[0]}
              // modes={modes}
              indentation={4}
              onChangeText={this.onChangeText}
              onModeChange={this.onModeChange}
          />
          {/* <div className="code">
            <pre>
              <code>
                {this.state.text}
              </code>
            </pre>
          </div> */}
        </div>
      </div>
    );
  }

  onChangeText = (text) => {
    this.setState({ text });
  };

  onModeChangeSelect = (event) => {
    this.setState({ mode: event.target.value });
  };

  onModeChange = (mode) => {
    this.setState({ mode });
  };
}

export default App;
