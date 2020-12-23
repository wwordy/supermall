module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
      }
    }
  },
  devServer: {
    host:'0.0.0.0',
    hot: true,
    disableHostCheck: true
  }
}
