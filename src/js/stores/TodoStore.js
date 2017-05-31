import { EventEmitter } from 'events'

import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = [
            {
                id: 1,
                text: 'take one',
                complete: false
            },
            {
                id: 2,
                text: 'take two',
                complete: true
            },
        ]
    }

    createTodo(text) {
        const id = Date.now()

        this.todos.push({
            id,
            text,
            complete: false,
        })

        this.emit("change")
    }

    getAll() {
        return this.todos
    }

    handleActions(action) {
        console.log("TodoStore receieved new action:", action)
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text)
            }
            case "RECEIVE_TODOS": {
                // this.receiveTodos(todos)
                this.todos = action.todos
                this.emit("change")
            }
        }
    }
}

const todoStore = new TodoStore
dispatcher.register(todoStore.handleActions.bind(todoStore))

export default todoStore