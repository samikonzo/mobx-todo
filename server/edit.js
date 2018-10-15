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

  // create if not
  // read file
  // return json ?

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
    fs.writeFile('server/todos/todos.json', '{}', err => {
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


module.exports = {
  getTodos
}
