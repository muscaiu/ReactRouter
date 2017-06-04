import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { combineReducers, createStore } from 'redux'

import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";
import Todos from "./pages/Todos";

const app = document.getElementById('app');
//redux
const userReducer = (state = { name: 'Dick', age: 25 }, action) => { //default values in {}
    switch (action.type) {
        case "CHANGE_NAME": {
            state = { ...state, name: action.payload }
            break
        }
        case "CHANGE_AGE": {
            state = { ...state, age: action.payload }
            break
        }
    }
    return state
}
const tweetsReducer = (state = [], action) => {//default values in {}
    return state
}
const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})
const store = createStore(reducers)
store.subscribe(() => {
    console.log('store changed', store.getState())
})
store.dispatch({ type: 'CHANGE_NAME', payload: 'Cris' })
store.dispatch({ type: 'CHANGE_AGE', payload: 37 })

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