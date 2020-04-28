import React, { Component } from 'react'
import AddTodo from './AddTodo'
import FilterTodo from './FilterTodo'
import Todoitem from './TodoItem'

class TodoList extends Component {
    state = {
        todos: []
    }

    //////to get new todo
    getNewTodo = async (addedTodo) => {
        //addedTodo.id = Math.random()
        await this.setState({
            todos: [...this.state.todos, {
                id: Math.random(),
                content: addedTodo,
                completed: false
            }]
        })
        //console.log('the state= ', this.state.todos)
    }

    ///////To strike out a completed todo
    getClickedTodo = (theTodo) => {
        const clickedtodo = this.state.todos.map(item => {
            if (theTodo === item) {
                return {
                    id: theTodo.id,
                    content: theTodo.content,
                    completed: !theTodo.completed
                }
            }
            else
                return item
        })
        this.setState({ todos: clickedtodo })
        // console.log('clicked todo= ', clickedtodo)
        //console.log('clicked state= ', this.state.todos)
    }

    /////////To delete a todo
    deleteTodo = async (delTodo) => {
        const remainingTodo = this.state.todos.filter(element => delTodo !== element)
        await this.setState({ todos: remainingTodo })
        console.log('remainder= ', this.state.todos)
    }

    render() {
        return (
            <div className="todo-list">
                <AddTodo getTodo={this.getNewTodo} />
                {
                    this.state.todos && this.state.todos.map(todo => {
                        //console.log('too ', todo)
                        return (
                            <Todoitem key={todo.id} todo={todo} getClicked={this.getClickedTodo} getDelete={this.deleteTodo} />
                        )
                    })
                }
                <FilterTodo firlterAll={this.firlterAll} filterCompleted={this.filterCompleted} filterInComplete={this.filterInComplete} />
            </div>
        )
    }
}

export default TodoList
