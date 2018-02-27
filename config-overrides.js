const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
    config = rewireCssModules(config, env);

    config.resolve.modules.push('src');

    return config;
}
