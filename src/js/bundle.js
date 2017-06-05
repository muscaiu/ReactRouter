import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'

import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";
import Todos from "./pages/Todos";

const app = document.getElementById('app');



//redux
const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_START': {
            return { ...state, fetching: true }
            break
        }
        case 'FETCH_USERS_ERROR': {
            return { ...state, fetching: false, error: action.payload }
            break
        }
        case 'RECEIVE_USERS': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload
            }
            break
        }
    }
    return state
}

const middleware = applyMiddleware(thunk, createLogger)
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_USERS_START' })
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            dispatch({ type: 'RECEIVE_USERS', payload: response.data })
        })
        .catch((err) => {
            dispatch({ type: "FETCH_USERS_ERROR", payload: err })
        })
})




ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives(/:article)" name="archives" component={Archives}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
            <Route path="todos" name="todos" component={Todos}></Route>
        </Route>
    </Router>,
    app);