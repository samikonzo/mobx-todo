const express = require('express')
const apiRequest = require('./api.js')

const app = express()

app.all( '/*' , (req, res, next) => {
  console.log('url : ', req.url);
  console.log('method : ', req.method);
  console.log(' ');
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRequest )


app.listen(3000, () => {
  console.log(' server listening :3000')
})
