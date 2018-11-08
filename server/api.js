var edit = require('./edit')
var express = require('express')
var router = express.Router()

router.use(( req, res, next) => {
  console.log('API :');
  console.log('Method : ', req.method)
  console.log('Url : ', req.url)
  next()
})

router.all('/*', (req, res, next) => {
    console.log('ALL ');
    next()
} )

router.get('/todos', (req, res) => {
  console.log('/todos');

  edit.getTodos()
    .then(
      content => {
        console.log('wow content!');
        res.setHeader('Content-Type', 'application/json');
        res.send( { data : content} )
      },
      err => {
        console.log(' oh error');
        res.setHeader('Content-Type', 'application/json');
        res.send( { data: '' , err })
      })
})

router.post('/todos/create', (req, res) => {
  const item = req.body
  const { name , text } = item

 // res.setHeader('Content-Type', 'application/json');

  edit.addNewTodo( item ).then(
    id => res.send( String(id) ),
    err => res.send( err )
  )
})




module.exports = router
