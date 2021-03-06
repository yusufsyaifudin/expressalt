const Loader = require('./Helpers/Loader').require;
const { List } = require('immutable');

/**
 * @author Yusuf Syaifudin <yusuf.syaifudin@gmail.com>
 *
 * @class Router
 * Router Class
 */
class Router {

  /**
    * @constructor
    * @param {string} prefix A prefix of route(s)
    */
  constructor(prefix = '') {
    this.prefix = prefix;
    this.routes = [];
    // For saving config to all descendant like `Router.group` to `Router.get`, etc
    this.config = List();
  }

  /**
    * @function get
    *
    * @see Router.routeRegister
    *
    * @param {string} uri - URI path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function|string} handler - Handler function callback for this request,
    * takes 2 or 3 arguments from express handler function (request, response, next)
    *
    * @example Router.get('/', 'Controller.index');
    * @example Router.get('/', (req, res, next) => { res.json({}) });
    * @example Router.get('/', { middleware: ['MiddlewareClass'] }, 'Controller.index');
    * @example
    * Router.get('/', { middleware: ['MiddlewareClass'] }, (req, res, next) => {
    *   res.json({})
    * });
    *
    * @example
    * Router.get('/', { middleware: [(req, res, next) {
    *   next();
    * }] }, (req, res, next) => { res.json({}) });
    *
    */
  get(uri, param2, param3) {
    const getVerb = Router.routeRegister('GET', this.prefix + uri, param2, param3, this.config);
    this.routes.push(getVerb);
  }

  /**
    * @function head
    *
    * @see Router.routeRegister
    *
    * @param {string} uri - URI path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function|string} handler - Handler function callback for this request,
    * takes 2 or 3 arguments from express handler function (request, response, next)
    *
    * @example Router.head('/', 'Controller.index');
    * @example Router.head('/', (req, res, next) => { res.json({}) });
    * @example Router.head('/', { middleware: ['MiddlewareClass'] }, 'Controller.index');
    * @example
    * Router.head('/', { middleware: ['MiddlewareClass'] }, (req, res, next) => {
    *   res.json({})
    * });
    *
    * @example
    * Router.head('/', { middleware: [(req, res, next) {
    *   next();
    * }] }, (req, res, next) => { res.json({}) });
    *
    */
  head(uri, param2, param3) {
    const headVerb = Router.routeRegister('HEAD', this.prefix + uri, param2, param3, this.config);
    this.routes.push(headVerb);
  }

  /**
    * @function post
    *
    * @see Router.routeRegister
    *
    * @param {string} uri - URI path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function|string} handler - Handler function callback for this request,
    * takes 2 or 3 arguments from express handler function (request, response, next)
    *
    * @example Router.post('/', 'Controller.index');
    * @example Router.post('/', (req, res, next) => { res.json({}) });
    * @example Router.post('/', { middleware: ['MiddlewareClass'] }, 'Controller.index');
    * @example
    * Router.post('/', { middleware: ['MiddlewareClass'] }, (req, res, next) => {
    *   res.json({})
    * });
    *
    * @example
    * Router.post('/', { middleware: [(req, res, next) {
    *   next();
    * }] }, (req, res, next) => { res.json({}) });
    *
    */
  post(uri, param2, param3) {
    const postVerb = Router.routeRegister('POST', this.prefix + uri, param2, param3, this.config);
    this.routes.push(postVerb);
  }

  /**
    * @function put
    *
    * @see Router.routeRegister
    *
    * @param {string} uri - URI path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function|string} handler - Handler function callback for this request,
    * takes 2 or 3 arguments from express handler function (request, response, next)
    *
    * @example Router.put('/', 'Controller.index');
    * @example Router.put('/', (req, res, next) => { res.json({}) });
    * @example Router.put('/', { middleware: ['MiddlewareClass'] }, 'Controller.index');
    * @example
    * Router.put('/', { middleware: ['MiddlewareClass'] }, (req, res, next) => {
    *   res.json({})
    * });
    *
    * @example
    * Router.put('/', { middleware: [(req, res, next) {
    *   next();
    * }] }, (req, res, next) => { res.json({}) });
    *
    */
  put(uri, param2, param3) {
    const putVerb = Router.routeRegister('PUT', this.prefix + uri, param2, param3, this.config);
    this.routes.push(putVerb);
  }

  /**
    * @function patch
    *
    * @see Router.routeRegister
    *
    * @param {string} uri - URI path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function|string} handler - Handler function callback for this request,
    * takes 2 or 3 arguments from express handler function (request, response, next)
    *
    * @example Router.patch('/', 'Controller.index');
    * @example Router.patch('/', (req, res, next) => { res.json({}) });
    * @example Router.patch('/', { middleware: ['MiddlewareClass'] }, 'Controller.index');
    * @example
    * Router.patch('/', { middleware: ['MiddlewareClass'] }, (req, res, next) => {
    *   res.json({})
    * });
    *
    * @example
    * Router.patch('/', { middleware: [(req, res, next) {
    *   next();
    * }] }, (req, res, next) => { res.json({}) });
    *
    */
  patch(uri, param2, param3) {
    const patchVerb = this.routeRegister('PATCH', this.prefix + uri, param2, param3, this.config);
    this.routes.push(patchVerb);
  }

  /**
    * @function delete
    *
    * @see Router.routeRegister
    *
    * @param {string} prefix - Prefix path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function|string} handler - Handler function callback for this request,
    * takes 2 or 3 arguments from express handler function (request, response, next)
    *
    * @example Router.delete('/', 'Controller.index');
    * @example Router.delete('/', (req, res, next) => { res.json({}) });
    * @example Router.delete('/', { middleware: ['MiddlewareClass'] }, 'Controller.index');
    * @example
    * Router.delete('/', { middleware: ['MiddlewareClass'] }, (req, res, next) => {
    *   res.json({})
    * });
    *
    * @example
    * Router.delete('/', { middleware: [(req, res, next) {
    *   next();
    * }] }, (req, res, next) => { res.json({}) });
    *
    */
  delete(uri, param2, param3) {
    const deleteVerb = Router.routeRegister('DELETE', this.prefix + uri, param2, param3, this.config);
    this.routes.push(deleteVerb);
  }

  /**
    * @function all
    *
    * @see Router.routeRegister
    *
    * @param {string} prefix - URI path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function|string} handler - Handler function callback for this request,
    * takes 2 or 3 arguments from express handler function (request, response, next)
    *
    * @example Router.all('/', 'Controller.index');
    * @example Router.all('/', (req, res, next) => { res.json({}) });
    * @example Router.all('/', { middleware: ['MiddlewareClass'] }, 'Controller.index');
    * @example
    * Router.all('/', { middleware: ['MiddlewareClass'] }, (req, res, next) => {
    *   res.json({})
    * });
    *
    * @example
    * Router.all('/', { middleware: [(req, res, next) {
    *   next();
    * }] }, (req, res, next) => { res.json({}) });
    *
    */
  all(uri, param2, param3) {
    const allVerb = Router.routeRegister('ALL', this.prefix + uri, param2, param3, this.config);
    this.routes.push(allVerb);
  }

  /**
    * @function group
    * @description Grouping route with same prefix and middleware inside callback function.
    *
    * @param {string} prefix - URI path of the request
    * @param {object|string} config - Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {function} callback - Callback function for grouping routes within
    * same prefix and middlewares.
    *
    * @example Router.group('/', '');
    *
    * @example
    * Router.group('/', () => { Router.get(...); Router.post(...); });
    *
    * @example
    * Router.group('/', {}, () => { Router.get(...); Router.post(...); });
    */
  group(prefix, config, callback = null) {
    // save previous prefix, it useful to keep in track previous prefix
    // when user must call Router.group recursively
    // This is safe, since String in javascript are immutable
    // refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values
    const previousPrefix = this.prefix;
    this.prefix = this.prefix + prefix;

    // Save config, it useful when nested group,
    // so all descendant route will be has same config
    // JavaScript Object or Array is mutable, so instead using native JS Array,
    // we must using Immutable.js
    const previousConfig = List(this.config);
    const mergedConfig = previousConfig.push(config);
    this.config = mergedConfig;

    const secondArgument = config.constructor;
    let thirdArgument = null;
    if (callback !== null) {
      thirdArgument = callback.constructor;
    }

    if (secondArgument === Function) {
      config(this);
    } else if (secondArgument === Object && thirdArgument === Function) {
      callback(this);
    } else {
      throw new Error(`Second argument must either Object or Function, given ${secondArgument}.`);
    }

    this.prefix = previousPrefix;
    this.config = previousConfig;
  }

  /**
    * @function resource
    * @summary Register route resources.
    * @description Will register some predefined route with ease.
    * `GET / => index => list of resource`
    * `GET /:id => show => get resource by id`
    * `GET /create => create => view for add resource`
    * `POST / => store => add resource`
    * `GET /:id/edit => edit => view for edit resource`
    * `PATCH /:id => update => update resource`
    * `DELETE /:id => destroy => delete resource`
    *
    * @param {string} uri - URI path of the request
    * @param {object|string} config - (optional) Object of the config, must be `middleware` or `as`
    * another params will not take effects. Or, as an alternative you can pass an handler function
    * or class name. See {@link Router.configFunctionLoader}.
    * @param {string} handler - (optional) Controller class name for handling this route.
    * @param {string} callback - (optional) Callback for adding extra route
    * within this group of resource.
    *
    * @example Router.resource('/', 'HomeController');
    * @example Router.resource('/', {}, 'HomeController');
    * @example Router.resource('/', 'HomeController', () => { Router.get(...); });
    * @example Router.resource('/', {}, 'HomeController', () => { Router.get(...); });
    *
    */
  resource(prefix, config, handler = null, callback = null) {
    // Save previous prefix and config
    const previousPrefix = this.prefix;
    this.prefix = this.prefix + prefix;

    const previousConfig = List(this.config);

    const secondArgument = config.constructor;
    let thirdArgument = null;

    if (handler !== null) {
      thirdArgument = handler.constructor;
    }

    if (secondArgument === String) {
      // second argument is a controller class name
      // Now, load the function
      // config is a controller string name,
      // then this.config is still List of configuration.
      const route = Router.parseResourceController(this.prefix, this.config, config);

      // Register all available route in resource controller.
      for (let i = 0; i < route.length; i += 1) {
        this.routes.push(route[i]);
      }

      if (thirdArgument === Function) {
        handler(this);
      }
    } else if (secondArgument === Object && thirdArgument === String) {
      // third argument is a controller class name
      // load thirdArgument and assign secondArgument as a config
      // merge config
      const mergedConfig = previousConfig.push(config);
      this.config = mergedConfig;

      const route = Router.parseResourceController(this.prefix, this.config, handler);

      // Register all available route in resource controller.
      for (let i = 0; i < route.length; i += 1) {
        this.routes.push(route[i]);
      }

      if (callback !== null) {
        callback(this);
      }
    } else {
      throw new Error(`Second argument must either String or Object, given ${secondArgument}.`);
    }

    // return to prev prefix and config
    this.prefix = previousPrefix;
    this.config = previousConfig;
  }

  /**
   * @function map
   * @description Return map of registered route.
   * @returns array
   */
  map() {
    return this.routes;
  }

  /**
   * @static @function parseResourceController
   * @description Parse given controller file name to resource routes.
   *
   * @param {String} prefix prefix for resource controller
   * @param {object} config object configuration
   * @param {string} controllerName controller file name to be register in this resource prefix.
   *
   * @returns array of routes
   */
  static parseResourceController(prefix, config, controllerName) {
    // Delete double or more forward slash.
    // Also delete leading and trailing forward slash.
    const idNameCandidate = `${prefix}`.replace(/\/\/+/g, '/').replace(/^\/|\/$/g, '');

    // note: the `:id` is written to `prefix_name_id`,
    // if your prefix name contain forward slash, it will be converted to underscore.
    // For instance, your prefix is `/album/:id/photo` it later will be converted to
    // `album_id_photo_id`, then you can obtain its value via `request` express object,
    // in this case it can be obtain using `req.params.album_id_photo_id`.
    // This helps programmer to understand what value they will get.
    let idName = ':id';
    if (prefix !== '/' && prefix !== '' && prefix !== null) {
      idName = `${idNameCandidate}`.replace(/\/+/g, '_');
      idName = `:${idName}_id`;
    }

    const arrayMethod = {
      // is an index, the route path is GET `{prefix}/`
      index: {
        path: `${prefix}`,
        verb: 'GET',
        config: {
          as: `${idNameCandidate}.index`,
        },
      },
      // is a view for form, GET `{prefix}/create`
      create: {
        path: `${prefix}/create`,
        verb: 'POST',
        config: {
          as: `${idNameCandidate}.create`,
        },
      },
      // POST route, ussualy for create data, POST `{prefix}/`
      store: {
        path: `${prefix}`,
        verb: 'POST',
        config: {
          as: `${idNameCandidate}.store`,
        },
      },
      // show single data based on id, GET `{prefix}/:id`
      show: {
        path: `${prefix}/${idName}`,
        verb: 'GET',
        config: {
          as: `${idNameCandidate}.show`,
        },
      },
      // for edit form, GET `{prefix}/:id/edit`
      edit: {
        path: `${prefix}/${idName}/edit`,
        verb: 'GET',
        config: {
          as: `${idNameCandidate}.edit`,
        },
      },
      // edit handler, PATCH `{prefix}/:id`
      update: {
        path: `${prefix}/${idName}`,
        verb: 'PATCH',
        config: {
          as: `${idNameCandidate}.update`,
        },
      },
      // delete handler, DELETE `{prefix}/:id`
      destroy: {
        path: `${prefix}/${idName}`,
        verb: 'DELETE',
        config: {
          as: `${idNameCandidate}.destroy`,
        },
      },
    };

    const controllerString = `app/Http/Controller/${controllerName}`;
    const Controller = Loader(controllerString);

    const routes = [];
    const arrayMethodKeys = Object.keys(arrayMethod);
    for (let i = 0; i < arrayMethodKeys.length; i += 1) {
      // Check if prototype method is exist.
      // prototype method need initiation, using `new` keyword.
      const functionNeedInitiationExist = Object.prototype
      .hasOwnProperty.call(Controller.prototype, arrayMethodKeys[i]);

      // If prototype method fails, then try to looking for static method.
      const staticFunctionExist = Object.prototype
        .hasOwnProperty.call(Controller, arrayMethodKeys[i]);

      const method = arrayMethod[arrayMethodKeys[i]];
      const httpVerb = method.verb;
      const routePath = `${method.path}`.replace(/\/\/+/g, '/');

      if (functionNeedInitiationExist || staticFunctionExist) {
        // console.log(httpVerb, routePath, config, `${controllerName}.${arrayMethodKeys[i]}`, {});
        const route = Router.routeRegister(httpVerb, routePath, method.config,
          `${controllerName}.${arrayMethodKeys[i]}`, config);

        routes.push(route);
      }
    }

    return routes;
  }

  /**
   * @static @function routeFunctionLoader
   * @description Load Controller name and function name to route.
   *
   * @param {string} namespace Controller and function name, i.e: `HomeController.index`
   *
   * @example Router.routeFunctionLoader('HomeController.index')
   * @example Router.routeFunctionLoader('HomeController.destroy')
   *
   * @returns Function of given name inside given class name.
   */
  static routeFunctionLoader(namespace) {
    // using indexOf https://jsperf.com/string-prototype-contains-vs-match-vs-indexof/7
    // is faster than regex
    if (namespace.toLowerCase().indexOf('.') === -1) {
      throw new Error('String is not contain dot, you must write it as \'ClassController.funcName\'');
    }

    // Controller candidate must in format 'ClassController.functionName',
    // For instance: `HomeController.index`
    const controllerCandidate = namespace.split('.');
    // Zero index array, 0 = class name, 1 = function name
    // For instance: 0 = `HomeController` and 1 = `index`
    // For controller name, add `app/Http/Controller/` prefix,
    // it follows directory structure of this application.
    const controllerClass = `app/Http/Controller/${controllerCandidate[0]}`;
    const controllerFunction = controllerCandidate[1];

    // Try to load class and make sure if function name is exist
    const Controller = Loader(controllerClass);

    // Check if prototype method is exist.
    // prototype method need initiation, using `new` keyword.
    const functionNeedInitiationExist = Object.prototype
      .hasOwnProperty.call(Controller.prototype, controllerFunction);

    // If prototype method fails, then try to looking for static method.
    const staticFunctionExist = Object.prototype
      .hasOwnProperty.call(Controller, controllerFunction);

    // Check which method is exist, if both is not exist, then throw an error.
    if (functionNeedInitiationExist) {
      return (new Controller())[controllerFunction];
    } else if (staticFunctionExist) {
      return Controller[controllerFunction];
    }

    throw new Error(`Function '${controllerFunction}' is not exist in Class '${controllerClass}'`);
  }

  /**
   * @static @function loadMiddleware
   * @summary Load middleware by file name
   * @description Middleware must be inside `app/Http/Middleware` directory.
   * And must be specify a function named `handle`, it can be static or not.
   *
   * @param {string} classname Middleware class file name.
   *
   * @example Router.loadMiddleware('AuthMiddleware');
   *
   * @returns function on success
   * @throws handle function not found
   */
  static loadMiddleware(classname) {
    const middlewareClass = `app/Http/Middleware/${classname}`;
    const Middleware = Loader(middlewareClass);
    const handleFunctionName = 'handle';

    const functionNeedInitiationExist = Object.prototype
      .hasOwnProperty.call(Middleware.prototype, handleFunctionName);

    const staticFunctionExist = Object.prototype
      .hasOwnProperty.call(Middleware, handleFunctionName);

    if (functionNeedInitiationExist) {
      return (new Middleware())[handleFunctionName];
    } else if (staticFunctionExist) {
      return Middleware[handleFunctionName];
    }

    throw new Error(`Middleware handle function is not exist in class '${middlewareClass}'`);
  }

  /**
   * @static @function configFunctionLoader
   * @summary Parse Config
   * @description Parsing configuration object and return
   * array of middleware and alias name of this route.
   * The config object contains `middleware` name and `as` name.
   *
   * Another object key will not counted as config.
   *
   * @param {object} config Array of Object of configuration
   *
   * @example Router.configFunctionLoader({middleware: 'AuthMiddleware', as: 'route_name'});
   * See {@link Router.loadMiddleware} if you input a string as parameter.
   *
   * @example Router.configFunctionLoader({as: 'route_name', middleware: (req, res, next) => {}});
   * @example Router.configFunctionLoader({middleware: [(req, res, next) => {}]});
   * @example Router.configFunctionLoader({middleware: ['MiddlewareName', (req, res, next) => {}]});
   *
   * @returns object with middleware key and as key.
   * Middleware key contains array of callback function.
   */
  static configFunctionLoader(config) {
    const middlewares = [];
    let name = '';
    for (let i = 0; i < config.size; i += 1) {
      if (Object.prototype.hasOwnProperty.call(config.get(i), 'middleware')) {
        if (config.get(i).middleware.constructor === Array) {
          // Array.concat is fast, but it need to be assigned to a variable.
          // Need to load a function based on middleware name.
          for (let j = 0; j < config.get(i).middleware.length; j += 1) {
            if (config.get(i).middleware[j].constructor === String) {
              const middleware = Router.loadMiddleware(config.get(i).middleware[j]);
              middlewares.push(middleware);
            } else if (config.get(i).middleware[j].constructor === Function) {
              middlewares.push(config.get(i).middleware[j]);
            }
          }
        } else if (config.get(i).middleware.constructor === String) {
          if (config.get(i).middleware !== '') {
            const middleware = Router.loadMiddleware(config.get(i).middleware);
            middlewares.push(middleware);
          }
        } else if (config.get(i).middleware.constructor === Function) {
          middlewares.push(config.get(i).middleware);
        }
      }

      if (Object.prototype.hasOwnProperty.call(config.get(i), 'as')) {
        name += config.get(i).as;
      }
    }

    // This will override all assigned value, if last method doesn't has any `as` name.
    // Last method is http verb method, i.e: `Router.get`, `Router.post` etc.
    if (config.last() !== undefined) {
      if (Object.prototype.hasOwnProperty.call(config.last(), 'as') === false) {
        name = '';
      }
    }

    const finalConfig = {
      middlewares,
      as: name,
    };

    return finalConfig;
  }

  /**
   * @static @function callbackLoader
   * @description For loading callback if the argument is not function or instance of function
   * @param arg - must callback function or String of controller name.
   *
   * @returns Function or see routeFunctionLoader {@link Router.routeFunctionLoader}
   * to know how function will be load.
   *
   * @throws TypeError
   */
  static callbackLoader(arg) {
    const type = arg.constructor;
    if (type === Function || type.name === 'AsyncFunction') {
      return arg;
    } else if (type === String) {
      // load string to function
      return Router.routeFunctionLoader(arg);
    }

    throw new TypeError(`${arg} is not String or Function, given ${type}.`);
  }

  /**
   * @static @function routeRegister
   * @description Parse all configuration to function that ready to call and register to route.
   *
   * @param {string} verb http verb to be register, `GET`, `POST` or etc
   * @param {string} uri prefix of route
   * @param {object|function|string} param2 can be config (if object),
   * callback function for expressjs or controller `classname.function_name`.
   * See {@link Router.callbackLoader}
   *
   * @param {function} param3 can be either `ControllerClass.FuncName` or callback function
   * @see {@link callbackLoader}
   *
   * @param {object} additionalConfig configuration like middleware or etc,
   * See {@link Router.configFunctionLoader}
   *
   * * @example Router.routeRegister('GET', '/foo', {}, () => {
   *
   * }, { middleware: [], 'as': 'name' });
   *
   * @returns new route object contain following object keys:
   * http verb, prefix path, handler function, parsed config, route alias name.
   * See {@link Router.configFunctionLoader} to know how config object will be parsed.
   *
   * @throws TypeError if input type is not same as required type.
   */
  static routeRegister(verb, uri, param2, param3, additionalConfig) {
    let registeredRoute = {};
    // https://jsperf.com/constructor-vs-typeof-array-type-checking
    // .constructor is fastest
    if (param2.constructor === Object) {
      // If `param2` (second parameter) is an Object, then it should be a config,
      // so, presume that `param3` is an function
      // or controller name to be loaded by `callbackLoader`
      const config = Router.configFunctionLoader(additionalConfig.push(param2));

      registeredRoute = {
        verb,
        path: uri,
        handler: Router.callbackLoader(param3),
        config,
        as: config.as,
      };
    } else if (param2.constructor === Function || param2.constructor.name === 'AsyncFunction') {
      // If second argument is function, presume that it is a callback function.
      const config = Router.configFunctionLoader(additionalConfig);

      registeredRoute = {
        verb,
        path: uri,
        handler: Router.callbackLoader(param2),
        config,
        as: config.as,
      };
    } else if (param2.constructor === String) {
      // if second parameter is string, presume it is a controller name,
      // which it can be loaded to a function by `callbackLoader`.
      const config = Router.configFunctionLoader(additionalConfig);

      registeredRoute = {
        verb,
        path: uri,
        handler: Router.callbackLoader(param2),
        config,
        as: config.as,
      };
    } else {
      // Else, throw an error.
      throw new TypeError('Second parameter must be either object, ' +
      'handler function or string of controller name. ' +
      `Currently return ${param2.constructor}`);
    }

    return registeredRoute;
  }

}

/**
  * @exports Router
  * @description Will return new Router class object.
  * This avoid another class or function outside this class
  * to call static method that is prohibited because static method like
  * `Route.loadFunction`, `Router.callbackLoader` and `Router.routeRegister` are use to
  * load function from controller.
  * In brief, all static method in this class
  * SHOULD NOT needed by user of this application.
  */
module.exports = new Router();
