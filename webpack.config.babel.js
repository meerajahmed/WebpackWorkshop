/**
 * Created by mahme4 on 12/22/2017.
 */

/* eslint no-console:"off"*/

const {resolve} = require('path');
const webpackValidator = require('webpack-validator')


module.exports = env => { // env argument of dev and prod
   const config = webpackValidator({
    context: resolve('src'), // absolute path of root dir
    entry: './bootstrap.js', // relative path with in rootdir
    output: {
      path: resolve('dist'), // absolue path of dist folder
      filename: 'bundle.js', // out put file name in dist folder
      publicPath: '/dist/', // path in index.html
      pathinfo: env.prod ? false: true
    },
     devtool: env.prod ? 'source-map' : 'eval',
     modules: {
      loaders: [
        { test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/
        }
      ]
     }
  })
  if ( env.debug ){
     console.log(config);
     debugger // es-lint-disable-line
  }
  return config
}