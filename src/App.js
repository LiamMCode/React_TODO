import './App.css';
import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Implement the addTodo method', 'Implement the removeTodo method', 'Implement the clearCompletedTodos method', 
    'Implement the removeAllTodos method', 'Implement the showHideCompletedTodso method', 'Implement the toggleTodoCompleteStatus method'], 
      showItems: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  // allows change of state in text box 
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // handles the form submission and adds a todo to the task list
  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements["newTodo"].value;
    if (inputValue === '') {
      alert('Please enter a value into the text field');
    }
    else {
      this.setState({
        todos: this.state.todos.concat(inputValue)
      })
    }
  }

  handleHide() {
    this.setState({
      checked: true
    });
  }
  hideComplete() {
    document.querySelectorAll('input[type=checkbox]').forEach((el) =>  {
      let toHide = el.parentElement.parentElement;
      if (el.checked === true) {
        console.log(toHide);
        this.setState.hidden = true;
        el.checked = false;
      }
      else {
        console.log(el, false);
        this.setState.hidden = false;
      }
    });
  }

  handleShow() {
    this.setState({
      checked: false
    })
  }

  showComplete() {

  }

  removeTodo(event, name) {
    const todos = this.state.todos.filter((name) => {
      return event !== name;
    })
    this.setState({ todos })
  }

  removeAll(name, el) {
    const todos = this.state.todos.filter((name, el) => {
      return false
    })
    this.setState({ todos })
  }


  clearCompleted() {
    const todos = this.state.todos;
    document.querySelectorAll('input[type=checkbox]').forEach((el) =>  {
      let toHide = el.parentElement.parentElement;
      if (el.checked === true) {
        console.log(toHide);
        todos.filter((element) => {
          return false
        });
      }
      else {
        console.log(el, false);
      }
      this.setState({ todos })
    });
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
            <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => {this.hideComplete()}}>
              <span className="visually-hidden">Hide </span>
              <span>Hide Completed</span>
              <span className="visually-hidden"> tasks</span>
            </button>

            <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => {this.handleShow()}}>
              <span className="visually-hidden">Show </span>
              <span>Show Completed</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            
            <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => {this.removeAll(1, this.state.todos.indexOf(1))}}>
              <span className="visually-hidden">Show </span>
              <span>Remove All</span>
              <span className="visually-hidden"> tasks</span>
            </button>

            <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => {this.clearCompleted()}}>
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
                  <input id={this.state.todos.indexOf(todo)} type="checkbox" onChange={this.handleHide}/>
                  <label className="todo-label" htmlFor={this.state.todos.indexOf(todo)}> {todo}</label>
                </div>

                <div className="btn-group">
                  <button type="button" className="btn btn__danger" onClick={() => {this.removeTodo(todo)}}>
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

function App(props) {
  return (
    <Item />
  )
}

export default App;