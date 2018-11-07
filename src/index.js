import * as React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './View/App'
import { Provider } from 'mobx-react';
import RootStore from './Store/RootStore'

import './styles.scss'

const Store = new RootStore()

const appContainer = document.getElementById('app')


ReactDOM.render(
  <Provider store={Store}>
    <TodoApp />
  </Provider>
,  appContainer)
