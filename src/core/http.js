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


export default {
  get
}
