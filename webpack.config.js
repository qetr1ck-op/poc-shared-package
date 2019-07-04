const { getPlugins } = require('./webpack/plugins');
const { getLoaders } = require('./webpack/loaders');
const { inputs } = require('./webpack/input');
const { output } = require('./webpack/output');
const { resolve, devtool, splitChunks, mode, stats } = require('./webpack/utils');

module.exports = () => {
  return {
    entry: inputs,
    output,
    mode,
    resolve,
    devtool,
    stats,
    optimization: {
      splitChunks,
    },
    module: {
      rules: getLoaders(),
    },
    plugins: getPlugins(),
  };
};
