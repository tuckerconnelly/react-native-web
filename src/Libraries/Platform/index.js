import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'

function select(platformCode) {
  if (typeof platformCode.web === 'function') return platformCode.web()

  return platformCode.web
}

const Platform = {
  OS: 'web',
  userAgent: canUseDOM ? window.navigator.userAgent : '',
  select,
}

module.exports = Platform
