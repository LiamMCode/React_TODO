import './App.css';
import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Implement the addTodo method', 'Implement the removeTodo method', 'Implement the clearCompletedTodos method', 
    'Implement the removeAllTodos method', 'Implement the showHideCompletedTodso method', 'Implement the toggleTodoCompleteStatus method'], 
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const inputValue = form.elements["newTodo"].value;
    alert('A name was submitted: ' + inputValue);
    this.setState({
      todos: this.state.todos.concat(inputValue)
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="todoapp stack-large">
          <h1>Todo App</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="newTodo" className="input input__lg" name="newTodo" autoComplete="off" value={this.state.value} onChange={this.handleChange}/>
            <button type="submit" className="btn btn__primary btn__lg"> Add </button>
          </form>
          <div className="filters btn-group stack-exception">
            <button type="button" className="btn toggle-btn" aria-pressed="true" onClick={hideCompleted()}>
              <span className="visually-hidden">Show </span>
              <span>Hide Completed</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={removeAll()}>
              <span className="visually-hidden">Show </span>
              <span>Remove All</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={clearCompleted()}>
              <span className="visually-hidden">Show </span>
              <span>Clear Completed</span>
              <span className="visually-hidden"> tasks</span>
            </button>
          </div>
          <h2 id="list-heading"> Tasks </h2>

          <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
            {this.state.todos.map(todo => (
              <li className="todo stack-small" key={this.state.todos.indexOf(todo)}>
                <div className="c-cb">
                  <input id={this.state.todos.indexOf(todo)} type="checkbox" />
                  <label className="todo-label" htmlFor={this.state.todos.indexOf(todo)}> {todo}</label>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn__danger" onClick={removeTodo()}>
                  Delete <span className="visually-hidden">{todo}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

function removeTodo() {
  // remove from array and re-render
}

function clearCompleted() {

}

function removeAll() {
  // remove all and re-render
}

function hideCompleted() {
  //have this button change text when completed todos hidden 
}

function App(props) {
  return (
    <Item />
  )
}

export default App;