const { paths, resolvePath } = require('./utils');

function getLoaders() {
  return [
    {
      test: /\.(ts|tsx)?$/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        cacheCompression: false,
      },
      exclude: paths.nodeModules,
    },
    {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.css$/,
      include: /\.module\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]',
          },
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
    {
      test: /\.(bmp|gif|jpe?g$|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/images/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[hash:8].[ext]',
        },
      },
    },
  ];
}

module.exports = { getLoaders };
