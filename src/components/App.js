// @flow

import * as React from 'react'
import { observer } from 'mobx-react'
import type { TodoAppPropsType } from '../_types'

type PropsType = TodoAppPropsType

@observer
class TodoApp extends React.Component<PropsType> {
  render(): React.Node {

    const

    return (
      <React.Fragment>
        app
      </React.Fragment>
    )
  }
}


export default TodoApp
