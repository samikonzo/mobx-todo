// @flow

import * as React from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import Todo from './Todo'

import type { TodoAppPropsType } from '../_types'

import ST from './styles/app.scss'

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
    console.log('todos: ', todos.slice());

    return (
      <React.Fragment>
        <div className={ST["header"]}>
          TODO LIST
        </div>

        <div className={ST["new-wrapper"]}>
          <input type="text" ref={this.name} className={ST["new-name"]} placeholder='new todo name'/>

          <textarea ref={this.text} defaultValue='' placeholder='new todo text...' className={ST["new-text"]}/>

          <button onClick={this.createTodo} className={ST["new-confirm"]}> create </button>
        </div>

        <div className={ST["list"]}>
          {todos && todos.map(( todo ) => <Todo key={todo.id} {...todo} />)}
        </div>
      </React.Fragment>
    )
  }
}


export default TodoApp
