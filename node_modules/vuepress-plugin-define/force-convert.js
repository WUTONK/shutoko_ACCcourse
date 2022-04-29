const _ = require('lodash')

const convert = md => {
  const defaultRender = md.renderer.rules.fence

  md.renderer.rules.fence = (tokens, idx, options, env, renderer) => {
    const token = tokens[idx]

    token.content = _.replace(
      token.content,
      /\<const\sname="(\w+)"\s\/>/g,
      (_matched, name) => {
        const errMsg = `[plugin:define] value of ${name} is not defined in env.`

        return process.env[name] || errMsg
      }
    )

    return defaultRender(tokens, idx, options, env, renderer)
  }
}

module.exports = function(md) {
  md.use(convert)
}
