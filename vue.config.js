const path = require('path');
module.exports = {
  // 基本路径
  //process.env.NODE_ENV 在开发环境和生产环境中会自动的变化
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  //webpack中的module的基础配置
  chainWebpack: (config) => {
    //配置svg文件的规则
    const svgRule = config.module.rule("svg");     
    svgRule.uses.clear();     
    svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({ 
      symbolId: "icon-[name]",
      include: ["./src/icons"] 
    });
    //配置vue文件的规则
    config.module
        .rule("vue")
        .use("vue-loader")
        .loader("vue-loader")
        .tap(options => {
          options.compilerOptions.whitespace = 'preserve'; //保留vue中的空格，这样在使用elementui中的布局时就可以用空格占位了
          return options;
        })
        .end();
  },
  configureWebpack: (config) => {
    config.resolve = {
      // 后缀名简写 
      extensions: ['.js', '.json', '.vue'],
      // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components'),
        'views': path.resolve(__dirname, './src/views'),
        'network': path.resolve(__dirname, './src/network'),
        'vue': 'vue/dist/vue.js'//这个是从node_modules中找的
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: { 
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    // proxy:{
    //   "/devApi": { //这个路径会替换下面的target路径
    //       target: "http://www.web-jshtml.cn/productapi/token", //API服务器的地址
    //       changeOrigin: true,
    //       pathRewrite: {
    //           "^/devApi": ''
    //       }
    //   }
    // }, 
    overlay: { // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {
    }
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}
