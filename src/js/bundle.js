import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'

import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";
import Todos from "./pages/Todos";

const app = document.getElementById('app');



//redux
const reducer = function (inistalState = 0, action) {
    if (action.type === 'INC') {
        return inistalState + action.payload
    } else if (action.type === 'DEC') {
        return inistalState - action.payload
    }else if (action.type === 'ERR'){
        throw new Error("EOOROROROOR!!!")
    }
    return inistalState
}
const logger = (store) => (next) => (action) => {
    console.log('action fired', action)
    action.type = 'DEC'
    next(action)
}
const error = (store) => (next) => (action) => {
    try {
        next(action)
    } catch (e) {
        console.log(e)
    }
}
const middleware = applyMiddleware(logger, error)
const store = createStore(reducer, 0, middleware)
store.subscribe(() => {
    console.log('store changed', store.getState())
})
store.dispatch({ type: 'INC', payload: 5 })
store.dispatch({ type: 'INC', payload: 10 })
store.dispatch({ type: 'DEC', payload: 20 })
store.dispatch({ type: 'ERR' })




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