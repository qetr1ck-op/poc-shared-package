const fs = require('fs');

const path = require('path');
const { getIfUtils } = require('webpack-config-utils');

const nodeEnvs = ['production', 'development'];
const ENV = process.env.NODE_ENV;
if (!nodeEnvs.includes(ENV)) {
  throw new Error(`
      invalid NODE_ENV: ${ENV}
      valid values: ${nodeEnvs.toString()}
   `);
}

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);
const paths = {
  root: resolvePath('.'),
  wwwRoot: path.join('app/', 'build/'),
  build: resolvePath('build'),
  buildHtml: resolvePath('build/index.html'),
  public: resolvePath('public'),
  publicHtml: resolvePath('public/index.html'),
  appSrc: resolvePath('src'),
  srcIndex: resolvePath('src/index.tsx'),
  nodeModules: /node_modules/,
};

const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@root': paths.appSrc,
  },
};

const { ifDevelopment, ifProduction } = getIfUtils(ENV);

const stats = ifDevelopment('minimal', 'normal');

const devtool = ifDevelopment('cheap-module-source-map', 'none');

const mode = ifDevelopment('development', 'production');

const splitChunks = {
  cacheGroups: {
    commons: {
      test: /node_modules/,
      name: 'vendors',
      chunks: 'all',
    },
  },
};

module.exports = {
  paths,
  resolvePath,
  ifDevelopment,
  ifProduction,
  resolve,
  stats,
  devtool,
  mode,
  splitChunks,
};
