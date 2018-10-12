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








module.exports = router
