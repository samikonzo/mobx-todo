// @flow

import * as React from "react"
import ST from "./styles/todo.scss"

type PropsType = {
  id: number,
  name: string,
  ready: boolean,
  text: string
}

type StateType = {}

export default class Todo extends React.Component<PropsType, StateType> {

  state={}

  render (): React.Node {
    const { id, name, ready, text } = this.props
    console.log("this.props: ", this.props)

    return (
      <React.Fragment>
        <div className={ST.wrapper}>
          <div className={ST.header}>
            <span className={ST.id}> {id} </span>
            <span className={ST.name}> {name} </span>
          </div>

          <div className={ST.content}>{text}</div>

        </div>
      </React.Fragment>
    )
  }
}
