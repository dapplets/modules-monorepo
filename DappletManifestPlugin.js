const fs = require('fs')
const { RawSource } = require('webpack').sources

/**
 * This plugin generates dapplet.json file with list of dapplets and adapters
 * located in ./dapplets and ./adapters folders. So you don't need to add
 * new test dapplets to dapplet.json manually. The file is generated in memory
 * and is not written to disk.
 */
class DappletManifestPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapPromise('CreateFilePlugin', async (compilation) => {
      const dapplets = fs.readdirSync('./packages/dapplets').map((x) => `./packages/dapplets/${x}/dapplet.json`)
      const adapters = fs.readdirSync('./packages/adapters').map((x) => `./packages/adapters/${x}/dapplet.json`)
      const modules = [...dapplets, ...adapters]
      compilation.emitAsset('dapplet.json', new RawSource(JSON.stringify(modules, null, 2)))
    })
  }
}

exports.DappletManifestPlugin = DappletManifestPlugin
