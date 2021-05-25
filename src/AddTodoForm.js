import React from 'react';
import './AddTodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTodo(this.state);
    }
    
    render() {
        return <form onSubmit= {this.handleSubmit}>
            <div className='AddTodoForm__input'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' value={this.state.name} onChange={this.onFieldChange}></input>
            </div>
            <input type='submit' value='Add' />
        </form>
    }
}

function AddTodoForm ({match, onAddTodo}) {
    return <div className='AddTodoForm'>
        <h1> Add Author</h1>
        <TodoForm onAddTodo={onAddTodo}></TodoForm>
    </div>
  }

  export default AddTodoForm;