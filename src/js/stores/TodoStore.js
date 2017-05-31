import { EventEmitter } from 'events'

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

    getAll(){
        return this.todos
    }
}

const todoStore = new TodoStore

export default todoStore