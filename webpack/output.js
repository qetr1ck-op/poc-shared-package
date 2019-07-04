const { paths, ifProduction } = require('./utils');

const output = {
  path: paths.dist,
  filename: ifProduction('[name].[contenthash].bundle.js', '[name].js'),
  libraryTarget: 'umd'
};

module.exports = { output };
