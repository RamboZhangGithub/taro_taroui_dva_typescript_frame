let path = require("path")


const config = {
  projectName: 'spoken',
  date: '2020-9-9',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  alias: {
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@pages': path.resolve(__dirname, '..', 'src/pages'),
    '@models': path.resolve(__dirname, '..', 'src/models'),
    '@static': path.resolve(__dirname, '..', 'src/static'),
    '@service': path.resolve(__dirname, '..', 'src/service'),
    '@/types': path.resolve(__dirname, '..', 'src/@types'),
  },
  copy: {
    patterns: [
      { from: 'src/static/images/', to: `dist/${process.env.TARO_ENV}/static/images/` }
    ],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },

  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    devServer: {
      port: 8090,
      useLocalIp: false
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // 配置sass
  sass: {
    resource: path.resolve(__dirname, '..', 'src/static/css/variable.scss')
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
