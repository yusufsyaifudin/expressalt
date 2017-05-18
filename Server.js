const debug = require('debug')('Application');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const compression = require('compression');

/**
 * @author Yusuf Syaifudin <yusuf.syaifudin@gmail.com>
 * @description Creates and configures an ExpressJS web server.
 * @class Server
 */
class Server {

  /**
   * @constructor
   * @description Run configuration methods on the Express instance.
   * @param {object} Routes {@link Router}
   * @param {object} Dependency an object to be injected to every req instance.
   * Example: { dependency: {} }
   * You then can access it via `req.dependency`
   */
  constructor(routeCandidate, options = {}) {
    const Options = options.constructor;
    if (Options !== Object) {
      throw new Error(`Options parameter must be an object instead of ${Options}.`);
    }

    this.routeCandidate = routeCandidate;
    this.Express = express();
    this.middleware();

    if (options.dependency !== undefined) {
      if (options.dependency.constructor === Object) {
        this.Express.use((req, res, next) => {
          req.dependency = options.dependency;
          next();
        });
      }
    }

    this.routes();
  }

  /**
   * @description Configure Express middleware.
   */
  middleware() {
    this.Express.use(logger('dev'));
    this.Express.use(compression());
    this.Express.use(bodyParser.json());
    this.Express.use(bodyParser.urlencoded({ extended: false }));
    this.Express.use(express.static('public'));

    const handlebars = exphbs.create({
      defaultLayout: 'main',
      extname: '.html', //set extension to .html so handlebars knows what to look for
    });

    this.Express.engine('html', handlebars.engine);
    this.Express.set('view engine', 'html');
  }

  /**
   * @summary Configure API endpoints.
   * @description
   * This will load all routes just after server starts.
   */
  routes() {
    const Routes = this.routeCandidate;
    for (let i = 0; i < Routes.map().length; i += 1) {
      const route = Routes.map()[i];
      const routePath = `${route.path}`.replace(/\/\/+/g, '/');
      if (route.verb === 'GET') {
        // GET method
        for (let j = 0; j < route.config.middlewares.length; j += 1) {
          this.Express.use(routePath, route.config.middlewares[j]);
        }

        this.Express.get(routePath, route.handler);
      } else if (route.verb === 'HEAD') {
        // HEAD method
        for (let j = 0; j < route.config.middlewares.length; j += 1) {
          this.Express.use(routePath, route.config.middlewares[j]);
        }

        this.Express.head(routePath, route.handler);
      } else if (route.verb === 'POST') {
        // POST method
        for (let j = 0; j < route.config.middlewares.length; j += 1) {
          this.Express.use(routePath, route.config.middlewares[j]);
        }

        this.Express.post(routePath, route.handler);
      } else if (route.verb === 'PUT') {
        // PUT method
        for (let j = 0; j < route.config.middlewares.length; j += 1) {
          this.Express.use(routePath, route.config.middlewares[j]);
        }

        this.Express.put(routePath, route.handler);
      } else if (route.verb === 'PATCH') {
        // PATCH method
        for (let j = 0; j < route.config.middlewares.length; j += 1) {
          this.Express.use(routePath, route.config.middlewares[j]);
        }

        this.Express.patch(routePath, route.handler);
      } else if (route.verb === 'DELETE') {
        // DELETE method
        for (let j = 0; j < route.config.middlewares.length; j += 1) {
          this.Express.use(routePath, route.config.middlewares[j]);
        }

        this.Express.delete(routePath, route.handler);
      } else if (route.verb === 'ALL') {
        // ALL HTTP VERB
        for (let j = 0; j < route.config.middlewares.length; j += 1) {
          this.Express.use(routePath, route.config.middlewares[j]);
        }

        this.Express.all(routePath, route.handler);
      }
    }

    /* eslint-disable no-underscore-dangle */
    debug('*'.repeat(60));
    debug('All registered routes: ');
    this.Express._router.stack.forEach((r) => {
      if (r.route && r.route.path) {
        debug(`${r.route.stack[0].method} ${r.route.path}`);
      }
    });
    debug('*'.repeat(60));
    /* eslint-enable no-underscore-dangle */
  }

}

/**
 * @exports Server
 * @description This use for create new expressjs http instance.
 * @example
 * const Loader = require('./Helpers/Loader').require;
 * const Routes = Loader('app/Http/routes');
 * const App = new Server(Routes).Express;
 */
module.exports = Server;
