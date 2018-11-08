// @flow
import consts from './consts'
import http from '../core/http'

const data = [
  {id: 1},
  {id: 2},
  {id: 3}
]


export const getTodos = () => {
  return http.get( consts.getTodos )
             .then( response => response.json())
             .then( json => {

              const data = JSON.parse(json.data)
              const todos = JSON.parse(data.todos)
              return todos
             } )
             .catch( err => console.log(err))
}

export const createTodo = ( todo ) => {
  return http.post( consts.createTodo, JSON.stringify(todo) )
    .then( response =>{
        response.text().then( text => console.log(text))
      })
    .catch( err => console.log(err))
}
