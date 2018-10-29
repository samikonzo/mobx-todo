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

  name = React.createRef()
  text = React.createRef()

  createTodo = () => {
    const { name: { current: name }, text: { current: text} } = this
    const { createTodo } = this.props.store

    createTodo({
      name : name.value,
      text : text.value
    })


  }

  render(): React.Node {
    const {todos} = this.props.store

    return (
      <React.Fragment>
        TODO LIST
        <div className="todoCreateWrapper">
          <input type="text" ref={this.name} />
          <textarea ref={this.text} defaultValue=''/>
          <button onClick={this.createTodo}> create </button>
        </div>
        {todos && todos.map(( todo ) => <Todo key={todo.id} {...todo} />)}

      </React.Fragment>
    )
  }
}


export default TodoApp
