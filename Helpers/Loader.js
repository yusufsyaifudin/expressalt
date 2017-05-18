/* eslint import/no-dynamic-require: ["off"] */
/* eslint global-require: ["off"] */

const path = require('path');
const debug = require('debug')('Application');

const PROVIDERS = {
};


/**
 * @author Yusuf Syaifudin <yusuf.syaifudin@gmail.com>
 * @description Loader module helper for easy load when in structured application.
 * @class Loader
 */
class Loader {

  /**
   * @static @function require
   * @description It will load module in predefined provider or
   * will load from application or config directory. Otherwise,
   * it will load from node_module directory.
   *
   * @param {string} namespace Namespace of file will be loaded.
   *
   * @example Loader.require('app/Http/Controller/HomeController');
   * @example Loader.require('app/Http/Middleware/HomeMiddleware');
   * @example Loader.require('app/...and so on...');
   *
   *  @example Loader.require('config/database');
   *  @example Loader.require('config/...and so on...');
   *
   * @returns Function or object from file to be loaded.
   */
  static require(namespace) {
    if (Object.prototype.hasOwnProperty.call(PROVIDERS, namespace)) {
      const requirePath = path.join(`${__dirname}/${PROVIDERS[namespace]}`);
      return require(requirePath);
    } else if (namespace.match(/(app|config)\/[a-zA-Z0-9_/.]+$/)) {
      // const requirePath = path.join(`${__dirname}./../../${namespace}`);
      const requirePath = path.join(`${__dirname}./../../../${namespace}`);
      debug(`Loading file: ${requirePath}`);
      return require(requirePath);
    }

    return require(namespace);
  }
}


/**
 * @exports Loader
 * @description This for load package easier.
 * @example
 * const Loader = require('./Helpers/Loader').require;
 * const Routes = Loader('app/Http/routes');
 */
module.exports = Loader;
