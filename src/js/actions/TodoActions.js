import dispatcher from '../dispatcher'

export function createTodo(text) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text,
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id,
    })
}

export function reloadTodos() {
    // request("http://...").then((data) =>{
    //     console.log('got data:', data)
    // })

    dispatcher.dispatch({ type: "FETCH_TODOS" })
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS", todos :[
            {
                id: 3,
                text: 'take three',
                complete: true
            },
            {
                id: 4,
                text: 'take four',
                complete: true
            },
        ]})
    }, 1000)
}