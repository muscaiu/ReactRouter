import React from 'react'

import Todo from '../components/Todos/Todo'
import TodoStore from '../stores/TodoStore'

export default class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    render() {
        const { todos } = this.state

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })

        return (
            <div>
                Todos
                <ul>{TodoComponents}</ul>
            </div>
        )
    }
}