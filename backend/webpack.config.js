// Adapted from wesbos NodeJS course

const path = require('path');

const javascript = {
  test: /\.(js)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-async-to-generator'],
      },
    },
  ],
};

const config = {
  entry: {
    App: './public/js/index.js',
    Login: './public/js/login.js',
    Auth: './public/js/auth.js',
    Fav: './public/js/favourites.js',
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
