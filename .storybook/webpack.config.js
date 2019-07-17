const { resolvePath, paths } = require('../webpack/utils');
const { getPlugins } = require('../webpack/plugins');
const { getLoaders } = require('../webpack/loaders');

function fixDefaultSvgLoader(config) {
  config.module.rules = config.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      };
    }

    return rule;
  });

  return config;
}

module.exports = ({ config }) => {
  config = fixDefaultSvgLoader(config);

  // TODO: generic
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            paths: [resolvePath('node_modules'), resolvePath('src/static')],
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      exclude: paths.nodeModules,
      use: ['@svgr/webpack', 'url-loader'],
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
