import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    title: '',
    description: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      title: this.state.title,
      description: this.state.description,
    };
    this.setState((previousState) => {
      return {
        todos: [...previousState.todos, todo],
        title: '',
        description: '',
      };
    });
  };

  render() {
    return (
      <div className='main'>
        <div className='form'>
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            className='todo-form'
          >
            <div className='form-group'>
              <div>
                <label htmlFor='name'>Title</label>
              </div>
              <div>
                <input
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.title}
                  name='title'
                  className='form-input'
                />
              </div>
            </div>
            <div className='form-group'>
              <div>
                <label htmlFor='description'>Description</label>
              </div>
              <div>
                <input
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.description}
                  name='description'
                  className='form-input'
                />
              </div>
            </div>
            <button type='submit'>SAVE</button>
          </form>
        </div>
        <div className='container'>
          <div className='todos'>
            {this.state.todos.map((item, index) => {
              return (
                <div className="todo" key={index}>
                  <h4>TITLE: {item.title}</h4>
                  <p>DESCRIPTION: {item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
