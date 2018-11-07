const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

const webpack = require('webpack')
const wds = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.js')


gulp.task('server', (cb) => {
  let started = false

  return nodemon({
      script: 'server/index.js'
    })
    .once('start', cb)
})

gulp.task('wds', (cb) => {
  const config = webpack( webpackConfig )

  return new wds(config)
})

gulp.task('default', ['wds', 'server'], () => {})
