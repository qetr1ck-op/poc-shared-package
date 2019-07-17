const { getPlugins } = require('./webpack/plugins');
const { getLoaders } = require('./webpack/loaders');
const { inputs } = require('./webpack/input');
const { output } = require('./webpack/output');
const { resolve, devtool, mode, stats } = require('./webpack/utils');

module.exports = () => {
  return {
    entry: inputs,
    output,
    mode,
    resolve,
    devtool,
    stats,
    module: {
      rules: getLoaders(),
    },
    plugins: getPlugins(),
  };
};
