// @flow

import * as React from "react"
import { toJS } from "mobx"
import { observer, inject } from "mobx-react"
import Todo from "./Todo"
import { calcClasses } from '../utils/calcClasses'

import type { TodoAppPropsType } from "../_types"
import StoreType from '../Store/RootStore'

import ST from "./styles/app.scss"

type PropsType = TodoAppPropsType

type StateType = {
  newError: boolean
}

@inject("store")
@observer
// @FlowFixMe
class TodoApp extends React.Component<PropsType,StateType> {

  props: {
    ...PropsType,
    store: StoreType
  }

  name = React.createRef()
  text = React.createRef()

  state={
    newError: false
  }

  createTodo = () => {
    const { name: { current: name }, text: { current: text} } = this
    const { createTodo } = this.props.store

    if(!name || !text) return

    if( !name.value || !text.value ){
      this.setState({
        newError: true
      }, () => {
        setTimeout( () => {this.setState({
          newError: false
        })}, 300)
      })

      return
    }

    createTodo({
      name : name.value,
      text : text.value
    })
  }

  render (): React.Node {
    const {todos} = this.props.store
    const { newError } = this.state
    console.log('newError: ', newError);

    const newWrapperClassName = calcClasses({
      'new-wrapper': true,
      'new-wrapper-error': newError
    }, ST)


    return (
      <React.Fragment>
        <div className={ST["header"]}>
          TODO LIST
        </div>

        <div className={newWrapperClassName}>
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
