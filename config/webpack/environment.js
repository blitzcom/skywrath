const { cache_path } = require('@rails/webpacker/package/config');
const { join } = require('path')
const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// CoffeeScript 2 support
const coffeeLoader = environment.loaders.get('coffee')

delete coffeeLoader.loader

coffeeLoader.use = [
  {
    loader: 'babel-loader',
    options: {
      cacheDirectory: join(cache_path, 'babel-loader')
    }
  },
  {
    loader: 'coffee-loader',
  }
]

module.exports = environment