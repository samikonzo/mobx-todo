// @flow

const data = [
  {id: 1},
  {id: 2},
  {id: 3}
]


export const getTodos = () => {
  return new Promise( resolve => {

    const response = {
      hasError: false,
      data: data
    }

    setTimeout(() => {
      resolve(response)
    }, 2000)
  })
}
