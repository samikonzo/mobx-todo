// @flow

import * as React from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import Todo from './Todo'

import type { TodoAppPropsType } from '../_types'

type PropsType = TodoAppPropsType

@inject('store')
@observer
class TodoApp extends React.Component<PropsType> {

  render(): React.Node {

    const {todos} = this.props.store

    return (
      <React.Fragment>
        {todos && todos.map(( todo ) => <Todo key={todo.id} {...todo} />)}
      </React.Fragment>
    )
  }
}


export default TodoApp
