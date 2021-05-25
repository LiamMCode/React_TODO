import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddTodoForm from './AddTodoForm';
import TodoLayout from './todoLayout';
import {shuffle, sample} from 'underscore';
import { BrowserRouter, Route, withRouter} from 'react-router-dom';

const todos = [
  {
    name: 'Implement the addTodo method',
  }, 
  {
    name: 'Implement the removeTodo method',
  }, 
  {
    name: 'Implement the clearCompletedTodos method',
  },
  {
    name: 'Implement the removeAllTodos method', 
  }, 
  {
    name: 'Implement the showHideCompletedTodos method', 
  }, 
  {
    name: 'Implement the toggleTodoCompleteStatus method',
  }
]

const TodoWrapper = withRouter(({ history }) => 
  <AddTodoForm onAddTodo={(todos) => {
    todos.push(todos);
    history.push('/');
  }} />
);

let state = resetState();

function resetState() {
  return {
    todoList: getTodoList(todos)
  };
}

function getTodoList(todos) {
  const allTodos = todos.reduce(function (p,c,i) {
    return p.concat(c.name);
  }, []);

  return {
    name: allTodos
  }
}

function App() {
  return <TodoLayout {...state} 
    onContinue={() => {
      state = resetState();
      render();
  }} />;
}

function render() {
  ReactDOM.render(<BrowserRouter>
    <React.Fragment>
      <Route exact path='/' component={App} /> 
      <Route path='/add' component={TodoWrapper} />
    </React.Fragment>
    </BrowserRouter>, document.getElementById('root')
  );
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
