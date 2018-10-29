// @flow
import constants from '../../config/const'
const { apiPrefix } = constants

const generateUrl = ( url ) => {
  return apiPrefix + url
}


const get = ( url ) => {
  return fetch( generateUrl(url) ,{
    method: 'GET'
  })
}

const post = ( url, payload ) => {
  return fetch( generateUrl(url), {
    method: 'POST',
    body: payload
  })
}


export default {
  get,
  post
}
