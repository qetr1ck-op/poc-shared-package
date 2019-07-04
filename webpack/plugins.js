const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { removeEmpty } = require('webpack-config-utils');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { paths, ifProduction, ifDevelopment } = require('./utils');

function getPlugins() {
  return removeEmpty([
    ifDevelopment(
      new ForkTsCheckerWebpackPlugin({
        reportFiles: ['**', '!**/*.json', '!**/__tests__/**', '!**/?(*.)(spec|test).*'],
        async: false,
        checkSyntacticErrors: true,
        useTypescriptIncrementalApi: true,
        formatter: 'codeframe',
        formatterOptions: {
          forceColor: true,
        },
        // tslint: true,
      }),
    ),
    ifDevelopment(new CircularDependencyPlugin({ exclude: paths.nodeModules, failOnError: true })),
    ifDevelopment(new WebpackBar()),
    new webpack.DefinePlugin({
      'process.env': {
        isProd: JSON.stringify(ifProduction(true, false)),
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebpackPlugin(),
  ]);
}

module.exports = { getPlugins };
