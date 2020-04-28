import React, { Component } from 'react'

class Todoitem extends Component {

    // To strike a todo
    toggleTodo = () => {
        this.props.getClicked(this.props.todo)
        //console.log('the clicked= ', this.props.todo)
    }

    todoDelete = () => {
        this.props.getDelete(this.props.todo)
    }

    render() {
        const { todo } = this.props
        //console.log('todoItem= ', todo)
        return (
            <div className="todo-item">
                <div className={'todo' + (todo.completed ? ' strike' : '')} onClick={this.toggleTodo}> {todo.content}</div>
                <button className='delete' id='btn' onClick={this.todoDelete}>Delete</button>
            </div>
        );
    }

}

export default Todoitem;