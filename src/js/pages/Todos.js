import React from 'react'
// import dispatcher from '../dispatcher'

import Todo from '../components/Todos/Todo'
import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/TodoStore'

export default class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodoStore.getAll(),
            inputValue: '', 
            loading: true
        }

        // this.handleAdd = this.handleAdd.bind(this)
    }

    componentWillMount() {
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
            })
        })
    }

    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    createTodo() {
        var text = this.state.inputValue        
        // TodoStore.createTodo(text)
        // dispatcher.dispatch({ type: "CREATE_TODO", text: text })
        TodoActions.createTodo(text)
    }

    reloadTodos(){
        console.log('reload')
        TodoActions.reloadTodos()
    }

    render() {
        const { todos } = this.state

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })

        return (
            <div>
                <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                <button onClick={this.createTodo.bind(this)} > Add </button>
                <button onClick={this.reloadTodos.bind(this)} > Reload </button>
                <ul>{TodoComponents}</ul>
            </div>
        )
    }
}