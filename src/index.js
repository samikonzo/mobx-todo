import * as React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/App'
import TodoStore from './stores/TodoStore'
import ViewStore from './stores/ViewStore'

const initialState = {}
const todoStore = []
const viewStore = {}


/* const todoStore = TodoStore.fromJS( initialState.todos || [])
const viewStore = new ViewStore()

todoStore.subscribeServerToStore() */

const appContainer = document.getElementById('app')



ReactDOM.render( <TodoApp todoStore={todoStore} ViewStore={ViewStore}/>,  appContainer)
