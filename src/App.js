import './App.css';

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>Todo App</h1>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>Hide Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Remove All</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Clear Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        Tasks
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
            Implement the addTodo method
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Implement the addTodo method</span>
            </button>
          </div>
        </li>

        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
            Implement the removeTodo method
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Implement the removeTodo method</span>
            </button>
          </div>
        </li>

        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
            Implement the clearCompletedTodos method
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Implement the clearCompletedTodos method</span>
            </button>
          </div>
        </li>

        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-3" type="checkbox" />
            <label className="todo-label" htmlFor="todo-3">
            Implement the removeAllTodos method
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Implement the removeAllTodos method</span>
            </button>
          </div>
        </li>

        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-4" type="checkbox" />
            <label className="todo-label" htmlFor="todo-4">
            Implement the showHideCompletedTodos method
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Implement the showHideCompletedTodos method</span>
            </button>
          </div>
        </li>

        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-5" type="checkbox" />
            <label className="todo-label" htmlFor="todo-5">
            Implement the toggleTodoCompleteStatus method
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Implement the toggleTodoCompleteStatus method</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default App;