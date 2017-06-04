import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'

import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";
import Todos from "./pages/Todos";

const app = document.getElementById('app');
//redux
const reducer = function (state, action) {
    if (action.type === 'INC') {
        return state + action.payload
    }
    if (action.type === 'DEC') {
        return state - action.payload
    }
    return state
}
const store = createStore(reducer, 0)
store.subscribe(() => {
    console.log('store changed', store.getState())
})
store.dispatch({ type: 'INC', payload: 5 })
store.dispatch({ type: 'INC', payload: 10 })
store.dispatch({ type: 'DEC', payload: 20 })

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