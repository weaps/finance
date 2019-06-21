const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  pages: {
    index: {
      entry: ['./src/utility/viewport.js', './src/main.js']
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    open: 'true',
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        ws: true, // 是否启用websockets
        changeOrigin: true
      }
    }
  }
}