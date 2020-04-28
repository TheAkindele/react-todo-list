import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handlechange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log('added todo= ', this.state.content)
        this.props.getTodo(this.state.content)
        document.getElementById('input').value = ''
    }


    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id='input' onChange={this.handlechange} />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;