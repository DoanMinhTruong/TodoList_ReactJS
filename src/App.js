import React, { Component } from 'react'

import TodoList from './components/TodoList';


class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="main">
        <div className="brand">TODOLIST - EZSKEY</div>
        <TodoList>
        </TodoList>
      </div>
    );
  }
}
export default App;
