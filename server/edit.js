const fs = require('fs')

const getTodos = () => {
  return new Promise( (resolve, reject) => {
    checkFileExist()
      .then(
        () => {
          console.log('file exist ')
          return Promise.resolve()
        },
        () => {
          console.log('file not exist ')
          return createFile()
        }
      )
      .then(
        () => {
          return readFile()
        },
        (err) => {
          console.log('err: ', err);
        }
      )
      .then(
        contents => {
          console.log('ok')
          resolve(contents)
        },
        err =>{
          console.log('fail')
          reject(err)
        }
      )

  })
}


const addNewTodo = ( todo ) => {
  return readFile()
    .then( data => {
      console.log('1. data: ', data);
      return JSON.parse(data)}
    )
    .then( data => {
      console.log('2. data: ', data);
      if( typeof data.todos === 'object' ) return data.todos
      else return JSON.parse(data.todos)
    })
    .then( todos => {
      console.log('3. todos: ', todos);
      const id = todos.length
      todos.push( {
        ...todo,
        id
      } )
      return writeFile( JSON.stringify({todos}) ).then(() => { return id})
    })
    .catch( err => console.log(err))


}











const checkFileExist = ( ) => {
  return new Promise(( resolve, reject) => {
    fs.exists('server/todos/todos.json', exists => {
      if(exists) resolve()
      else reject()
    })
  })
}

const createFile = ( ) => {
  return new Promise( (resolve, reject) => {
    fs.writeFile('server/todos/todos.json', '{"todos" : "[]"}', err => {
      if(err ) reject(err)
      else resolve()
    })
  })
}

const readFile = ( ) => {
  return new Promise( (resolve, reject) => {
    fs.readFile('server/todos/todos.json', 'utf8' ,(err, contents) => {
      if (err ) reject(err)
      else resolve( contents )
    })
  })
}

const writeFile = ( newData ) => {
  return new Promise( (resolve, reject) => {
    fs.writeFile('server/todos/todos.json', newData, 'utf-8', function (err) {
      if (err) reject(err);
      resolve()
    });
  })
}


module.exports = {
  getTodos,
  addNewTodo,
}
