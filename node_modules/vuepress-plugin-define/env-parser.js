const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

const userEnvConfig = dotenv.config()

dotenvExpand(userEnvConfig)

const parseEnvFileList = envList => {
  const fileList = ['.env', '.env.local']

  _.forEach(envList, item => {
    fileList.push(`.env.${item}`)
    fileList.push(`.env.${item}.local`)
  })

  return fileList
}

exports.parse = function parse(cwd, envList) {
  const fileList = parseEnvFileList(envList)

  const configs = _.map(
    _.filter(
      _.map(fileList, item => {
        const filePath = path.resolve(cwd, item)

        let content = ''

        try {
          content = fs.readFileSync(filePath)
        } catch (err) {}

        return content
      }),
      item => item.length
    ),
    item => {
      return dotenv.parse(item)
    }
  )

  const mergedConfigs = _.assign({}, ...configs)

  _.forEach(_.keys(mergedConfigs), item => {
    process.env[item] = mergedConfigs[item]
  })
}
