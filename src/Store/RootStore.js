import { observable, action } from "mobx"
import { getTodos, createTodo } from "../transport"

export default class RootStore{
  @observable todos = []

  constructor(){
    this.init()
  }

  @action
  init = () => {
    getTodos().then(( todos ) => {
      this.todos = todos || []
    })
  }

  @action
  createTodo = ( todo ) => {
    createTodo(todo)
  }

}
