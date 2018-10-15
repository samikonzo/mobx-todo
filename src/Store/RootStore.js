import { observable, action } from 'mobx'
import { getTodos } from '../transport'

export default class RootStore{
  @observable todos = []

  constructor(){
    this.init()
  }

  @action
  init = () => {
    getTodos().then(( response ) => {
      console.log('response: ', response);

      this.todos = response.data
    })

  }

}
