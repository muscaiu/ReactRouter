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
        this.getTodos = this.getTodos.bind(this)

        // this.handleAdd = this.handleAdd.bind(this)
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos)
        console.log("count", TodoStore.listenerCount("change"))
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos)
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
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

    reloadTodos() {
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