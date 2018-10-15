// @flow
import consts from './consts'
import http from '../core/http'

const data = [
  {id: 1},
  {id: 2},
  {id: 3}
]


export const getTodos = () => {

  return http.get(consts.getTodos).then( response => {
    return response.json()
  })

}
