process.env.VUE_APP_SRC = getConfig('--src')
console.log('页面src：' + process.env.VUE_APP_SRC)

const path = require('path')
module.exports =
  process.env.VUE_APP_SRC !== 'false'
    ? {
        configureWebpack: {
          entry: `./${process.env.VUE_APP_SRC}/main.js`,
        },
        chainWebpack: (config) => {
          config.resolve.alias.set(
            '@',
            path.join(__dirname, process.env.VUE_APP_SRC)
          )
        },
      }
    : {}

// 解析指令参数
function getConfig(item) {
  // npm指令需要读取 process.env.npm_config_argv
  const argv = JSON.parse(process.env.npm_config_argv)
  // vue-cli-service指令需要读取 process.argv，我用的是npm
  const argv1 = process.argv

  console.log('process.env.npm_config_argv值', argv)
  console.log('process.argv值', argv1)

  const config = {}
  // 获取自定义参数
  let idx = 2
  const cooked = argv.cooked
  const length = argv.cooked.length
  while ((idx += 2) <= length) {
    config[cooked[idx - 2]] = cooked[idx - 1]
  }
  console.log(config)
  if (config[item]) {
    return config[item]
  }
  return false
}
