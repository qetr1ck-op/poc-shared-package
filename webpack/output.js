const { paths, ifProduction } = require('./utils');

const output = {
  path: paths.build,
  filename: ifProduction('[name].[contenthash].bundle.js', '[name].js'),
  publicPath: '', // TODO: to config
};

module.exports = { output };
