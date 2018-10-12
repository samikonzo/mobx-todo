// @flow
import constants from '../../config/const'
import transportConstants from './consts'

const { apiPrefix } = constants

const data = [
  {id: 1},
  {id: 2},
  {id: 3}
]


export const getTodos = () => {
  const url = apiPrefix + transportConstants.getTodos

  return fetch(url,  {
    method: 'GET'
  }).then( response => {
    console.log('response.status: ', response.status);
    return response
  })
/*
  return new Promise( resolve => {

    const response = {
      hasError: false,
      data: data
    }

    setTimeout(() => {
      resolve(response)
    }, 2000)
  }) */
}
