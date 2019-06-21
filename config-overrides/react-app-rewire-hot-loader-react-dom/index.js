const { addWebpackAlias } = require('customize-cra');

module.exports = (config, env) => {
  if (env === 'development') {
    const alias = {
      'react-dom': '@hot-loader/react-dom'
    };
    config = addWebpackAlias(alias);
  }
  return config;
};
