const path = require('path');

const javascript = {
  test: /\.(js)$/, // see how we match anything that ends in `.js`? Cool
  use: [
    {
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env'] }, // this is one way of passing options
    },
  ],
};

const config = {
  entry: {
    App: './public/js/index.js',
    Login: './public/js/login.js',
  },
  watchOptions: {
    ignored: '/node_modules/',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [javascript],
  },
  mode: 'none',
};

module.exports = config;
