//this config will tell Webpack to start bundling our app at index.js.

const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
  // Tell webpack to start bundling our app at app/index.js
  entry: './app',
  // Output our app to the dist/ directory
  output: {
    filename: 'public/build/bundle.js'
  },
  // Emit source maps so we can debug our code in the browser
  devtool: 'source-map',
  // Tell webpack to run our source code through Babel

  //module.loaders tells webpack that if it comes across any files with extension .js, it should run through Babel.

  //module.loaders.exclude tells webpack that it should ignore files in the node_modules directory, processing these files will take eternity, so it is not 
  //necessary because most authors pre-compile their libraries. 
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.   
  plugins: [
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    // Check out https://github.com/jantimon/html-webpack-plugin
    // for the full list of options.
    new HtmlPlugin({
      template: 'app/index.html'
    })
  ]
}