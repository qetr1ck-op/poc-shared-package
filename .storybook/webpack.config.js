const { getPlugins } = require('../webpack/plugins');
const { getLoaders } = require('../webpack/loaders');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
