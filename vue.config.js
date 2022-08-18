const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const ElementPlus = require('unplugin-element-plus/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    // }
  },
  css: {
    loaderOptions: {
      // scss: {
      //   // TODO 暂时不可用
      //   additionalData: `@use "./src/styles/element/index.scss" as *;`,
      // },
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({
        useSource: true,
      }),
    ],
  },
};
